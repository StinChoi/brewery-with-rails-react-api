class Api::BeersController < ApplicationController
  before_action :set_beer, only: [:show, :destroy, :update]

  # get /api/beers
    def index
      render json: Beer.all
    end
  
  # get /api/beers:id
    def show
      render json: @beer
    end
  
  # post /api/beers
    def create
      @beer = Beer.new(beer_params)
      if (@beer.save)
        render json: @beer
      else
        render json: { errors: @beer.errors }, status: :unprocessable_entity
      end
    end
  
  # put or patch /api/beers/:id
    def update
      if (@beer.update(beer_params))
        render json: @beer
      else
        render json: { errors: @beer.errors }, status: :unprocessable_entity
      end
    end
  
  # delete /api/beers/:id
    def destroy 
      render json: @beer
    end
  
    private
  
    def beer_params
      params.require(:beer).permit(:name, :abv, :style)
    end
  
    def set_beer
      @beer = Beer.find(params[:id])
    end
  
  end
  