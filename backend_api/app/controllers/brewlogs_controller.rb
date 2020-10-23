class BrewlogsController < ApplicationController
  def index

  end

  def create
    brewlog = BrewLog.create(brewlog_params)
    
    if brewlog
      render json: {
        status: :created,
        brewlog: brewlog
      }
    end
  end

  private

  def brewlog_params
    params.require(:brew_log).permit(:recipe_id, :user_id, :original_gravity, :strike_temp, :strike_volume, :mash_pH)
  end
end
