# INTERACTIVE-QUIZ-APPLICATION


*COMPANY NAME*-CODTECH IT SOLUTIONS


*NAME*-NIKHIL NAGAR


*INTERN-ID*-CT08LRS


*DOMAIN*-FRONT END DEVELOPMENT


*DURATION*-4 Weeks


*MENTOR*-NEELA SANTOSH


# Description

-> Project Overview:
This project is an interactive quiz application that allows users to take a quiz, answer questions, track their performance, and then view their results on a separate page. The application includes a countdown timer for each question, keeps track of correct and incorrect answers, handles skipped questions, and stores results in the browser's session storage.

-> Key Features of the Quiz Application:

1. Question Fetching from API:
The quiz pulls trivia questions from the Open Trivia Database API. It fetches 10 multiple-choice questions with a difficulty level set to "easy."
Each question consists of 4 possible answer choices, with one being the correct answer and three being incorrect.

3. Timer and Progress Bar:
Every question has a 15-second timer to answer. A progress bar visually shows the time remaining to answer the current question.
If the user doesn't answer the question before the time runs out, the question is skipped automatically.

4. Answer Selection:
Users can select an answer by clicking one of the options displayed.
When an option is selected, it is visually highlighted, and the "Next" button becomes active, allowing the user to move on to the next question.

5. Score Tracking:
The quiz tracks the number of correct answers, wrong answers, and skipped questions.
The score increases by one for each correct answer.
The application also keeps track of the total number of attempted questions (correct + wrong answers).

6. Question Skipping:
Users have the option to skip a question if they don’t know the answer or if they prefer to move on to the next one.
Skipped questions are tracked separately.

7. Results Page:
After completing the quiz, the user is redirected to the results page.
On this page, the user's performance is displayed, including:
Marks Obtained: The number of correct answers (score).
Attempted: Total number of questions attempted (correct + wrong).
Correct Answers: The number of questions answered correctly.
Wrong Answers: The number of questions answered incorrectly.
Skipped Questions: The number of questions the user skipped.
The results are pulled from the browser's session storage, which is populated during the quiz based on the user's performance.

8. Navigation Between Quiz and Results:
On the results page, users can navigate back to the quiz page to retake the quiz, thanks to a "Home" button that redirects the user to the quiz page (quiz.html).

9. Session Storage for Data Persistence:
The quiz uses the browser's session storage to store the user’s results temporarily. This ensures that even if the user navigates to another page (like the results page), their performance data is accessible.
The session storage keeps the following data:
Total score (number of correct answers).
Attempted questions (total correct + wrong).
Correct answers.
Wrong answers.
Skipped questions.

10. User Interface (UI):
The UI is designed to be simple and user-friendly, featuring:
A clear display of the current question and answer options.
A countdown timer and progress bar to track time for each question.
Highlighted selections for answers.
Buttons for submitting answers and skipping questions.
A clean results page that summarizes the user's performance.

11. Error Handling:
If there is an issue fetching the quiz questions from the API, an error message is logged to the console, and the user can be informed with a confirmation message that the quiz is about to start, or a retry can be implemented.
User Experience Flow:
Quiz Start:

12. Upon visiting the quiz page, the user starts the quiz. The questions are fetched from the Open Trivia Database API, and the first question is displayed.
Answering Questions:

The user answers each question by selecting one of the options. A countdown timer starts when a question is displayed.
If the timer runs out, the question is skipped automatically.
After answering, the user clicks "Next" to move to the next question, or they can click "Skip" to skip the current question.
Viewing Results:

After all questions have been answered or skipped, the quiz is complete.
The user is redirected to the results page, where they can view their total score, number of correct answers, wrong answers, skipped questions, and total attempts.
Navigation:

On the results page, there’s a "Home" button that lets users go back to the quiz page and retake the quiz if they want to.
Benefits of This Approach:
Interactive: The timer, progress bar, and interactive options make the quiz engaging for users.
Results Tracking: The use of session storage allows users to track their performance throughout the quiz and view their results at the end.
User Control: Users can skip questions or move to the next one after answering, making the quiz feel more flexible and less time-pressured.
Replayable: The "Home" button makes it easy for users to retake the quiz without needing to refresh the page or lose progress.

-> Conclusion:
This project offers a fun and interactive quiz experience, allowing users to answer trivia questions, track their scores, and review their performance at the end. By leveraging session storage for data persistence, the app ensures that user results are available even after navigating to other pages. The project is easy to extend and can be adapted to include more features such as difficulty levels, different categories, or even saving results to a backend.

# OUTPUT

![Screenshot 2025-02-01 124324](https://github.com/user-attachments/assets/47ba3817-3623-441d-9731-9fdb33c44359)



![image](https://github.com/user-attachments/assets/aef9648d-bfee-4581-9c74-9484c4e7a71d)


