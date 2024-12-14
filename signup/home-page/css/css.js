const questions = [
  
  {question:"Which CSS property is used to change the background color of an element?",  options: ["color","bgcolor","background-color","bg-color"],correctanswerindex:2},
  {question:`Which CSS selector selects all elements with the class name "myClass" ?`,options: [" #myClass", ".myClass"," *myClass","%myClass"],correctanswerindex:1},
  {question:"Which CSS property is used to set the font size of an element?", options: ["font-size", "text-size", "font-style", "font-weight"],correctanswerindex:0},
  {question:"Which CSS property is used to set the spacing between elements?",  options: ["margin", "padding","border","spacing"],correctanswerindex:0},
  {question:"Which CSS property is used to align text within an element?", options: ["text-align","align-text","text-position","align"],correctanswerindex:0},
  {question:"Which CSS box model property is used to set the space between the content and the border of an element?", options: ["margin","padding","border","spacing"],correctanswerindex:1},
  
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
      label.htmlFor = `option${index}`;
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
  questionElement.textContent = `Quiz Complete! ${currentuser.username} you're scored ${score} out of ${questions.length}.persentage ${ score = (score / questions.length) * 100, score.toFixed(2)}%`
  optionsElement.innerHTML = '';  
  nextButton.style.display = 'none';

}
}
function startCountdown() {
  countdownInterval = setInterval(() => {
  const countdownElement = document.getElementById('timer');
  timer--;
  countdownElement.textContent = `${timer}`;

  if (timer <= 0) {
    currentindex = (currentindex + 1) % questions.length; 
      displayQuestion();

  }

  
}, 1000);
}

displayQuestion();
startCountdown();