class RecipeFermentable < ApplicationRecord
  belongs_to :fermentable
  belongs_to :recipe, optional: true
  belongs_to :brew_log, optional: true
end
