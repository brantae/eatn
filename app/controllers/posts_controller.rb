class PostsController < ApplicationController

    def index 
        user = User.find_by(params[:user_id])
        posts = user.posts
        render json: posts
    end

    def show 
        post = Post.find_by(params[:id])
        render json: post 
    end

    def create 
        post = Post.create!(post_params)
        render json: post
    end

    private 

    def post_params 
        params.permit(:caption, :user_id, :image)
    end
end
