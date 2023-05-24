
const OPTIONS = ["rock", "paper", "scissors"];
const resultParagraph = document.getElementById("result");
let userScore = 0;
let compueterScore = 0;
const playerScoreCount = document.getElementById("player-score");
const computerScoreCount = document.getElementById("computer-score");

const updateScore = () => {
    playerScoreCount.textContent = userScore;
    computerScoreCount.textContent = compueterScore;
}


const chechResult = (event) => {
    const userInput = event.target.textContent.toLowerCase();
    const randomInput = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];

    if (userInput === randomInput) {
        resultParagraph.textContent = "it s a tie";
    } else if (
        (userInput === "rock" && randomInput === "scissors") ||
        (userInput === "scissors" && randomInput === "paper") ||
        (userInput === "paper" && randomInput === "rock")


    ) {
        resultParagraph.textContent = 'Čestitam, ${userInput} pobjedio si ${randomInput}!';
        userScore++;
        updateScore();
    } else {
        resultParagraph.textContent = "Izgubio si, pokušaj ponovo";
        compueterScore++;
        updateScore();

    }
};
const buttonArray = document.querySelectorAll("button");
buttonArray.forEach((button) => {
    button.addEventListener("click", chechResult);
});












