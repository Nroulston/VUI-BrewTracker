class CreateOtherIngredients < ActiveRecord::Migration[6.0]
  def change
    create_table :other_ingredients do |t|
      t.string   "name"
      t.timestamps
    end
  end
end
