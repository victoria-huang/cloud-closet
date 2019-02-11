class Api::V1::ClothingsController < ApplicationController
  before_action :set_clothing, only: [:show, :update, :destroy]

  def index
    clothings = Clothing.all
    render json: clothings, status: 200
  end

  def create
    clothing = Clothing.create(clothing_params)
    render json: clothing, status: 201
  end

  def update
    @clothing.update(clothing_params)
    render json: @clothing, status: 200
  end

  def destroy
    clothingId = @clothing.id
    @clothing.destroy
    render json: {message:"Clothing item deleted", clothingId: clothingId}
  end

  def show
    render json: @clothing, status: 200
  end

  private
  def clothing_params
    params.permit(:clothing_type, :image, :user_id)
  end

  def set_clothing
    @clothing = Clothing.find(params[:id])
  end
end
