class LevelsController < ApplicationController
  def index
    render json: {level: Level.all}
  end
end
