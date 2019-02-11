class Api::V1::OutfitsController < ApplicationController
  before_action :set_outfit, only: [:show, :update, :destroy, :clothes]

  def index
    outfits = Outfit.all
    render json: outfits, status: 200
  end

  def create
    outfit = Outfit.create(outfit_params)
    render json: outfit, status: 201
  end

  def update
    @outfit.update(outfit_params)
    render json: @outfit, status: 200
  end

  def destroy
    outfitId = @outfit.id
    @outfit.destroy
    render json: {message:"Outfit deleted", outfitId: outfitId}
  end

  def show
    render json: @outfit, status: 200
  end

  def clothes
    outfitClothes = @outfit.clothings
    render json: outfitClothes, status: 200
  end

  private
  def outfit_params
    params.permit(:name, :user_id)
  end

  def set_outfit
    @outfit = Outfit.find(params[:id])
  end
end
