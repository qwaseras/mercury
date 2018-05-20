class BlogsController < ApplicationController

def index
  render json: @current_user.blogs, status: 200
end

 def create

 end

 def show
 end

  private

  def user_params
    params.require(:user)
          .permit(:first_name, :last_name, :email, :nickname,
                  :password, :password_confirmation)
  end
end
