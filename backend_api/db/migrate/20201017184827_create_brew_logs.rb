class CreateBrewLogs < ActiveRecord::Migration[6.0]
  def change
    create_table :brew_logs do |t|
      t.integer  "user_id"
      t.integer  "recipe_id"
      t.string "strike_volume"
      t.string "string_temp"
      t.string "mash_pH"
      t.string "orginal_gravity"
      t.timestamps
    end
  end
end
