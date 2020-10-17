class RecipeHop < ApplicationRecord
  belongs_to :hop
  belongs_to :recipe
  belongs_to :brewlog
end
