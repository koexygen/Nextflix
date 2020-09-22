# frozen_string_literal: true

class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    # debugger
    if @user
      login!(@user)
      render json: @user
    else
      render json: ['Invalid Username or Password'], status: 404
    end
  end

  def destroy
    if current_user
      # debugger
      logout!
    else
      render json: ['u are not logged in'], status: 404
    end
  end

end
