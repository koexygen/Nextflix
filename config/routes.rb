Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  namespace :api, defaults: { format: :json } do
    resource :watchlist, only: %i[create show destroy update]
    resource :session, only: %i[create destroy]
    resources :movies, only: %i[show index]
  end

  root to: 'root#root'

  get '*path' => redirect('/')
end
