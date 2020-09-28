class Movie < ApplicationRecord

  belongs_to :tv_series, optional: true
  has_many :genres
end
