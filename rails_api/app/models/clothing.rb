class Clothing < ApplicationRecord
  belongs_to :user
  has_many :clothing_outfits, dependent: :delete_all
  has_many :outfits, through: :clothing_outfits, dependent: :delete_all
  has_one_attached :image
end
