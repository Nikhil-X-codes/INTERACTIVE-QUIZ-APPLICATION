let currentQuestionIndex = 0;
let score = 0;
let attempted = 0;
let skipped = 0;
let wrong = 0;
let correctAnswer = "";
let timer;
let isAnswered = false;

const url = "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";
const questionEl = document.getElementById("question");
const optionsEl = document.querySelectorAll(".option");
const nextBtn = document.getElementById("next");
const skipBtn = document.getElementById("Skip");
const progressBarFill = document.querySelector(".progress-bar-fill");

const answers = [];

async function fetchQuestions() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch questions.");
        const data = await response.json();
        answers.push(...data.results);

        if (confirm("The quiz is about to start. Click OK to begin.")) {
            loadQuestion(answers[currentQuestionIndex]);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function loadQuestion(questionData) {
    const questionText = questionData.question;
    const correctAnswerText = questionData.correct_answer;
    const incorrectAnswers = questionData.incorrect_answers;

    correctAnswer = correctAnswerText;
    isAnswered = false;

    let allOptions = [...incorrectAnswers];
    allOptions.splice(Math.floor(Math.random() * (allOptions.length + 1)), 0, correctAnswerText);

    questionEl.innerHTML = questionText;

    optionsEl.forEach((option, index) => {
        option.innerHTML = `${String.fromCharCode(97 + index)}) ${allOptions[index]}`;
        option.style.backgroundColor = "";
        option.classList.remove("selected");
        option.disabled = false;
    });

    nextBtn.disabled = true;
    resetProgressBar();
}

function resetProgressBar() {
    clearInterval(timer);
    progressBarFill.style.width = "0%";

    let timeLeft = 15;
    timer = setInterval(() => {
        timeLeft--;
        progressBarFill.style.width = `${(15 - timeLeft) * 100 / 15}%`;

        if (timeLeft === 0) {
            clearInterval(timer);
            skipQuestion();
        }
    }, 1000);
}

function selectOption(index) {
    if (isAnswered) return; 

    optionsEl.forEach(option => {
        option.classList.remove("selected");
        option.style.backgroundColor = "";
    });

    const selectedOption = optionsEl[index];
    selectedOption.classList.add("selected");
    selectedOption.style.backgroundColor = "#d1e7dd";

    nextBtn.disabled = false;
}

function finalizeAnswer() {
    if (isAnswered) return; 
    isAnswered = true;

    const selectedOption = Array.from(optionsEl).find(option => option.classList.contains("selected"));
    if (selectedOption) {
        const selectedAnswer = selectedOption.innerText.split(") ")[1];
        if (selectedAnswer === correctAnswer) {
            score++;
        } else {
            wrong++;
        }
        attempted++;
    }
}

function skipQuestion() {
    if (isAnswered) return;

    clearInterval(timer);
    isAnswered = true;
    skipped++;
    goToNextQuestion();
}

function nextQuestion() {
    if (!isAnswered) {
        finalizeAnswer();
    }

    goToNextQuestion();
}

function goToNextQuestion() {
    if (currentQuestionIndex < answers.length - 1) {
        currentQuestionIndex++;
        loadQuestion(answers[currentQuestionIndex]);
    } else {
        quizComplete();
    }
}

function quizComplete() {
    clearInterval(timer);
    document.querySelector(".container").innerHTML = "<h2>Quiz Completed!</h2>";
    saveResults();
}

function saveResults() {
    const totalAttempted = score + wrong;

    sessionStorage.setItem("score", score);
    sessionStorage.setItem("correctAnswers", score);
    sessionStorage.setItem("skipped", skipped);
    sessionStorage.setItem("wrong", wrong);
    sessionStorage.setItem("attempted", totalAttempted);
}

window.onload = fetchQuestions;

optionsEl.forEach((option, index) => {
    option.addEventListener("click", () => selectOption(index));
});
nextBtn.addEventListener("click", nextQuestion);
skipBtn.addEventListener("click", skipQuestion);

document.getElementById("score").addEventListener("click", () => {
    window.location.href = "score.html";
});
