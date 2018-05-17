class UsersController < ApplicationController
 skip_before_action :authenticate_request

 def create
   user = User.new
   user.email = params[:email]
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

 end
end
