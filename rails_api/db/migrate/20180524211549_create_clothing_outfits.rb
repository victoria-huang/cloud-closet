class CreateClothingOutfits < ActiveRecord::Migration[5.2]
  def change
    create_table :clothing_outfits do |t|
      t.integer :outfit_id
      t.integer :clothing_id

      t.timestamps
    end
  end
end
