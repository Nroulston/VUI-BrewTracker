class CreateHops < ActiveRecord::Migration[6.0]
  def change
    create_table :hops do |t|
      t.string   "name"
      t.string   "form"
      t.string   "alpha_acid"
      t.timestamps
    end
  end
end
