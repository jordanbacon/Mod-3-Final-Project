
// let lotrquestionArr = []
// let lotrchoicesArr = []
// let lotrcorrectAnswer = []
// let lotrQuestions 

// let counter = 30;
// let currentQuestion = 0;
// let score = 0;
// let lost = 0;
// let timer;

// // let lotrquestionArr = []
// // let lotrchoicesArr = []
// // let lotrcorrectAnswer = []
// // let lotrQuestions 



// fetch("http://localhost:3000/api/v1/movies/31")
//     .then(res => res.json())
//     .then(lotr => {
//         lotr.questions.forEach(question => {
//             lotrquestionArr.push(question.description)
//             lotrchoicesArr.push(question.possible_answer1, question.possible_answer2, question.possible_answer3, question.possible_answer4)
//             lotrcorrectAnswer.push(question.correct_answer)
            
//         })

//     lotrQuestions = [
//         {
//             question: lotrquestionArr.slice(0,1),
//             choices: lotrchoicesArr.slice(0,4),
//             answer: lotrcorrectAnswer.slice(0,1)
//         },
//         {
//             question: lotrquestionArr.slice(1,2),
//             choices: lotrchoicesArr.slice(4,8),
//             answer: lotrcorrectAnswer.slice(1,2)
//         },
//         {
//             question: lotrquestionArr.slice(2,3),
//             choices: lotrchoicesArr.slice(8,12),
//             answer: lotrcorrectAnswer.slice(2,3)
//         },
//         {
//             question: lotrquestionArr.slice(3,4),
//             choices: lotrchoicesArr.slice(12,16),
//             answer: lotrcorrectAnswer.slice(3,4)
//         },
//         {
//             question: lotrquestionArr.slice(4,5),
//             choices: lotrchoicesArr.slice(16,20),
//             answer: lotrcorrectAnswer.slice(4,5)
//         },

//     ]

// })


// function loadQuestion(){
//     const question = lotrQuestions[currentQuestion].question;
//     const choices = lotrQuestions[currentQuestion].choices;

// }

// loadQuestion()