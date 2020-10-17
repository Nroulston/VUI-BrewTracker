class Recipe < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :brew_logs
  belongs_to :user
  
  has_many :recipe_other_ingredients
  has_many :other_ingredients, through: :recipe_other_ingredients

  has_many :recipe_yeasts 
  has_many :yeasts, through: :recipe_yeasts

  has_many :recipe_fermentables
  has_many :fermentables, through: :recipe_fermentables

  has_many :recipe_hops
  has_many :hops, through: :recipe_hops
end
