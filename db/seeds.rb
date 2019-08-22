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
m4 = Movie.create(title: "Star Wars")
m5 = Movie.create(title: "Pirates of the Carribean")
m6 = Movie.create(title: "Avengers")

Question.create(description: "Who did Bilbo take the Ring from in the Hobbit? ", possible_answer1: "a. Turin Turambar", possible_answer2: "b. Feanor", possible_answer3: "c. Gollum", possible_answer4: "d. Sarumon", correct_answer: "c. Gollum", movie_id: m1.id)
Question.create(description: "By what title did Aragorn go by early in Fellowship of the Ring?", possible_answer1: "a. Strider", possible_answer2: "b. Ellesar", possible_answer3: "c. Eru Illuvatar ", possible_answer4: "d. Mithrandir", correct_answer: "a. Strider", movie_id: m1.id)
Question.create(description: "What is the name of the tower where Saruman lives?", possible_answer1: "a. Helm's Deep", possible_answer2: "b. Orthanc", possible_answer3: "c. Cirith Ungol", possible_answer4: "d. Barad-dûr", correct_answer: "b. Orthanc", movie_id: m1.id)
Question.create(description: "Where did the climactic battle in The Two Towers take place at?", possible_answer1: "a. Rohan", possible_answer2: "b. Helm's Deep", possible_answer3: "c. Isengard", possible_answer4: "d. Minas Tirith", correct_answer: "b. Helm's Deep", movie_id: m1.id)
Question.create(description: "Where does Elrond live?", possible_answer1: "a. Lothlorien", possible_answer2: "b. Misty Mountains", possible_answer3: "c. The Shire", possible_answer4: "d. Rivendell", correct_answer: "d. Rivendell", movie_id: m1.id)



Question.create(description: "What is Voldemort’s real name", possible_answer1: "a. Seamus Finnigan", possible_answer2: "b. Tom Riddle", possible_answer3: "c. Gellert Grindelwald", possible_answer4: "d. Igor Karkaroff", correct_answer: "b. Tom Riddle", movie_id: m2.id)
Question.create(description: "What is the name of Albert Dumbledore’s phoenix? ", possible_answer1: "a. Buckbeak", possible_answer2: "b. Norbert", possible_answer3: "c. Fawkes", possible_answer4: "d. Fluffy", correct_answer: "c. Fawkes", movie_id: m2.id)
Question.create(description: "Where was Harry Potter born?", possible_answer1: "a. Godric’s Hollow", possible_answer2: "b. Hogsmeade", possible_answer3: "c. King’s Cross", possible_answer4: "d. Grimmauld Place", correct_answer: "a. Godric’s Hollow", movie_id: m2.id)
Question.create(description: "Who is the Transfiguration professor at Hogwarts?", possible_answer1: "a. Rubeus Hagrid", possible_answer2: "b. Filius Flitwick", possible_answer3: "c. Minerva Mcgonagall", possible_answer4: "d. Severus Snape", correct_answer: "c. Minerva Mcgonagall", movie_id: m2.id)
Question.create(description: "What is Dobby?", possible_answer1: "a. House Elf", possible_answer2: "b. Goblin", possible_answer3: "c. Troll", possible_answer4: "d. Werewolf", correct_answer: "a. House Elf", movie_id: m2.id)


Question.create(description: "On which Island did Jurassic Park 1 take place?", possible_answer1: "a. Isla Matanceros", possible_answer2: "b. Isla Nublar", possible_answer3: "c. Isla Sorma", possible_answer4: "d. Isla Tacono", correct_answer: "b. Isla Nublar", movie_id: m3.id)
Question.create(description: "What is the name of Jeff Goldblum’s character? ", possible_answer1: "a. Dr. Allan Grant", possible_answer2: "b. John Hammond", possible_answer3: "c. Dr. Ian Malcolm", possible_answer4: "d. John Arnold", correct_answer: "c. Dr. Ian Malcolm", movie_id: m3.id)
Question.create(description: "Who or what did Dr. Alan Grant hate for much of the movie?", possible_answer1: "a. John Hammond", possible_answer2: "b. Velociraptors", possible_answer3: "c. Children", possible_answer4: "d. Nedry ", correct_answer: "c. Children", movie_id: m3.id)
Question.create(description: "Who is the parks founder?", possible_answer1: "a. John Hammond", possible_answer2: "b. Nedry", possible_answer3: "c. John Arnold", possible_answer4: "d. Dr. Allan Grant", correct_answer: "a. John Hammond", movie_id: m3.id)
Question.create(description: "Who directed Jurassic Park?", possible_answer1: "a. Martin Scorsese", possible_answer2: "b. Steven Spielberg", possible_answer3: "c. Ron Howard", possible_answer4: "d. Clint Eastwood", correct_answer: "b. Steven Spielberg", movie_id: m3.id)






