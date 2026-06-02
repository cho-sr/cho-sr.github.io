const fs = require("fs");

const RSS_URL = process.env.TISTORY_RSS_URL || "https://eve-com.tistory.com/rss";
const OUTPUT_FILE = "_data/tistory_thumbnails.yml";

function decodeEntities(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));
}

function normalizeUrl(value) {
  const decoded = decodeEntities(value.trim());
  return decoded.startsWith("//") ? `https:${decoded}` : decoded;
}

function yamlQuote(value) {
  return JSON.stringify(value);
}

function firstThumbnail(itemXml) {
  const decoded = decodeEntities(itemXml);
  const images = decoded.matchAll(/<img\b(?=[^>]*\ssrc=)[^>]*?\ssrc\s*=\s*(["'])(.*?)\1/gis);

  for (const image of images) {
    const src = normalizeUrl(image[2]);
    if (src && !src.includes("no-image-v1.png")) {
      return src;
    }
  }

  return "";
}

async function main() {
  const response = await fetch(RSS_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${RSS_URL}: ${response.status} ${response.statusText}`);
  }

  const rss = await response.text();
  const thumbnails = new Map();
  const items = rss.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/gi);

  for (const item of items) {
    const itemXml = item[1];
    const linkMatch = itemXml.match(/<link>\s*([\s\S]*?)\s*<\/link>/i);
    if (!linkMatch) continue;

    const link = decodeEntities(linkMatch[1].trim());
    const thumbnail = firstThumbnail(itemXml);
    if (link && thumbnail) {
      thumbnails.set(link, thumbnail);
    }
  }

  const lines = [`# Generated from ${RSS_URL} by bin/update_tistory_thumbnails.js`, "# Do not edit by hand."];

  if (thumbnails.size === 0) {
    lines.push("[]");
  } else {
    for (const [link, thumbnail] of thumbnails) {
      lines.push(`- url: ${yamlQuote(link)}`);
      lines.push(`  image: ${yamlQuote(thumbnail)}`);
    }
  }

  fs.writeFileSync(OUTPUT_FILE, `${lines.join("\n")}\n`);
  console.log(`Wrote ${thumbnails.size} Tistory thumbnails to ${OUTPUT_FILE}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
