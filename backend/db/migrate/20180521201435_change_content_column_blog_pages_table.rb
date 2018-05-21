class ChangeContentColumnBlogPagesTable < ActiveRecord::Migration[5.1]
  def up
    change_column :blog_pages, :content, :text
  end

  def down
    change_column :blog_pages, :content, :string
  end
end
