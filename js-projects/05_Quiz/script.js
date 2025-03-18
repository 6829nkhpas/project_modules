document.addEventListener("DOMContentLoaded", () => {

  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");

  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
      marks: 4,
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
      marks: 3,
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
      marks: 2,
    },
  ];
  let currentQuestionIndex = 0;
  let score = 0;
  let scucess=0;
  startBtn.addEventListener("click", startQuiz);
   function startQuiz() {
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
}
  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    scucess=0;
    resultContainer.classList.add("hidden");
    startQuiz();
  });
  
  nextBtn.addEventListener("click", () =>{
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        Result();
    }
  });

function showQuestion() {
    nextBtn.classList.add("hidden");
    questionText.textContent =questions[currentQuestionIndex].question;
    choicesList.innerHTML='';
    questions[currentQuestionIndex].choices.forEach((choice) => {
        const li = document.createElement("li");
        li.textContent= choice;
        li.addEventListener("click",() => selectAnwser(choice));
        choicesList.appendChild(li);

    });
    



}
function selectAnwser(choice){
    if(choice === questions[currentQuestionIndex].answer){
        score+= questions[currentQuestionIndex].marks;
        scucess++;

    }
    nextBtn.classList.remove("hidden");

}
function Result(){

    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreDisplay.textContent=`marks = ${score}  got   ${scucess} / ${questions.length} `;
}


});
