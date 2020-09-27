class Movie < ApplicationRecord

  belongs_to :tv_series
  has_many :genres
end
