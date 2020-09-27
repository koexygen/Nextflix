class User < ApplicationRecord
  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password
  after_initialize :ensure_session_token, :check_avatar

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    save
    session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    return @user if !@user.nil? && @user.password?(password)
  end

  has_one_attached :avatar

  def check_avatar
    self.image_url = self.avatar.service_url if self.avatar.attached?
  end
end
