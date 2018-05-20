class BlogsController < ApplicationController

def index
  render json: @current_user.blogs, status: 200
end

 def create
   blog = @current_user.blog.buld(blog_params)
   blog.save
 end

 def show
   render json: Blog.find(params[:id]), status: 200
 end

  private

  def blog_params
    params.require(:blog)
          .permit(:id, :title, :description)
  end
end
