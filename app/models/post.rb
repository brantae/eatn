class Post < ApplicationRecord
  has_one_attached :image

  belongs_to :user

  has_and_belongs_to_many :flairs

  validates :caption, presence: true
  validates :image, presence: true
end
