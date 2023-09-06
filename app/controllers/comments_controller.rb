class CommentsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        if params[:post_id]
        post = Post.find(params[:post_id])
        comments = post.comments
        render json: comments
        else 
        comments = Comment.all
        render json: comments
        end
    end

    def create
        @post = Post.find(params[:post_id])
        @comment = @post.comments.build(comment_params)
    
        if @comment.save
          render json: @comment, status: :created
        else
          render json: { errors: @comment.errors.full_messages }, status: :unprocessable_entity
        end
      end

    def destroy
        comment = Comment.find(params[:id])
        comment.destroy
        head :no_content
    end

    private

    def comment_params
        params.require(:comment).permit(:content)
    end
end
