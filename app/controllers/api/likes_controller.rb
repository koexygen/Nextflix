class Api::LikesController < ApplicationController
  def create
    @like = Like.create(like_params)
    if @like.save
      render json: { status: 'saved' }
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  private

  def like_params
    params.require(:like).permit(:watchlist_id, :user_id, :movie_id)
  end
  
end
