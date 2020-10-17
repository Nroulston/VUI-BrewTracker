class RecipeYeast < ApplicationRecord
  belongs_to :yeast
  belongs_to :recipe
  belongs_to :brewlog
end
