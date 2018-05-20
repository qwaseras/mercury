Rails.application.routes.draw do
  resources :blog_pages
  post 'authenticate', to: 'authentication#authenticate'
  post 'users', to: 'users#create'
  get 'users', to: 'users#show'
  resources :blogs
end
