Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
  # get "beers", to: "beers#index"

    # Shortcut
    resources :beers
  end
end
