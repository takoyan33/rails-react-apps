Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
    resources :todolists, only: [:index, :create, :destroy]
    end 
  end 
end