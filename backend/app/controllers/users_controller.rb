class UsersController < ApplicationController
 skip_before_action :authenticate_request

 def create
   user = User.new
   user.first_name = params[:first_name]
   user.last_name = params[:last_name]
   user.email = params[:email]
   user.nickname = params[:nickname]
   user.password = params[:password]
   user.password_confirmation = params[:password_confirmation]
   if user.save
     command = AuthenticateUser.call(params[:email], params[:password])
     render json: { auth_token: command.result }
   else
     render json: { error: user.errors }, status: 403
   end
 end

 def show
   user = User.find_by_nickname(params[:nickname])
   if user
     render json: user
   else
     render json: { error: 'user not found' }, status: 204
   end
 end
end
