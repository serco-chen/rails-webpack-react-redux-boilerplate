module ApplicationHelper
  def webpack_bundle_tag(bundle)
    src =
      if Rails.configuration.webpack[:use_manifest]
        manifest = Rails.configuration.webpack[:asset_manifest]
        filename = manifest[bundle]['js']

        "/assets/#{filename}"
      else
        "#{Rails.configuration.webpack[:development_host]}/assets/bundle.js"
      end
    javascript_include_tag(src)
  end
end
