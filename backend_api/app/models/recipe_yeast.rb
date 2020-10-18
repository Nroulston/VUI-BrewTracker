class RecipeYeast < ApplicationRecord
  belongs_to :yeast
  belongs_to :recipe, optional: true
  belongs_to :brewlog, optional: true
end
