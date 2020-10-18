class RecipeHop < ApplicationRecord
  belongs_to :hop
  belongs_to :recipe, optional: true
  belongs_to :brew_log, optional: true
end
