class PricesController < ApplicationController
  def index
    render json: {price: Price.all}
  end
end
