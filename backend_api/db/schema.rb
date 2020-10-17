# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_10_17_190249) do

  create_table "brew_logs", force: :cascade do |t|
    t.integer "user_id"
    t.integer "recipe_id"
    t.string "name"
    t.string "method"
    t.string "boil_time"
    t.string "batch_size"
    t.string "pre_boil_size"
    t.string "pre_boil_gravity"
    t.string "target_fg"
    t.string "target_og"
    t.string "ibu"
    t.string "srm"
    t.string "mash_ph"
    t.string "mash_schedule"
    t.string "style"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "fermentables", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "hops", force: :cascade do |t|
    t.string "name"
    t.string "form"
    t.string "alpha_acid"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "other_ingredients", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "recipe_fermentables", force: :cascade do |t|
    t.integer "fermentable_id"
    t.integer "recipe_id"
    t.integer "brew_log_id"
    t.integer "time_added"
    t.string "measurement"
    t.integer "measurement_amount"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "recipe_hops", force: :cascade do |t|
    t.integer "hop_id"
    t.integer "recipe_id"
    t.integer "brew_log_id"
    t.integer "time_added"
    t.string "measurement"
    t.integer "measurement_amount"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "recipe_other_ingredients", force: :cascade do |t|
    t.integer "other_ingredient_id"
    t.integer "recipe_id"
    t.integer "brew_log_id"
    t.integer "time_added"
    t.string "measurement"
    t.integer "measurement_amount"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "recipe_yeasts", force: :cascade do |t|
    t.integer "yeast_id"
    t.integer "recipe_id"
    t.integer "brew_log_id"
    t.integer "time_added"
    t.string "measurement"
    t.integer "measurement_amount"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "recipes", force: :cascade do |t|
    t.integer "user_id"
    t.string "name"
    t.string "method"
    t.string "boil_time"
    t.string "batch_size"
    t.string "pre_boil_size"
    t.string "pre_boil_gravity"
    t.string "target_fg"
    t.string "target_og"
    t.string "ibu"
    t.string "srm"
    t.string "mash_ph"
    t.string "mash_schedule"
    t.string "style"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "yeasts", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
