class Movie < ApplicationRecord

  after_initialize :fix_video_urls


  belongs_to :tv_series, optional: true
  has_many :genres

  has_one_attached :movie_image
  has_one_attached :trailer
  has_many :watchlists
  has_many :likes

  def fix_video_urls
      self.video_url = self.trailer.service_url if self.trailer.attached?
  end

  def watchListed

  end
end
