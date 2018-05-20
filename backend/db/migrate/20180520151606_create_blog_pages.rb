class CreateBlogPages < ActiveRecord::Migration[5.1]
  def change
    create_table :blog_pages do |t|
      t.integer :blog_id
      t.string :content
      t.string :title

      t.timestamps
    end
  end
end
