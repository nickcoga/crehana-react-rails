class CategoriesController < ApplicationController
  def index
    render json: {category: Category.all}
  end
end
