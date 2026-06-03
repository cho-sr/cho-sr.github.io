# frozen_string_literal: true

Jekyll::Hooks.register :site, :after_init do |site|
  next unless site.respond_to?(:includes_load_paths)

  overrides_path = File.join(site.source, "_cv_includes")
  next unless Dir.exist?(overrides_path)
  next if site.includes_load_paths.include?(overrides_path)

  site.includes_load_paths.unshift(overrides_path)
end
