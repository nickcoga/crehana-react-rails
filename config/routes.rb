Rails.application.routes.draw do
  get 'courses/index'
  get 'prices/index'
  get 'levels/index'
  get 'subcategories/index'
  get 'categories/index'
  get 'home/index'
  get 'home/timestamp'

  root 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
