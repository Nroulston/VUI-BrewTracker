class Fermentable < ApplicationRecord
  validates :name, uniqueness: true
  
  has_many :recipe_fermentables

  has_many :recipes, through: :recipe_fermentables
  has_many :brew_logs, through: :recipe_fermentables
end
