/*----- constants -----*/

const astroQuestions = [
  {
    image: "./assets/signs/aries.jpg",
    question: `Bold, assertive, energetic, self-starter, competitive, impulsive & stubborn.`,
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
    question: `Sensual, pragmatic, calm, focussed, stubborn, materialistic & indulgent.`,
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
    question: `Adaptable, perceptive, witty, independent, contradictory, nervous & charming.`,
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
    question: `Intuitive, generous, cautious, nostalgic, home-loving, resentful, & self-protective.`,
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
    question: `Playful, charismatic, confident, loyal, controlling, quick-tempered, patronizing & vain.`,
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
    question: `Diligent, analytical, organized, efficient, witty, overcritical, perfectionist, demanding & nagging.`,
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
    question: `Diplomatic, easygoing, fair, tactful, charming, gullible, indecisive & codependent.`,
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
    question: `Charismatic, powerful, intuitive, competitive, intense, obsessive, possessive, moody & aggressive.`,
    answers: {
      a: "Sagittarius",
      b: "Capricorn",
      c: "Scorpio",
      d: "Pisces",
    },
    correctAnswer: "c"
  },
  {
    image: "./assets/signs/sagittarius.jpg",
    question: `Philosophical, open-minded, optimistic, adventurous, talkative, blunt, dogmatic & restless.`,
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
    question: `Reliable, sophisticated, careful, tenacious, ruthless, shrewd, condescending & unmoveable.`,
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
    question: `Humanitarian, independent, original, generous, aloof, unpredictable, dogmatic & rebellious.`,
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
    question: `Visionary, spiritual, compassionate, imaginative, gullible, self-pitying, escapist & secretive.`,
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
const nextButton = document.getElementById('next');
const startButton = document.getElementById('welcome');
const displayClock = document.querySelector(".clock");
const landing = document.getElementById('landing');
const instructions = document.getElementById('instructions');
const toggleThis = document.getElementById('toggle-this');
const introduction = document.getElementById('info');
const hideMe = document.getElementById('hide-me');
const insert = document.getElementById('insert-here');

/*----- event listeners -----*/

startButton.addEventListener('click', init);
submitButton.addEventListener('click', showResults);
nextButton.addEventListener('click', showNextSlide);
toggleThis.addEventListener('click', showInfo)
insert.addEventListener('click', showIntro);

/*----- functions -----*/ 
nextButton.style.display = "none";
submitButton.style.display = "none";

function showInfo() {
introduction.classList.toggle('visible');
hideMe.classList.toggle('visible');
toggleThis.classList.toggle('visible');
insert.innerHTML = `<h4>Click to Hide Instructions</h4>`;
}

function showIntro() {
  introduction.classList.toggle('visible');
  hideMe.classList.toggle('visible');
  toggleThis.classList.toggle('visible');
  insert.innerHTML = ``;
}

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
  displayClock.style.display = "none";
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
    ` <section class="slide">
      <div class="image">
      <img alt="glyph" src="${currentQ.image}">
      </div>
      <div class="QandA">
        <div class ="question">
          ${currentQ.question}
        </div>
        <div class="answers">
          ${answers.join('')}
        </div>
      </div>
    </section>`,
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
    submitButton.textContent = "Submit Quiz";
    submitButton.style.display = "inline-block";
  } else {
    nextButton.style.display = "inline-block";
    submitButton.textContent = "End Quiz Early";
    submitButton.style.display = "inline-block";
  }
}

function showNextSlide() {
  showSlides(currentSlide + 1);
}

function showResults() {
  stopCounter(stopwatch);
  resultsContainer.style.display = "flex";
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
  landing.appendChild(startButton);
  startButton.textContent = "Take the quiz again!";
  submitButton.style.display = "none";
  resultsContainer.innerHTML = `You answered ${correctAnswers} questions correctly out of ${astroQuestions.length}!`;
}


function init () {
  buildQuiz();
  currentSlide = 0;
  showSlides(currentSlide);
  resultsContainer.innerHTML = "";
  displayClock.style.display = "flex";
  startCounter();
  instructions.style.display = "none";
}

/* -----to do--------
style instructions
add image to results page
deploy at 11 am
toggle instructions in quiz pages
link to landing page in results page
resolve lag in timer loading on page
------------------- */
