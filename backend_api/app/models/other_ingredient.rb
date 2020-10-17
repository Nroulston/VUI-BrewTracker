class OtherIngredient < ApplicationRecord
  validates :name, uniqueness: true
  has_many :recipe_other_ingredients

  has_many :recipes, through: :recipe_other_ingredients
  has_many :brew_logs, through: :recipe_other_ingredients
end
