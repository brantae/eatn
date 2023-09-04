class FlairsController < ApplicationController

    def index 
        flairs = Flair.all 
        render json: flairs
    end

    def show
        flair = Flair.find(params[:id])
        render json: flair
    end

end
