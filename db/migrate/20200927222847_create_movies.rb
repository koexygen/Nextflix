class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.text :description
      t.integer :tv_series_id
      t.integer :watchlist_id
      t.integer :director_id
      t.string :release_date
      t.string :image_url
      t.string :video_url

      t.timestamps
    end

    add_index :movies, [:title,:tv_series_id]
    add_index :movies, [:watchlist_id, :director_id]
  end
end
