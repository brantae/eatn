Rails.application.routes.draw do

  resources :users 
  resources :posts do 
    resources :flairs
    resources :comments
  end 
  resources :flairs
  resources :comments

  post '/sign_up', to: 'users#create'
  get '/me', to: 'users#show'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
