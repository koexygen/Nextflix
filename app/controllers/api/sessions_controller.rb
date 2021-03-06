# frozen_string_literal: true

class Api::SessionsController < ApplicationController
  def create

    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: ['Invalid Username or Password!'], status: 404
    end
  end

  def destroy
    if current_user
      logout!
    else
      render json: ['You are not logged in'], status: 404
    end
  end

end
