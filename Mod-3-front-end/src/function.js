// function lotrData(){
//     fetch("http://localhost:3000/api/v1/movies/31")
//     .then(res => res.json())
//     .then(lotr => {
//         lotr.forEach(question => {
//             lotrInfo(question)
//             ques1 = description
//         })
//     })
// }
let questionArr = []
let choicesArr = []
let correctAnswer = []


fetch("http://localhost:3000/api/v1/movies/31")
    .then(res => res.json())
    .then(lotr => {
        lotr.questions.forEach(question => {
            questionArr.push(question.description)
            choicesArr.push(question.possible_answer1, question.possible_answer2, question.possible_answer3, question.possible_answer4)
            correctAnswer.push(question.correct_answer)
        })
})

let question1 = questionArr.slice(0,1)
let choices1 = choicesArr.slice(0,4)
let answer1 = correctAnswer.slice(0,1)

const lotrQuestions = [
    {
        question: question1[0],
        choices: choices1,
        answer: answer1
    }
]

