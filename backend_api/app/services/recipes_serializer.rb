class RecipesSerializer 
  def initialize(recipe_object)
    @recipe = recipe_object
  end

  def to_serialized_json
    @recipe.to_json(:include => {
      :hops => {only: [:id, :name, :form, :alpha_acid]},
      :fermentables => {only: [:id, :name]},
      :yeasts => {only: [:id, :name]},
      :other_ingredients => {only: [:id,:name]}
    }, except: [:created_at, :updated_at])
  end
end