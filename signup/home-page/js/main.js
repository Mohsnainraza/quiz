const questions = [
    
    {question:"What is the correct JavaScript syntax to write a comment?",  options: ["*This is a comment","// This is a comment"," /* This is a comment */","# This is a comment"],correctanswerindex:2},
    {question:`What is the result of the following JavaScript code: console.log(2 + "2")`,options: ["4", "22","4","Error"],correctanswerindex:1},
    {question:"What is the purpose of the getElementById() method in JavaScript?", options: [" To select an element by its class name", " To select an element by its tag name", "To select an element by its ID", "To select all elements with a specific attribute"],correctanswerindex:2},
    {question:"What is the JavaScript keyword used to declare a variable?",  options: ["var", "let","const","all of the above"],correctanswerindex:3},
    {question:"What is the result of the following JavaScript code?console.log(typeof(null));", options: ["object","null","undefined","string"],correctanswerindex:0},
    {question:"What is the purpose of the addEventListener() method in JavaScript?", options: ["To add a new event to the page","To remove an event from the page","To attach an event handler to an element","To trigger an event on an element"],correctanswerindex:2},
    
  ]    
  
  let currentindex = 0;
  let score = 0;
  let timer = 10;

function displayQuestion() {
    const questione = document.getElementById('question');
    const optionse = document.getElementById('options');
    const nextButton = document.getElementById('next-button');

    optionse.innerHTML = '';

    let currentquestion = questions[currentindex];
    questione.textContent = currentquestion.question;

    currentquestion.options.forEach((option, index) => {
        const li = document.createElement('li');

        const radioButton = document.createElement('input');
        radioButton.type = 'radio';
        radioButton.name = 'option';
        radioButton.id = `option-${index}`;
        radioButton.value = index;

        const label = document.createElement('label');
        label.htmlFor = `option-${index}`;
        label.textContent = option;

        li.appendChild(radioButton);
        li.appendChild(label);
        optionse.appendChild(li);
    });
    timer = 10;
    nextButton.style.display = 'inline-block';
}



function checkAnswer() {
    const selectedoption = document.querySelector('input[name="option"]:checked');
    
    if (selectedoption) {
        const currentquestion = questions[currentindex];
        const selectedindex = parseInt(selectedoption.value);

        if (selectedindex === currentquestion.correctanswerindex) {
            score++;
        }
    }
}

function nextQuestion() {
    checkAnswer();  

    currentindex++;

    if (currentindex < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const nextButton = document.getElementById('next-button');

    const currentuser = JSON.parse(localStorage.getItem('currentuser'));
   
    if (currentuser) {
    questionElement.textContent = `Quiz Complete! ${currentuser.username} you're scored ${score} out of ${questions.length}.persentage ${ score = (score / questions.length) * 100, score.toFixed(2)}%`;
    optionsElement.innerHTML = '';  
    nextButton.style.display = 'none';  
}
}
function startCountdown() {
    setInterval(() => {
    const countdownElement = document.getElementById('timer');
    timer--;
    countdownElement.textContent =timer;

    if (timer <= 0) {
      currentindex = (currentindex + 1) % questions.length; 
        displayQuestion();
    }
 }, 1000);
}

  displayQuestion();
  startCountdown();