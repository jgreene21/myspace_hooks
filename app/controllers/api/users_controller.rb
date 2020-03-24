class Api::UsersController < ApplicationController
  before_action :authenticate_user!
  
  def index
    render json: User.all
  end

  def show
    render json: User.find(user_params[:id])
  end

    private
    
    def user_params
      params.require(:user).permit(:name, :email, :nickname, :image)
    end
end
