module PropertiesHelper

	def property_thumbnailProperty
	   img = property_url.photo.present? ? property_url.photo.thumb.url : "placeholder.jpg"
		image_tag img, class: "Property-thumb"
	end


	def property_thumbnail_url
	   property_url.photo.present? ? property_url.photo.thumb.url : "placeholder.jpg"
	end


	def property_photo_url property
      property.photo.present? ? property.photo.url : asset_url("placeholder.jpg")
	end
end
