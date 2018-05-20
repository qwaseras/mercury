class BlogPagesController < ApplicationController
  before_action :set_blog_page, only: [:show, :update, :destroy]

  # GET /blog_pages
  def index
    @blog_pages = BlogPage.all

    render json: @blog_pages
  end

  # GET /blog_pages/1
  def show
    render json: @blog_page
  end

  # POST /blog_pages
  def create
    @blog_page = BlogPage.new(blog_page_params)

    if @blog_page.save
      render json: @blog_page, status: :created, location: @blog_page
    else
      render json: @blog_page.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /blog_pages/1
  def update
    if @blog_page.update(blog_page_params)
      render json: @blog_page
    else
      render json: @blog_page.errors, status: :unprocessable_entity
    end
  end

  # DELETE /blog_pages/1
  def destroy
    @blog_page.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_blog_page
      @blog_page = BlogPage.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def blog_page_params
      params.require(:blog_page).permit(:blog_id, :content, :title)
    end
end
