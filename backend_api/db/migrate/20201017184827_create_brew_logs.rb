class CreateBrewLogs < ActiveRecord::Migration[6.0]
  def change
    create_table :brew_logs do |t|
      t.integer  "user_id"
      t.integer  "recipe_id"
      t.string   "name"
      t.string   "method"
      t.string   "boil_time"
      t.string   "batch_size"
      t.string   "pre_boil_size"
      t.string   "pre_boil_gravity"
      t.string   "target_fg"
      t.string   "target_og"
      t.string   "ibu"
      t.string   "srm"
      t.string   "mash_ph"
      t.string   "mash_schedule"
      t.string   "style"
      t.timestamps
    end
  end
end
