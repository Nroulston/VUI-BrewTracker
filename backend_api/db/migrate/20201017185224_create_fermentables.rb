class CreateFermentables < ActiveRecord::Migration[6.0]
  def change
    create_table :fermentables do |t|
      t.string   "name"
      t.timestamps
    end
  end
end