Question.create(description: "What is the name of Luke’s father? ", possible_answer1: "a. Sheev Palpatine", possible_answer2: "b. Anakin Skywalker", possible_answer3: "c. Mace Windu", possible_answer4: "d. Count Dooku", correct_answer: "b. Anakin Skywalker", movie_id: m4.id)
Question.create(description: "The name of Han Solo’s ship?", possible_answer1: "a. Millennium Falcon", possible_answer2: "b. Rough Rider", possible_answer3: "c. Widowmaker", possible_answer4: "d. The Gundark’s Ear", correct_answer: "a. Millennium Falcon", movie_id: m4.id)
Question.create(description: "What planet was blown up by the Death Star in a New Hope?", possible_answer1: "a. Tatooine", possible_answer2: "b. Jakku", possible_answer3: "c. Alderaan", possible_answer4: "d. Dagobah", correct_answer: "c. Alderaan", movie_id: m4.id)
Question.create(description: "What weapon do the Jedi use?", possible_answer1: "a. Laser Rifle", possible_answer2: "b. Wands", possible_answer3: "c. Lightsaber", possible_answer4: "d. Death Star", correct_answer: "c. Lightsaber", movie_id: m4.id)
Question.create(description: "Who Is Luke and Leia’s mother?", possible_answer1: "a. Mon Mothma", possible_answer2: "b. Jyn Erso", possible_answer3: "c. Padme Amidala", possible_answer4: "d. Shaak Ti", correct_answer: "c. Padme Amidala", movie_id: m4.id)





Question.create(description: "What was the name of Jack Sparrow’s ship prior to the events of the first movie? ", possible_answer1: "a. The Black Pearl", possible_answer2: "b. HMS Interceptor", possible_answer3: "c. Dying Gull", possible_answer4: "d. Hai Peng", correct_answer: "a. The Black Pearl", movie_id: m5.id)
Question.create(description: "What was the name of Will Turner’s (Orlando Bloom) love interest in the movie?", possible_answer1: "a. Elizabeth", possible_answer2: "b. Giselle", possible_answer3: "c. Anamaria", possible_answer4: "d. Scarlett", correct_answer: "a. Elizabeth", movie_id: m5.id)
Question.create(description: "Who took control of the Black Pearl in the first movie?", possible_answer1: "a. Joshamee Gibbs", possible_answer2: "b. Sao Feng", possible_answer3: "c. Hector Barbosa", possible_answer4: "d. Blackbeard", correct_answer: " c. Hector Barbosa", movie_id: m5.id)
Question.create(description: "Who took control of the Black Pearl in the first movie?", possible_answer1: "a. Joshamee Gibbs", possible_answer2: "b. Sao Feng", possible_answer3: "c. Hector Barbosa", possible_answer4: "d. Blackbeard", correct_answer: " c. Hector Barbosa", movie_id: m5.id)
Question.create(description: "Who took control of the Black Pearl in the first movie?", possible_answer1: "a. Joshamee Gibbs", possible_answer2: "b. Sao Feng", possible_answer3: "c. Hector Barbosa", possible_answer4: "d. Blackbeard", correct_answer: " c. Hector Barbosa", movie_id: m5.id)

# Question.create(description: "", possible_answer1: "a. ", possible_answer2: "b. ", possible_answer3: "c. ", possible_answer4: "d. ", correct_answer: " ", movie_id: m5.id)
# Question.create(description: "", possible_answer1: "a. ", possible_answer2: "b. ", possible_answer3: "c. ", possible_answer4: "d. ", correct_answer: " ", movie_id: m5.id)

Question.create(description: "Which of the following is not one of the Infinity Stones?", possible_answer1: "a. Mind Stone", possible_answer2: "b. Space Stone", possible_answer3: "c. Gravity Stone", possible_answer4: "d. Power Stone", correct_answer: "c. Gravity Stone", movie_id: m6.id)
Question.create(description: "What city did Black Panther mainly take place in?", possible_answer1: "a. Kathmandu", possible_answer2: "b. Sokovia", possible_answer3: "c. Wakanda", possible_answer4: "d. Johannesburg", correct_answer: "c. Wakanda", movie_id: m6.id)
Question.create(description: "What planet was Thanos born in?", possible_answer1: "a. Xandar", possible_answer2: "b. Titan", possible_answer3: "c. Vormir", possible_answer4: "d. Centauri Prime", correct_answer: "b. Titan", movie_id: m6.id)
Question.create(description: "What planet was Thanos born in?", possible_answer1: "a. Xandar", possible_answer2: "b. Titan", possible_answer3: "c. Vormir", possible_answer4: "d. Centauri Prime", correct_answer: "b. Titan", movie_id: m6.id)
Question.create(description: "What planet was Thanos born in?", possible_answer1: "a. Xandar", possible_answer2: "b. Titan", possible_answer3: "c. Vormir", possible_answer4: "d. Centauri Prime", correct_answer: "b. Titan", movie_id: m6.id)

# Question.create(description: "", possible_answer1: "a. ", possible_answer2: "b. ", possible_answer3: "c. ", possible_answer4: "d. ", correct_answer: " ", movie_id: m6.id)
# Question.create(description: "", possible_answer1: "a. ", possible_answer2: "b. ", possible_answer3: "c. ", possible_answer4: "d. ", correct_answer: " ", movie_id: m6.id)
