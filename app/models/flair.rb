class Flair < ApplicationRecord
    has_many :posts_flairs
    has_many :posts, through: :posts_flairs
end
