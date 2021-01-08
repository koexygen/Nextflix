class Like < ApplicationRecord
  belongs_to :movie
  belongs_to :user
  belongs_to :watchlist
end
