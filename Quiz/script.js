const questions =[
    {
        question:'What is the largest animal in the world?',
        answers:[
        {text:'Shark', option:false},
        {text:'Blue whale', option:true},
        {text:'Elephant', option:false},
        {text:'Tiger', option:false}
    ]
    },
    {
        question:'Which is the smallest continent in the  world',
        answers:[
        {text:'Africa', option:false},
        {text:'Artic', option:false},
        {text:'Australia', option:true},
        {text:'Asia', option:false}
    ]
    },
    {
        question:'Which is the smallest country in the world?',
        answers:[
        {text:'Vatican City', option:true},
        {text:'Nepal', option:false},
        {text:'Sri lanka', option:false},
        {text:'Japan', option:false}
    ]
    },
    {
        question:'Which is the largest desert in the world?',
        answers:[
        {text:'Sahara', option:false},
        {text:'Gobi', option:false},
        {text:'Kalahari', option:false},
        {text:'Antarctica', option:true}
    ]
    }
];
const QuestionElement = document.querySelector('.question');
const answerBtn = document.querySelector('.answer-btn');
const nextBtn = document.querySelector('.next-btn');

let questionIndex = 0;
let score = 0;

function startQuiz(){
    questionIndex = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    showQuestion();
}
function showQuestion(){
    reset();
    let currentQuestion = questions[questionIndex];
    let questionNo = questionIndex + 1;
    QuestionElement.innerHTML = questionNo + '.' + currentQuestion.question;

    currentQuestion.answers.forEach(ans => {
        const btn  = document.createElement("button");
        btn.innerHTML = ans.text;
        btn.classList.add('btn')
        answerBtn.appendChild(btn)       
        if(ans.option){
            btn.dataset.option = ans.option;
        } 
        btn.addEventListener('click', selectAns)
    });
}
function reset(){
    nextBtn.style.display = 'none';
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild)
    }
}

function selectAns(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.option === 'true';
    if(isCorrect){
        selectedBtn.classList.add('correct')
        score++
    }
    else{
        selectedBtn.classList.add('incorrect')
        // console.log('Error!!')
    }
    Array.from(answerBtn.children).forEach(btn=>{
        if(btn.dataset.option === 'true'){
            btn.classList.add('correct')
        }
        btn.disabled= true;
    })
    nextBtn.style.display = "block";
}

function showScore(){
    reset();
    QuestionElement.innerHTML= `You scored ${score} out of ${questions.length}!`
    nextBtn.innerHTML = 'Play Again'
    nextBtn.style.display='block';
}

function handleNextQuestion(){
    questionIndex++
    if(questionIndex<questions.length){
        showQuestion()
    }else{
        showScore();
    }
}
nextBtn.addEventListener('click',()=>{
    if(questionIndex < questions.length){
        handleNextQuestion()
    }else{
        questionIndex = 0;
        startQuiz()
    }
})
startQuiz();
