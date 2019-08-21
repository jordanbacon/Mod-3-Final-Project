class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.string :description
      t.string :possible_answer1
      t.string :possible_answer2
      t.string :possible_answer3
      t.string :possible_answer4

      t.string :correct_answer
      t.integer :movie_id

      t.timestamps
    end
  end
end
