Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :users, only: [:create, :show, :index]

  post '/login',    to: 'sessions#create'
  get '/logged_in', to: 'sessions#is_logged_in?'
  post '/logout',   to: 'sessions#destroy'
end
