class RecipesController < ApplicationController
  def index
    recipes = Recipe.all
    render json: RecipesSerializer.new(recipes).to_serialized_json
  end

  def create
    recipe = Recipe.create!(recipe_params)
    if recipe
      render json: {
       status: :created,
       recipe: RecipesSerializer.new(recipe).to_serialized_json
      }
    end
  end

  private
  def recipe_params
    params.require(:recipe).permit(:user_id, :name, :method, :boil_time, :batch_size, :pre_boil_size, :pre_boil_gravity, :target_fg, :target_og, :ibu, :srm, :mash_ph, :mash_schedule, :style, hops_attributes: [:name, :form, :alpha_acid], fermentables_attributes: [:name], yeasts_attributes: [:name], other_ingredients_attributes: [:name])
  end
 


end
