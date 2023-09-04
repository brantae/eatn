class SessionsController < ApplicationController
    wrap_parameters format: []
    #skip_before_action :authorize, only: [:create]

    def create 
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password]) #if user && user.authenticate is true
            session[:user_id] = user.id 
                  # Debugging statement to print the session
      puts "Session after login: #{session.inspect}"
            render json: user, status: :created
        else 
            render json: { errors: ["Invalid username or password"]}, status: :unauthorized
        end
    end
    
    def destroy 
        session.delete :user_id 
        head :no_content
    end
end
