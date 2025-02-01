
window.onload = function () {
    const marksObtainEl = document.getElementById("marks-obtain");
    const attemptedEl = document.getElementById("attempted");
    const correctEl = document.getElementById("correct");
    const wrongEl = document.getElementById("wrong");
    const skippedEl = document.getElementById("skipped");

    const score = sessionStorage.getItem("score") || 0;
    const attempted = sessionStorage.getItem("attempted") || 0;
    const correct = sessionStorage.getItem("correctAnswers") || 0;
    const wrong = sessionStorage.getItem("wrong") || 0;
    const skipped = sessionStorage.getItem("skipped") || 0;

    marksObtainEl.textContent = score;
    attemptedEl.textContent = attempted;
    correctEl.textContent = correct;
    wrongEl.textContent = wrong;
    skippedEl.textContent = skipped;
};

document.getElementById("home").addEventListener("click", function () {
    window.location.href = "quiz.html"; 
});
