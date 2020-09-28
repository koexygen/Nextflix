class Api::MoviesController < ApplicationController
  def index
    @movies = Movie.all
    render :index
  end

  # def show
  #   @result = Movie.where('title LIKE ?', "%#{search_params[:title]}%")
  #   render :show
  # end
  #
  def show
    @movie = Movie.find(params[:id])
    render :show
  end

  def search_params
    params.require(:movie).permit(:title)
  end
end
