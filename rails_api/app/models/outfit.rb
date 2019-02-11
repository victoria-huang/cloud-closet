class Outfit < ApplicationRecord
  belongs_to :user
  has_many :clothing_outfits, dependent: :delete_all
  has_many :clothings, through: :clothing_outfits
end
