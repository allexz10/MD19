
import { htmlQuestions, cssQuestions, jsQuestions } from "./questions/questions"

const htmlButton = document.querySelector('.js-html-theme');
const cssButton = document.querySelector('.js-css-theme');
const jsButton = document.querySelector('.js-javascript-theme');

const optionA = document.querySelector(".js-option-a");
const optionB = document.querySelector(".js-option-b");
const optionC = document.querySelector(".js-option-c");
const optionD = document.querySelector(".js-option-d");

const quizGame = document.querySelector('.js-quiz');
const modalWindow = document.querySelector('.js-modal-window');
const optionElements = document.querySelectorAll(".js-option");
const question = document.querySelector(".js-question");
const numberOfQuestion = <HTMLSpanElement>document.querySelector(".js-number-of-question");

const numberofAllQuestions = document.querySelector(".js-number-of-all-questions");

let indexOfQuestion = 0;
let indexOfPage = 0;

const answersTracker = document.querySelector(".js-answers-tracker");
const buttonNext = document.querySelector(".js-button__next");

let score = 0;

const correctAnswerModal = <HTMLSpanElement>document.querySelector(".js-correct-answer-modal");
const numberofAllQuestionModal = document.querySelector(".js-number-of-all-questions-modal");
const buttonTryAgain = document.querySelector(".js-button-try-again");

let questions = htmlQuestions;

const htmlTheme = () => {
  htmlButton.addEventListener('click', () => {
    htmlButton.classList.add('active');
    jsButton.classList.remove('active');
    cssButton.classList.remove('active');
    quizGame.classList.add('js-display-grid');
    questions = htmlQuestions;
    disabledClass();
    startGame();
  })
}

const cssTheme = () => {
  cssButton.addEventListener('click', () => {
    cssButton.classList.add('active');
    jsButton.classList.remove('active');
    htmlButton.classList.remove('active');
    quizGame.classList.add('js-display-grid');
    questions = cssQuestions;
    startGame();
    disabledClass();
  })
}

const jsTheme = () => {
  jsButton.addEventListener('click', () => {
    jsButton.classList.add('active');
    cssButton.classList.remove('active');
    htmlButton.classList.remove('active');
    quizGame.classList.add('js-display-grid');
    questions = jsQuestions;
    startGame();
    disabledClass();
  })
}

htmlTheme();
cssTheme();
jsTheme();

numberofAllQuestions.innerHTML = questions.length;

const loadContent = () => {
  question.innerHTML = questions[indexOfQuestion].question;
  optionA.innerHTML = questions[indexOfQuestion].options[0];
  optionB.innerHTML = questions[indexOfQuestion].options[1];
  optionC.innerHTML = questions[indexOfQuestion].options[2];
  optionD.innerHTML = questions[indexOfQuestion].options[3];

  numberOfQuestion.innerHTML = `${indexOfPage + 1}`;
  indexOfPage++;
};

let completedQuestions: number[] = [];

const randomQuestion = () => {
  let randomNumber = Math.floor(Math.random() * questions.length);
  let duplicateQuestion = false;
  if (indexOfPage === questions.length) {
    quizGameOver();
  } else {
    if (completedQuestions.length > 0) {
      completedQuestions.forEach((item) => {
        if (item === randomNumber) {
          duplicateQuestion = true;
        }
      });
      if (duplicateQuestion) {
        randomQuestion();
      } else {
        indexOfQuestion = randomNumber;
        loadContent();
      }
    }
    if (completedQuestions.length === 0) {
      indexOfQuestion = randomNumber;
      loadContent();
    }
  }
  completedQuestions.push(indexOfQuestion);
};

const checkAnswer = (elem: any) => {
  const elemClick = elem.target;

  if (elemClick.dataset.id === questions[indexOfQuestion].rightAnswer) {
    elemClick.classList.add("js-correct");
    updateTrackerInfo('js-correct');
    score++;
  
  } else {
    elemClick.classList.add("js-wrong");
    updateTrackerInfo('js-wrong');
  }

  disabledOptions();
};

const disabledOptions = () => {
  optionElements.forEach((item) => {
    const optionElement = <HTMLElement>item;
    item.classList.add("js-disabled");
    if (optionElement.dataset.id === questions[indexOfQuestion].rightAnswer) {
      optionElement.classList.add("js-correct");
    }
  });
};

const enabledOptions = () => {
  optionElements.forEach((item) => {
    item.classList.remove("js-disabled", "js-correct", "js-wrong");
  });
};

const trackerAnswer = () => {
  questions.forEach(() => {
    const trackerInfo = document.createElement("span");
    answersTracker.appendChild(trackerInfo);
  });
};
//@ts-ignore
const updateTrackerInfo = (status) => {
  answersTracker.children[indexOfPage - 1].classList.add(`${status}`);
}

const validateAnswers = () => {
  if (!optionElements[0].classList.contains('js-disabled')) {

  } else {
    enabledOptions();
    randomQuestion();
  }
}

buttonNext.addEventListener('click', validateAnswers);

buttonTryAgain.addEventListener('click', () => {
  window.location.reload();
})

for (let option of optionElements) {
  option.addEventListener("click", (e) => checkAnswer(e));
}

const quizGameOver = () => {
  modalWindow.classList.add('js-active');
  correctAnswerModal.innerHTML = `You answered ${score}`;
  numberofAllQuestionModal.innerHTML = questions.length;
  quizGame.classList.remove('js-display-grid');
};

const startGame = () => {
  randomQuestion();
  trackerAnswer();
  timer();
}




const timer = () => {
  let timeLeft = 59;
  const elem = document.querySelector('.js-timeout');
  const timerId = setInterval(countdown, 1000);

  function countdown() {
    if (timeLeft === -1) {
      clearInterval(timerId);
      quizGameOver();
    
    } else if (timeLeft <= 9) {
      elem.classList.add('js-last-seconds');
      elem.innerHTML = `00 : 0${timeLeft}`
      timeLeft--;
    
    }else {
      elem.innerHTML = `00 : ${timeLeft}`;
      timeLeft--;
    }
  }
}

const disabledClass = () => {
  htmlButton.classList.add('js-disabled');
  cssButton.classList.add('js-disabled');
  jsButton.classList.add('js-disabled');
}

