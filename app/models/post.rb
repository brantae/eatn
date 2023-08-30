class Post < ApplicationRecord
  has_one_attached :image

  belongs_to :user

  has_many :posts_flairs
  has_many :flairs, through: :posts_flairs

  validates :caption, presence: true
  validates :flair, presence: true
end
