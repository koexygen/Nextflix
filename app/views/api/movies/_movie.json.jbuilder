json.array! @watchlist do |movie|
  json.extract! movie, :title, :description, :watchlist_id, :image_url, :video_url
end