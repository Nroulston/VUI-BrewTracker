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

  def hops_attributes=(hops_attributes)
    hops_attributes.each do |hop_attributes|
      hop = Hop.find_or_create_by(hop_attributes)
      self.hops << hop
    end
  end
end
