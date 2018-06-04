class BlogsController < ApplicationController

def index
  render json: User.find_by_nickname(params[:nickname]).blogs,
         status: 200
end

 def create
   blog = @current_user.blogs.build(blog_params)
   if blog.save
     render status: 200
   else
     render status: 400
   end
 end

 def show
   render json: Blog.find(params[:id]), status: 200
 end

  private

  def blog_params
    params.require(:blog).permit(:title, :description)
  end
end
