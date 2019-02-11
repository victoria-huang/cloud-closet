class CreateClothings < ActiveRecord::Migration[5.2]
  def change
    create_table :clothings do |t|
      t.string :clothing_type
      t.string :image_url
      t.integer :user_id

      t.timestamps
    end
  end
end
