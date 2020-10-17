class RecipeOtherIngredient < ApplicationRecord
  belongs_to :other_ingredient
  belongs_to :recipe
  belongs_to :brewlog
end
