class PostsFlair < ApplicationRecord
  belongs_to :post
  belongs_to :flair
end
