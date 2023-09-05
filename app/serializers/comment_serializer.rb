class CommentSerializer < ActiveModel::Serializer
    attributes :content, :id, :user_id, :post_id
end