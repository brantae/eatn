class User < ApplicationRecord
    has_secure_password
    
    has_many :posts
    has_many :comments

    validates :username, presence: true, uniqueness: {
        message: "is already taken"
    }
    validates :email, presence: true, format: { 
        with: /\A[\w+\-.]+@[\w\-.]+\.com\z/i, message: "is not a valid email address" 
    }
end
