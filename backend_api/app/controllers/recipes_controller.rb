class RecipesController < ApplicationController
  def index
    recipes = Recipe.all
    render json: {recipes: recipes}
  end

  def create
    recipe = Recipe.create!(recipe_params)
    if recipe
      pry

      
      render json: {
       status: :created,
       recipe: recipe
      }
    end
  end
  private
  def recipe_params
    params.require(:recipe).permit(:user_id, :name, :method, :boil_time, :batch_size, :pre_boil_size, :pre_boil_gravity, :target_fg, :target_og, :ibu, :srm, :mash_ph, :mash_schedule, :style)
  end
end
