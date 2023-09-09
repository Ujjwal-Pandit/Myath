// Generate a random addition problem
function generateAdditionProblem() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const correctAnswer = num1 + num2;

    // Generate three other random wrong answers
    const wrongAnswers = [];
    while (wrongAnswers.length < 3) {
        const wrongAnswer = Math.floor(Math.random() * 20) + 1;
        if (wrongAnswer !== correctAnswer && !wrongAnswers.includes(wrongAnswer)) {
            wrongAnswers.push(wrongAnswer);
        }
    }

    // Shuffle the answers (put the correct answer in a random position)
    const answers = [correctAnswer, ...wrongAnswers];
    shuffleArray(answers);

    return { num1, num2, operator: '+', correctAnswer, answers };
}

// Shuffle an array (Fisher-Yates shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}



// Initialize the game
function startGame() {
    const question = generateAdditionProblem();
    displayQuestion(question);
}

function displayQuestion(question) {
    // Display the math question
    const questionContainer = document.getElementById("question-container");
    questionContainer.textContent = `${question.num1} + ${question.num2} = ?`;

    // Display the multiple choice answers
    const answersContainer = document.getElementById("answers-container");
    answersContainer.innerHTML = "";

    question.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.addEventListener("click", () => checkAnswer(answer, question.correctAnswer));
        answersContainer.appendChild(button);
    });
}

function checkAnswer(selectedAnswer, correctAnswer) {
    const feedback = document.getElementById("feedback");
    if (selectedAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "Incorrect. Try again.";
    }
    // You can add more logic for scoring, next question, etc.
}

// Call startGame to begin the game
startGame();

// Toggle between dark and light modes
document.getElementById("mode-switch").addEventListener("click", function () {
    const body = document.body;
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
    } else {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
    }
});

//Code in the title page where the numbers move independently anywhere
const shakingElements = document.querySelectorAll('.shaking-element');

shakingElements.forEach((element) => {
    const randomTop = Math.random() * 100 + 'vh'; // Random top position
    const randomLeft = Math.random() * 100 + 'vw'; // Random left position

    element.style.top = randomTop;
    element.style.left = randomLeft;
});
