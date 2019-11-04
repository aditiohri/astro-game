/*----- constants -----*/

const astroQuestions = [
    {
      question: `This glyph, symbolic of a ram, represents the first sign of the zodiac. This fire sign is bold, action-oriented and assertive. Which sign is it?`,
      answers: {
        a: "Taurus",
        b: "Cancer",
        c: "Aries",
        d: "Capricorn",
      },
      correctAnswer: "c"
    },
    {
      question: `The earth sign represented by this glyph is one of two ruled by Venus. Associated with fertility, abundance and luxury, this glyph is symbolic of a bull. Which sign is it?`,
      answers: {
        a: "Capricorn",
        b: "Libra",
        c: "Pisces",
        d: "Taurus",
      },
      correctAnswer: "d"
    },
    {
      question: `This sign loves to chat. Highly intellectual, witty and adaptable, the glyph for this air sign is a symbol for twins, speaking to its dualistic nature. Which sign is it?`,
      answers: {
        a: "Gemini",
        b: "Scorpio",
        c: "Aries",
        d: "Leo",
      },
      correctAnswer: "a"
    },
    {
      question: `Some say this water sign has a hard shell. Known for being emotional intuitive, and deeply maternal, some say its glyph represent breasts, the primary source of nourishment for babies. Which sign is it?`,
      answers: {
        a: "Scorpio",
        b: "Cancer",
        c: "Aquarius",
        d: "Taurus",
      },
      correctAnswer: "b"
    },
    {
      question: `Fixed fire sign; drama; warm; effusive; center of attention; courageous. Which sign is it?`,
      answers: {
        a: "Aries",
        b: "Leo",
        c: "Scorpio",
        d: "Pisces",
      },
      correctAnswer: "b"
    },
    {
      question: `Mutable earth sign; reliable; goal-oriented; great workers; attention to detail; perfectionists; caring for the body. Which sign is it?`,
      answers: {
        a: "Libra",
        b: "Sagittarius",
        c: "Cancer",
        d: "Virgo",
      },
      correctAnswer: "d"
    },
    {
      question: `Cardinal air sign; diplomatic; social; gracious; loves beauty; great fashion sense; Which sign is it?`,
      answers: {
        a: "Libra",
        b: "Virgo",
        c: "Aries",
        d: "Taurus",
      },
      correctAnswer: "a"
    },
    {
      question: `Fixed water; Dramatic, passionate probing, lover of mysteries + understanding human psychology, secretive, tenacious; Which sign is it?`,
      answers: {
        a: "Sagittarius",
        b: "Capricorn",
        c: "Scorpio",
        d: "Pisces",
      },
      correctAnswer: "b"
    },
    {
      question: `Mutable fire; Philosophical; adventurous; independent; restless; optimistic; Which sign is it?`,
      answers: {
        a: "Aries",
        b: "Leo",
        c: "Sagittarius",
        d: "Cancer",
      },
      correctAnswer: "c"
    },
    {
      question: `Cardinal earth. Industrious; resilient; authoritative; dependable; does well in structure; disciplined; Which sign is it?`,
      answers: {
        a: "Capricorn",
        b: "Leo",
        c: "Virgo",
        d: "Aquarius",
      },
      correctAnswer: "a"
    },
    {
      question: `Fixed air; humanitarian; eccentric; idealistic; detached; inventive; opinionated; Which sign is it?`,
      answers: {
        a: "Leo",
        b: "Libra",
        c: "Gemini",
        d: "Aquarius",
      },
      correctAnswer: "d"
    },
    {
      question: `Mutable water; artistic; sensitive; impressionable; compassionate; tender; dreamy; Which sign is it?`,
      answers: {
        a: "Cancer",
        b: "Taurus",
        c: "Pisces",
        d: "Leo",
      },
      correctAnswer: "c"
    },
  ]

/*----- app's state (variables) -----*/

let currentSlide = 0;

/*----- cached element references -----*/
  
  const quizContainer = document.getElementById('quiz');
  const question = document.getElementsByClassName('slide');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const startButton = document.getElementById('welcome');
  const skipButton = document.getElementById('skip');
  const nextButton = document.getElementById('next');
  
/*----- event listeners -----*/

  startButton.addEventListener('click', buildQuiz)
  skipButton.addEventListener('click', skipQuestion)
  nextButton.addEventListener('click', showNextQuestion)
  submitButton.addEventListener('click', showResults)

  

/*----- functions -----*/ 
function buildQuiz() {
  astroQuestions.forEach((currentQ, qNumber) => {
    const output = [];
    astroQuestions.forEach((currentQ, qNumber) => {
      const answers = [];
    for (letter in currentQ.answers) {
      answers.push(
        `<label>
        <input type="radio" name="question${qNumber}" value="${letter}">
        ${letter}: ${currentQ.answers[letter]}
        ${letter} : 
        ${currentQ.answers[letter]}
        </label>`
      );
    }
    output.push(
      `<div class ="question"> ${currentQ.question}</div>
      <div class="answers"${answers.join('')}</div>`
      `<div class ="question">
        ${currentQ.question}
      </div>
      <div class="answers">
        ${answers.join('')}
      </div>`
    );
  }
  );
  quizContainer.innerHTML = output.join('');
  });

function showFirstQuestion() {
  showQuestion(0);
}
  
  function showQuestion(x) {
    //pagination : show and hide questions
    // show only one question at a time
    // display skip question button
    // if answer is checked, show next question button 
    // and remove display for skip question
    // if final question, toggle bw skip button and submit button

    question[currentSlide].classList.remove('active-slide');
    question[x].classList.add('active-slide');
    if (currentSlide === question.length-1) {
      skipButton.style.display = 'inline-block';
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else {
      skipButton.style.display = 'inline-block';
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';

    }
    //skip question button becomes next question button once answer is selected
    //if last question, option to submit quiz
    // nextq clears present question
    // shows next question
  }
  function showNextQuestion(){
    showQuestion(currentQ + 1);
  }
  function skipQuestion() {
    showQuestion(currentQ + 1);
  }

  function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let correctAnswers = 0;
    astroQuestions.forEach((currentQ, qNumber) => {
        const answerContainer = answerContainers[qNumber];
        const selector = `input[name=question${qNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if (userAnswer === currentQ.correctAnswer) {
            correctAnswers++;
        answerContainers[qNumber].style.color = 'purple';
        }
        else {
            answerContainers[qNumber].style.color = 'orange';
        }
    });
    resultsContainer.innerHTML = correctAnswers + ' out of ' + astroQuestions.length;
  }
  
  function rankResults() {
    //  include levels for different results 

  }



  /* -----to do--------
  init / render function
  pagination : show and hide questions
  randomize question order
  buttons to navigate quiz
  make it impossible for user to advance without answering present question
  call back function for 15 seconds per question
  ------------------- */
