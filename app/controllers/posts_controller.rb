class PostsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    wrap_parameters format: []

    def index 
        posts = Post.all
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

    def render_not_found_response 
        render json: { error: "Post not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
end
