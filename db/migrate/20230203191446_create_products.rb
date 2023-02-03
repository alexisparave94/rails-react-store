class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :sku, null: false
      t.string :name, null: false
      t.text :description
      t.integer :price, default: 0
      t.integer :stock, default: 0

      t.timestamps
    end
  end
end
