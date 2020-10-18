class RecipeOtherIngredient < ApplicationRecord
  belongs_to :other_ingredient
  belongs_to :recipe, optional: true
  belongs_to :brewlog,  optional: true
end
