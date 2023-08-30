class FlairsController < ApplicationController

    def index 
        flairs = Flair.all 
        render json: flairs
    end

end
