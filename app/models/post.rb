class Post < ApplicationRecord
  belongs_to :user

  has_many :posts_flairs
  has_many :flairs, through: :posts_flairs
end
