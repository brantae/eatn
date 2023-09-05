class PostsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    wrap_parameters format: []
    before_action :authorize, only: [:create, :update, :destroy]

    def index 
        posts = Post.all
        render json: posts
    end

    def show 
        post = Post.find(params[:id])
        render json: post 
    end

    def create
        post = Post.create(create_post_params)
        if post.persisted?
          render json: post, status: :ok
        else
          render json: { errors: post.errors.full_messages }, status: :unprocessable_entity
        end
      end

    def update
        post = Post.find(params[:id])
        if post.user == @current_user
            if post.update(update_post_params)
            render json: post, status: :ok
            else
            render json: { errors: post.errors.full_messages }, status: :unprocessable_entity
            end
        else
            render json: { errors: 'Unauthorized' }, status: :unauthorized
        end
            end

    def destroy 
        post = Post.find(params[:id])
        post.destroy 
        head :no_content
    end

    private 

    def update_post_params
        params.require(:post).permit(:caption, flair_ids: [])
    end

    def create_post_params
        params.require(:post).permit(:caption, :image, flair_ids: []).merge(user_id: session[:user_id])
    end

    def render_not_found_response 
        render json: { error: "Post not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
end
