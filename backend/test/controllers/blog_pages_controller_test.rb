require 'test_helper'

class BlogPagesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @blog_page = blog_pages(:one)
  end

  test "should get index" do
    get blog_pages_url, as: :json
    assert_response :success
  end

  test "should create blog_page" do
    assert_difference('BlogPage.count') do
      post blog_pages_url, params: { blog_page: { blog_id: @blog_page.blog_id, content: @blog_page.content, title: @blog_page.title } }, as: :json
    end

    assert_response 201
  end

  test "should show blog_page" do
    get blog_page_url(@blog_page), as: :json
    assert_response :success
  end

  test "should update blog_page" do
    patch blog_page_url(@blog_page), params: { blog_page: { blog_id: @blog_page.blog_id, content: @blog_page.content, title: @blog_page.title } }, as: :json
    assert_response 200
  end

  test "should destroy blog_page" do
    assert_difference('BlogPage.count', -1) do
      delete blog_page_url(@blog_page), as: :json
    end

    assert_response 204
  end
end
