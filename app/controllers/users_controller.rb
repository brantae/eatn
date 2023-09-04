class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    wrap_parameters format: []

    #skip_before_action :authorize, only: :create

    def index 
        users = User.all 
        render json: users
    end

    def show 
        if params[:id]
            user = User.find(params[:id])
            render json: user
        else
            user = User.find_by(id: session[:user_id])
            render json: user
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
