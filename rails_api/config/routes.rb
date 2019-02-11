Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      get 'outfits/:id/clothes', to: 'outfits#clothes'
      resources :clothings
      resources :outfits
      resources :clothing_outfits
      resources :users, only: [:index, :create, :show]
    end
  end
end
