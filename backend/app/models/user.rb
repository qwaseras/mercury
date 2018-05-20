class User < ApplicationRecord
 has_secure_password
 validates :first_name, length: 2..50
 validates :last_name, length: 2..50
 validates :nickname, uniqueness: true, length: 5..20
 validates :email, uniqueness: true
 validates_format_of :email, with: /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/
end
