class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    wrap_parameters format: []

    def index 
        users = User.all 
        render json: users
    end

    def show 
        if current_user
            render json: current_user, status: :ok
        else
            render json: {error: "Not Authorized"}, status: :unauthorized
        end
    end

    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user
    end

    private 

    def user_params 
        params.permit(:name, :username, :password, :email)
    end
end
