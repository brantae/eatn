class PostSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :caption, :user_id, :image

  def image
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end
end
