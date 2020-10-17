class CreateRecipeHops < ActiveRecord::Migration[6.0]
  def change
    create_table :recipe_hops do |t|
      t.integer  "hop_id"
      t.integer  "recipe_id"
      t.integer  "brew_log_id"
      t.integer  "time_added"
      t.string   "measurement"
      t.integer  "measurement_amount"
      t.timestamps
    end
  end
end
