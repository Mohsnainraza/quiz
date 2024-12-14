const questions = [
    
    {question:" What does HTML stand for?",  options: [" Hyper Text Markup Language"," High Text Markup Language"," Hyper Tool Markup Language"," None of the above"],correctanswerindex:0},
    {question:"  Which HTML element is used to define the title of a web page?",options: ["<meta>", "<header>","<head>","<title>"],correctanswerindex:3},
    {question:"Which HTML element is used to display an image on a webpage?", options: ["<img>", " <image>", "<picture>", "<src>"],correctanswerindex:0},
    {question:" How do you create an unordered list in HTML?",  options: ["<ul>", "<ol>","<list>","<li>"],correctanswerindex:0},
    {question:"  Which HTML attribute is used to specify the URL of an external stylesheet?", options: ["href","src","link","stylesheet"],correctanswerindex:0},
    {question:" What is the purpose of the <div> tag in HTML?", options: [" To create a form"," To define a section or division in the page","To display a line break"," To insert an image"],correctanswerindex:1},
    
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