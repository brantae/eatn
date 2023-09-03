class PostSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :caption, :user_id, :image, :user_name, :flairs

  def image
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end

  def user_name 
    object.user.name
  end

  def flairs
    object.flairs.pluck(:name)
  end
end
