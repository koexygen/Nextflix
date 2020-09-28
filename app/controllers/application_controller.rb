# frozen_string_literal: true

class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?
  # skip_before_action :verify_authenticity_token

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def ensure_logged_in!
    render json: ['You should be logged in'] unless logged_in?
  end

  def login!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logged_in?
    !!current_user
  end

  def logout!
    @current_user = nil
    session[:session_token] = nil
    render json: ['You have been logged out']
  end
end
