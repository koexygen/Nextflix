class Genre < ApplicationRecord
  has_many :movies
  has_many :tv_series
end
