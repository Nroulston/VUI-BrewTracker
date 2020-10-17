class RecipeFermentable < ApplicationRecord
  belongs_to :fermentable
  belongs_to :recipe
  belongs_to :brewlog
end
