// Variables for game state
let currentQuestionIndex = 0; // Index of the current question
let score = 0; // Player's score
let timer; // Timer interval
let timeRemaining = 60; // Initial time (in seconds)

// Array of math questions
const questions = [
    { num1: 5, num2: 3, operator: '+', correctAnswer: 8, answers: [8, 6, 10, 9] },
    // Add more questions here with the same format
];

// Function to start the game
function startGame() {
    displayQuestion(); // Initialize the game by displaying the first question
}

// Function to generate a random math problem
function generateRandomProblem() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

// Function to display a math question
function displayQuestion() {
    // Get a random math problem
    const problem = generateRandomProblem();

    // Display the math question
    const questionContainer = document.getElementById("question-container");
    questionContainer.textContent = `${problem.num1} ${problem.operator} ${problem.num2}`;

    // Display the answer options
    const answersContainer = document.getElementById("answers-container");
    answersContainer.innerHTML = "";

    // Create answer buttons for options
    problem.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.addEventListener("click", () => handleAnswer(answer, problem.correctAnswer));
        answersContainer.appendChild(button);
    });

    // Start the timer when the user selects an answer
    startTimer();
}

// Function to start the timer
function startTimer() {
    // Clear any existing timer
    clearInterval(timer);

    // Update the timer bar color
    const timerBar = document.getElementById("timer-bar");
    timerBar.style.backgroundColor = "green";

    // Set up the timer interval
    timer = setInterval(() => {
        timeRemaining--;

        // Update the timer bar width based on remaining time
        const timerWidth = (timeRemaining / 60) * 100;
        timerBar.style.width = `${timerWidth}%`;

        // Change the timer bar color from green to red as time runs out
        if (timeRemaining <= 10) {
            timerBar.style.backgroundColor = "red";
        }

        // Check if time is up and end the game
        if (timeRemaining <= 0) {
            endGame();
        }
    }, 1000);
}

// Function to handle user answers
function handleAnswer(selectedAnswer, correctAnswer) {
    // Check if the selected answer is correct
    if (selectedAnswer === correctAnswer.toString()) {
        // Increase the score for correct answers
        score += 2;
    } else {
        // Implement logic for incorrect answers here, e.g., highlighting and waiting
    }

    // Move to the next question
    currentQuestionIndex++;

    // Display the updated score
    displayScore();

    // Display the next question
    displayQuestion();
}

// Function to display and update the score
function displayScore() {
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = `Score: ${score}`;
}

// Function to end the game
function endGame() {
    // Clear the timer
    clearInterval(timer);

    // Implement game over logic, e.g., display final score and message
    alert(`Game Over!\nYour Final Score: ${score}`);
}

// Call startGame to begin the game when the page loads
startGame();
