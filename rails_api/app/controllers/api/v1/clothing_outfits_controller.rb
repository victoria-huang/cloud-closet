class Api::V1::ClothingOutfitsController < ApplicationController
  before_action :set_clothing_outfit_outfit, only: [:show, :update, :destroy]

  def index
    clothing_outfits = ClothingOutfit.all
    render json: clothing_outfits, status: 200
  end

  def create
    clothing_outfit = ClothingOutfit.create(clothing_outfit_params)
    render json: clothing_outfit, status: 201
  end

  def update
    @clothing_outfit.update(clothing_outfit_params)
    render json: @clothing_outfit, status: 200
  end

  def destroy
    clothing_outfitId = @clothing_outfit.id
    @clothing_outfit.destroy
    render json: {message:"ClothingOutfit deleted", clothing_outfitId: clothing_outfitId}
  end

  def show
    render json: @clothing_outfit, status: 200
  end

  private
  def clothing_outfit_params
    params.permit(:clothing_id, :outfit_id)
  end

  def set_clothing_outfit
    @clothing_outfit = ClothingOutfit.find(params[:id])
  end
end
