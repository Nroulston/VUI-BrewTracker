class Hop < ApplicationRecord
  validates :name, uniqueness: {scope: [:form, :alpha_acid]}
  
  has_many :recipe_hops
  has_many :recipes, through: :recipe_hops
  has_many :brew_logs, through: :recipe_hops
end
