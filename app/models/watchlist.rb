class Watchlist < ApplicationRecord
  validates :user_id, presence: true

  belongs_to :user, dependent: :destroy
  has_many :likes
  has_many :movies, through: :likes
end
