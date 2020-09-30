class Api::WatchlistsController < ApplicationController
  def create

  end

  def show
    @watchlist = current_user.watchlist.movies
    render json: @watchlist
  end

  def update

  end

  def destroy

  end

end
