Rails.application.routes.draw do
  post 'authenticate', to: 'authentication#authenticate'
  resources :users, only: %i[create show]
end
