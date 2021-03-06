# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Movie.destroy_all
Question.destroy_all

u1 = User.create(name: "Alpha")
u2 = User.create(name: "Beta")

m1 = Movie.create(title: "Lord of the Rings")
m2 = Movie.create(title: "Harry Potter")
m3 = Movie.create(title: "Jurassic Park")

Question.create(description: "lorem ipsum dolor sit amet", possible_answer: "a. lorem, b. ipsum, c. dolor, d. sit amet", correct_answer: "a. lorem", movie_id: m1.id)
Question.create(description: "ipsum dolor sit amet", possible_answer: "a. lorem, b. ipsum, c. dolor, d. sit amet", correct_answer: "b. ipsum", movie_id: m2.id)
Question.create(description: "dolor sit amet", possible_answer: "a. lorem, b. ipsum, c. dolor, d. sit amet", correct_answer: "d. dolor", movie_id: m3.id)