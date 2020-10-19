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

  def fermentables_attributes=(fermentables_attributes)
    fermentables_attributes.each do |fermentable_attributes|
      @fermentable = Fermentable.find_or_create_by(fermentable_attributes)
      self.fermentables << @fermentable
    end
  end

  def yeasts_attributes=(yeasts_attributes)
    yeasts_attributes.each do |yeast_attributes|
      @yeast = Yeast.find_or_create_by(yeast_attributes)
      self.yeasts << @yeast
    end
  end

  def other_ingredients_attributes=(other_ingredients_attributes)
    other_ingredients_attributes.each do |other_ingredient_attributes|
      @other_ingredient = OtherIngredient.find_or_create_by(other_ingredient_attributes)
      self.other_ingredients << @other_ingredient
    end
  end
end
