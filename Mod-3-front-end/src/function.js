let lotrquestionArr = []
let lotrchoicesArr = []
let lotrcorrectAnswer = []
let lotrQuestions 

let counter = 5;
let currentQuestion = 0;
let score = 0;
let lost = 0;
let timer;





fetch("http://localhost:3000/api/v1/movies/1")
    .then(res => res.json())
    .then(lotr => {
        lotr.questions.forEach(question => {
            lotrquestionArr.push(question.description)
            lotrchoicesArr.push(question.possible_answer1, question.possible_answer2, question.possible_answer3, question.possible_answer4)
            lotrcorrectAnswer.push(question.correct_answer)
            
        })

    lotrQuestions = [
        {
            question: lotrquestionArr.slice(0,1),
            choices: lotrchoicesArr.slice(0,4),
            answer: lotrcorrectAnswer.slice(0,1)
        },
        {
            question: lotrquestionArr.slice(1,2),
            choices: lotrchoicesArr.slice(4,8),
            answer: lotrcorrectAnswer.slice(1,2)
        },
        {
            question: lotrquestionArr.slice(2,3),
            choices: lotrchoicesArr.slice(8,12),
            answer: lotrcorrectAnswer.slice(2,3)
        },
        {
            question: lotrquestionArr.slice(3,4),
            choices: lotrchoicesArr.slice(12,16),
            answer: lotrcorrectAnswer.slice(3,4)
        },
        {
            question: lotrquestionArr.slice(4,5),
            choices: lotrchoicesArr.slice(16,20),
            answer: lotrcorrectAnswer.slice(4,5)
        },

       

    ]

    

    function nextQuestion(){

        const questionDone = (lotrQuestions.length - 1) === currentQuestion

        if (questionDone){
            console.log("Over")
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

        counter = 20;
        timer = setInterval(countDown, 1000)
        let question = lotrQuestions[currentQuestion].question;
        let choices = lotrQuestions[currentQuestion].choices;
        // debugger
        $('#time').html('Timer: ' + counter);
        $('#game').html(`<h4>${question}</h4>
            ${loadChoices(choices)}
            ${questionsLeft()}
        
        `)
    }

    function loadChoices(choices){
        // debugger
        let result = '';


        for (let i = 0; i < choices.length; i++){
            result +=`<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;
        }
        return result


    }
    $(document).on("click", '.choice', function(){
        clearInterval(timer)
        const chosenAnswer = $(this).attr('data-answer')
        const rightAnswer = lotrQuestions[currentQuestion].answer

        if (rightAnswer == chosenAnswer){
            score++;
            console.log("wins")
            nextQuestion()

        }else{
            lost++;
            console.log("lost")
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
        counter = 5;
        currentQuestion = 0;
        score = 0;
        lost = 0;
        timer = null;

        loadQuestion()
    })

    function questionsLeft(){
        const questionLeft = lotrQuestions.length - (currentQuestion + 1)
        const totalQuestions = lotrQuestions.length

        return `Questions Left: ${questionLeft}/${totalQuestions}`
    }


    // loadQuestion()

    $('#start').click(function(){
        $('#start').remove()
        $('#time').html(counter)
        loadQuestion()
    })


})

