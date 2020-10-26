class SessionsController < ApplicationController
  def create
      @user = User.find_by(username: session_params[:username])
    
      if @user && @user.authenticate(session_params[:password])
        login!
        render json: {
          logged_in: true,
          user: @user
        }
      else 
        render json: {response: 'Unable to authenticate'}, status: 401
      end
  end
  def is_logged_in?
      if logged_in? && current_user
        render json: {
          logged_in: true,
          user: current_user
        }
       else
        render json: {response: 'No user is logged in'}, status: 401
        
        
      end
  end
  def destroy
        reset_session
        render json: {
          status: 200,
          logged_out: true
        }
  end
  private
  def session_params
        params.require(:user).permit(:username, :password, :email)
  end
  end