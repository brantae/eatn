class Post < ApplicationRecord
  has_one_attached :image

  belongs_to :user
  has_many :comments, dependent: :destroy

  has_and_belongs_to_many :flairs

  validates :caption, presence: true

  validates :image, presence: true, on: :create
  validate :image_type, if: -> { image.attached? }

  private

  def image_type
    if !image.content_type.in?(%w(image/jpeg image/png image/gif))
      errors.add(:image, 'must be a JPEG, PNG, or GIF')
    end
  end

end
