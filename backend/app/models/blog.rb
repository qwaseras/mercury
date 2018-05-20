class Blog < ApplicationRecord
  belongs_to :owner, foreign_key: "user_id", class_name: "User"
  has_many :pages, foreign_key: "blog_id", class_name: "BlogPage"
end
