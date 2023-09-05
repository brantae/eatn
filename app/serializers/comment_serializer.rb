class CommentSerializer < ActiveModel::Serializer
    attributes :content, :id, :post_id

    belongs_to :post
end