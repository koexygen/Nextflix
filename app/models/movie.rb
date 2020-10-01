class Movie < ApplicationRecord

  belongs_to :tv_series, optional: true
  has_many :genres

  has_one_attached :movie_image
  has_many :watchlists
  has_many :likes
end
