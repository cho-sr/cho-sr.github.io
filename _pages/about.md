---
layout: about
title: about
permalink: /
subtitle: Hansung Univ, Intelligent System and IoT

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>cho020218@gmail.com</p>
    <p>116, Samseonyo-ro 16-gii</p>
    <p>Seongbuk-gu, Seoul</p>

selected_papers: false # the publication list is included in the page content below
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<strong class="about-section-title">About</strong>

I'm Cho Seok-lea, an undergraduate student in the Department of Intelligent Systems and IoT at Hansung University.

My research interests lie in efficient on-device AI, edge inference, AI accelerators, and low-level system optimization

I also research federated learning and trustworthy AI, focusing on reliable, secure in distributed environments.

---

<strong class="about-section-title">Research Interests</strong>

- **Energy Efficient Edge Inference**
- **Federated Learning:** Distributed Optimization, Attacks and Defenses in Distributed AI and FL
- **Deep Learning/AI Accelerator**

---

<strong class="about-section-title">Experiences</strong>

- **Undergraduate Researcher, Prof. Jinwoo Gong** / 2025.12 - Present
- **Research Intern, High-Performance Computing Lab, Chung-Ang University, Korea** / 2026.04 - Present
- **LG Aimers 4th** / 2024.01 - 2024.03
- **BoostCourse Coaching Study 13th** / 2023.10 - 2023.11
- **Hansung University, IT Convergence Engineering (Intelligent Systems Track)** / 2021 - Present

[See more]({{ '/cv/' | relative_url }})

---

<strong class="about-section-title">Project</strong>

I have built edge AI, mobile, IoT capstone, federated learning, and video search projects using PyTorch, CUDA, ExecuTorch, Kotlin, Swift, and Jetpack Compose.

[See more]({{ '/projects/' | relative_url }})

---

<strong class="about-section-title">Award</strong>

- <strong>Hansung University, Internet of Things Track Capstone Design Excellence Award (2nd place)</strong>
- <strong>Hansung University, Intelligence System Track Capstone Design Excellence Award (2nd place)</strong>

---

<strong class="about-section-title">Recent Publication</strong>

<style>
  .post article > .clearfix {
    font-size: 19px;
    line-height: 1.5;
  }

  .post article > .clearfix > hr {
    overflow: hidden;
    margin: 1.5rem 0;
  }

  .about-section-title {
    color: var(--global-theme-color);
  }

  .post article > .clearfix .publications .abbr {
    display: none;
  }

  .post article > .clearfix .publications .row > .col-sm-8 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .post article > .clearfix .publications .title {
    font-weight: 700;
  }

  .post article > .clearfix .publications .author > em {
    border-bottom: 0;
    font-style: italic;
  }

  #cho2027consistent > .author + .periodical,
  #kim2025llmleakage > .author + .periodical {
    display: none;
  }
</style>

<div class="publications">
  {% bibliography --group_by none --query @*[selected=true]* %}
</div>

[See more]({{ '/publications/' | relative_url }})
