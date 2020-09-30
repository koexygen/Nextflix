class Api::WatchlistsController < ApplicationController
  def create

  end

  def show
    @watchlist = current_user.movies
    render @watchlist
  end

  def update

  end

  def destroy

  end

end
