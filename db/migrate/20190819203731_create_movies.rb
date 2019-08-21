class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :username
      t.integer :score

      t.timestamps
    end
  end
end