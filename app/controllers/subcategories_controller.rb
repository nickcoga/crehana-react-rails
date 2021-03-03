class SubcategoriesController < ApplicationController
  def index
    render json: {subcategory: Subcategory.all}
  end
end
