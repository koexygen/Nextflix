class TvSeries < ApplicationRecord

  has_many :movies
  has_one_attached :trailer
end
