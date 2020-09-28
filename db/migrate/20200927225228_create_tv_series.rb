class CreateTvSeries < ActiveRecord::Migration[5.2]
  def change
    create_table :tv_series do |t|
      t.string :title, null: false
      t.text :description
      t.integer :seasons
      t.integer :watchlist_id
      t.integer :director_id
      t.string :release_date
      t.string :image_url
      t.timestamps
    end

    add_index :tv_series, :title
    add_index :tv_series, [:director_id, :watchlist_id], unique: true
  end
end
