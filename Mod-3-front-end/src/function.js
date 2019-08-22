let quistionArr = []
let choicesArr = []
let correctAnswer = []
let triviaQuestions 

let counter = 15;
let currentQuestion = 0;
let score = 0;
let lost = 0;
let timer;





fetch("http://localhost:3000/api/v1/movies/31")
    .then(res => res.json())
    .then(lotr => {
        lotr.questions.forEach(question => {
            quistionArr.push(question.description)
            choicesArr.push(question.possible_answer1, question.possible_answer2, question.possible_answer3, question.possible_answer4)
            correctAnswer.push(question.correct_answer)
            
        })

    triviaQuestions = [
        {
            question: quistionArr.slice(0,1),
            choices: choicesArr.slice(0,4),
            answer: correctAnswer.slice(0,1)
        },
        {
            question: quistionArr.slice(1,2),
            choices: choicesArr.slice(4,8),
            answer: correctAnswer.slice(1,2)
        },
        {
            question: quistionArr.slice(2,3),
            choices: choicesArr.slice(8,12),
            answer: correctAnswer.slice(2,3)
        },
        {
            question: quistionArr.slice(3,4),
            choices: choicesArr.slice(12,16),
            answer: correctAnswer.slice(3,4)
        },
        {
            question: quistionArr.slice(4,5),
            choices: choicesArr.slice(16,20),
            answer: correctAnswer.slice(4,5)
        },

       

    ]

    

    function nextQuestion(){

        const questionDone = (triviaQuestions.length - 1) === currentQuestion

        if (questionDone){
            showScore()
        }else {
            currentQuestion++
            loadQuestion()

        }

    }

    function timesUp(){
        clearInterval(timer)
        lost++

        nextQuestion()

    }
    
    function countDown(){
        counter--;

        $('#time').html('Timer: ' + counter);

        if (counter === 0){
            timesUp();

        }
    }

    function loadQuestion(){

        counter = 15;
        timer = setInterval(countDown, 1000)
        let question = triviaQuestions[currentQuestion].question;
        let choices = triviaQuestions[currentQuestion].choices;
        $('#time').html('Timer: ' + counter);
        $('#game').html(`<h4>${question}</h4>
            ${loadChoices(choices)}
            ${questionsLeft()}
        
        `)
    }

    function loadChoices(choices){
        let result = '';


        for (let i = 0; i < choices.length; i++){
            result +=`<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;
        }
        return result


    }
    $(document).on("click", '.choice', function(){
        clearInterval(timer)
        const chosenAnswer = $(this).attr('data-answer')
        const rightAnswer = triviaQuestions[currentQuestion].answer

        if (rightAnswer == chosenAnswer){
            score++;
            nextQuestion()

        }else{
            lost++;
            nextQuestion()
        }
    })

    function showScore(){
        const results = `
            <p> You have a score of: ${score} </p>
            <button class= "btn btn-primary" id="reset"> Try again </button>
        `

        $('#game').html(results)
    }

    $(document).on('click', '#reset', function(){
        counter = 15;
        currentQuestion = 0;
        score = 0;
        lost = 0;
        timer = null;

        loadQuestion()
    })

    function questionsLeft(){
        const questionLeft = triviaQuestions.length - (currentQuestion + 1)
        const totalQuestions = triviaQuestions.length

        return `Questions Left: ${questionLeft}/${totalQuestions}`
    }

    $('#start').click(function(){
        $('#start').remove()
        $('#time').html(counter)
        loadQuestion()
    })


})

// fetch("http://localhost:3000/api/v1/movies/31")
//     .then(res => res.json())
//     .then(lotr => {
//         lotr.questions.forEach(question => {
//             quistionArr.push(question.description)
//             choicesArr.push(question.possible_answer1, question.possible_answer2, question.possible_answer3, question.possible_answer4)
//             correctAnswer.push(question.correct_answer)
            
//         })

//     triviaQuestions = [
//         {
//             question: quistionArr.slice(0,1),
//             choices: choicesArr.slice(0,4),
//             answer: correctAnswer.slice(0,1)
//         },
//         {
//             question: quistionArr.slice(1,2),
//             choices: choicesArr.slice(4,8),
//             answer: correctAnswer.slice(1,2)
//         },
//         {
//             question: quistionArr.slice(2,3),
//             choices: choicesArr.slice(8,12),
//             answer: correctAnswer.slice(2,3)
//         },
//         {
//             question: quistionArr.slice(3,4),
//             choices: choicesArr.slice(12,16),
//             answer: correctAnswer.slice(3,4)
//         },
//         {
//             question: quistionArr.slice(4,5),
//             choices: choicesArr.slice(16,20),
//             answer: correctAnswer.slice(4,5)
//         },

       

//     ]

    

//     function nextQuestion(){

//         const questionDone = (triviaQuestions.length - 1) === currentQuestion

//         if (questionDone){
//             console.log("Over")
//             showScore()
//         }else {
//             currentQuestion++
//             loadQuestion()

//         }

//     }

//     function timesUp(){
//         clearInterval(timer)
//         lost++

//         nextQuestion()

//     }
    
//     function countDown(){
//         counter--;

//         $('#time').html('Timer: ' + counter);

//         if (counter === 0){
//             timesUp();

//         }
//     }

//     function loadQuestion(){

//         counter = 15;
//         timer = setInterval(countDown, 1000)
//         let question = triviaQuestions[currentQuestion].question;
//         let choices = triviaQuestions[currentQuestion].choices;
//         // debugger
//         $('#time').html('Timer: ' + counter);
//         $('#game').html(`<h4>${question}</h4>
//             ${loadChoices(choices)}
//             ${questionsLeft()}
        
//         `)
//     }

//     function loadChoices(choices){
//         // debugger
//         let result = '';


//         for (let i = 0; i < choices.length; i++){
//             result +=`<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;
//         }
//         return result


//     }
//     $(document).on("click", '.choice', function(){
//         clearInterval(timer)
//         const chosenAnswer = $(this).attr('data-answer')
//         const rightAnswer = triviaQuestions[currentQuestion].answer

//         if (rightAnswer == chosenAnswer){
//             score++;
//             console.log("wins")
//             nextQuestion()

//         }else{
//             lost++;
//             console.log("lost")
//             nextQuestion()
//         }
//     })

//     function showScore(){
//         const results = `
//             <p> You have a score of: ${score} </p>
//             <button class= "btn btn-primary" id="reset"> Try again </button>
//         `

//         $('#game').html(results)
//     }

//     $(document).on('click', '#reset', function(){
//         counter = 15;
//         currentQuestion = 0;
//         score = 0;
//         lost = 0;
//         timer = null;

//         loadQuestion()
//     })

//     function questionsLeft(){
//         const questionLeft = triviaQuestions.length - (currentQuestion + 1)
//         const totalQuestions = triviaQuestions.length

//         return `Questions Left: ${questionLeft}/${totalQuestions}`
//     }


//     // loadQuestion()

//     $('#start').click(function(){
//         $('#start').remove()
//         $('#time').html(counter)
//         loadQuestion()
//     })


// })



