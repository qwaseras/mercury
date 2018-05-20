class User < ApplicationRecord
 has_secure_password
 has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" },
 default_url: "/images/:style/avatar.png"
 validates :first_name, length: 2..50
 validates :last_name, length: 2..50
 validates :nickname, uniqueness: true, length: 5..20, format: { without: /\s/ }
 validates :email, uniqueness: true
 validates_format_of :email, with: /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/
end
