class FlairsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index 
        flairs = Flair.all 
        render json: flairs
    end

    def show
        flair = Flair.find(params[:id])
        render json: flair
    end

end
