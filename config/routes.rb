Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  namespace :api, defaults: { format: :json } do
    resources :users, only: %i[create show]
    resource :sessions, only: %i[create destroy]
  end

  root to: 'root#root'

  get '*path' => redirect('/')
end
