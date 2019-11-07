/*----- constants -----*/

const astroQuestions = [
  {
    image: "./assets/signs/aries.jpg",
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
    image: "./assets/signs/taurus.jpg",
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
    image: "./assets/signs/gemini.jpg",
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
    image: "./assets/signs/cancer.jpg",
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
    image: "./assets/signs/leo.jpg",
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
    image: "./assets/signs/virgo.jpg",
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
    image: "./assets/signs/libra.jpg",
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
    image: "./assets/signs/scorpio.jpg",
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
    image: "./assets/signs/sagittarius.jpg",
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
    image: "./assets/signs/capricorn.jpg",
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
    image: "./assets/signs/aquarius.jpg",
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
    image: "./assets/signs/pisces.jpg",
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

let astroQuestionsRandom = [];
let slides;
let currentSlide = 0;

/*----- cached element references -----*/

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const nextButton = document.getElementById('next')
const startButton = document.getElementById('welcome');
const displayClock = document.querySelector(".clock");


/*----- event listeners -----*/

startButton.addEventListener('click', init);
submitButton.addEventListener('click', showResults);
nextButton.addEventListener('click', showNextSlide);


/*----- functions -----*/ 
nextButton.style.display = "none";
submitButton.style.display = "none";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}


function displayCount(duration, display) {
  let timer = duration, minutes, seconds;
  let time = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + seconds;
    stopwatch = time;
    if (--timer < 0) {
      timer = duration;
      stopCounter(time);
     return showResults();
    }
  }, 1000);
}

let startCounter = function () {
  let threeMinutes = 180;
  let display = displayClock;
  displayCount(threeMinutes, display);
};

let stopCounter = function(id) {
  clearInterval(id)
}

function buildQuiz() {
  shuffle(astroQuestions);
  const output = [];
  astroQuestions.forEach((currentQ, qNumber) => {
    const answers = [];
  for (letter in currentQ.answers) {
    answers.push(
      `<label>
      <input type="radio" name="question${qNumber}" value="${letter}"> 
      ${currentQ.answers[letter]}
      </label>`
    );
  }
  output.push(
    `
      <div class ="slide">
      <img alt="glyph" src="${currentQ.image}">
      <br>
      <div class ="question">
        ${currentQ.question}
      </div>
      <div class="answers">
        ${answers.join('')}
      </div>
    </div>
    `,
    );
  }
  );
  startButton.parentNode.removeChild(startButton);
  quizContainer.innerHTML = output.join('');
  slides = document.querySelectorAll('.slide');
}


function showSlides(x) {
  slides[currentSlide].classList.remove('active-slide');
  slides[currentSlide].classList.add('slide');
  currentSlide = x;
  slides[x].classList.remove('slide');
  slides[x].classList.add('active-slide');
  if (currentSlide === slides.length-1) {
    nextButton.style.display = "none";
    submitButton.style.display = "inline-block";
  } else {
    nextButton.style.display = "inline-block";
    submitButton.style.display = "none";
  }
}

function showNextSlide() {
  showSlides(currentSlide + 1);
}

function showResults() {
  stopCounter(stopwatch);
  displayClock.style.display = "none";
  nextButton.style.display = "none";
  slides[currentSlide].classList.remove('active-slide');
  slides[currentSlide].classList.add('slide');
  const answerContainers = quizContainer.querySelectorAll('.answers');
  let correctAnswers = 0;
  astroQuestions.forEach((currentQ, qNumber) => {
      const answerContainer = answerContainers[qNumber];
      const selector = `input[name=question${qNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      if (userAnswer === currentQ.correctAnswer) {
          correctAnswers++;
              }
  });
  quizContainer.appendChild(startButton);
  startButton.textContent = "Take the quiz again!";
  submitButton.style.display = "none";
  resultsContainer.innerHTML = correctAnswers + ' out of ' + astroQuestions.length;
}


function init () {
  nextButton.style.display = "inline-block";
  submitButton.style.display = "none";
  displayClock.style.display = "block";
  buildQuiz();
  currentSlide = 0;
  showSlides(currentSlide);
  resultsContainer.innerHTML = "";
  startCounter();
}

/* -----to do--------
add images to slides
add landing page
update question content
add overview page
resolve lag in timer loading on page
------------------- */
