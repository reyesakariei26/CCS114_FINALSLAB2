//welcome message dito
alert("Welcome sa Student Score Evaluator! Tingnan natin kung slay ang scores mo o pray na lang.🙏");


//mga function d2 pra ma evalu yung mga score
function evaluateScore(score) {

    // Check if score is empty
    if (score === "") {
        return "Invalid score";
    }

    // Convert the input into a number
    let numberScore = Number(score);

    // Check if the input is not a number
    if (isNaN(numberScore)) {
        return "Invalid score";
    }

    // Check if score is zero or negative
    if (numberScore <= 0) {
        return "Invalid score";
    }

    // Check if score is greater than 100
    if (numberScore > 100) {
        return "Invalid score";
    }

    // Check if score is 90 to 100
    if (numberScore >= 90) {
        return "Excellent";
    }

    // Check if score is 75 to 89
    else if (numberScore >= 75) {
        return "Passed";
    }

    // Anything below 75
    else {
        return "Failed";
    }
}


// ===============================
// MAIN FUNCTION
// ===============================

function startEvaluation() {

    // Ask for the user's name
    let name = prompt("Please enter your name:");

    // Check if name is empty
    if (name === null || name.trim() === "") {

        alert("Please enter your name.");

        return;
    }


    // Ask for the user's score
    let score = prompt("Please enter your score(0 - 100): ");

    // Check if score is empty
    if (score === null || score.trim() === "") {

        alert("Please enter a score.");

        return;
    }


    // Ask the user if they want to continue
    let proceed = confirm(
        "Hello " + name + "!\n\n" +
        "Your score is " + score + ".\n\n" +
        "Do you want to continue?"
    );


    // If the user chooses Cancel
    if (!proceed) {

        alert("Evaluation cancelled.");

        return;
    }


    // Evaluate the score
    let remark = evaluateScore(score);


    // Get the result section
    let result = document.getElementById("result");

    let resultText = document.getElementById("resultText");


    // Display the result
    result.style.display = "block";


    // If score is invalid
    if (remark === "Invalid score") {

        resultText.innerHTML =
            "<strong>Name:</strong> " + name +
            "<br><strong>Score:</strong> " + score +
            "<br><strong>Remark:</strong> Invalid score";

        alert("Invalid score. Please enter a number from 1 to 100.");

    }

    // If score is valid
    else {

        resultText.innerHTML =
            "<strong>Name:</strong> " + name +
            "<br><strong>Score:</strong> " + score +
            "<br><strong>Remark:</strong> " + remark;
    }
}