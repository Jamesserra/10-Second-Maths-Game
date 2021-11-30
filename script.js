let timeleft = 10;
let count = 0;

let input = document.querySelector("input");
input.addEventListener("focus", function () {

    let downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "Finished";
        } else {
            document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
        }
        timeleft -= 1;
    }, 1000);
});

let currQuestion;

let randomNumber = function (size) {
    return Math.ceil(Math.random() * size);
}

let problemSet = function () {
    let question = {};
    let num1 = randomNumber(10);
    let num2 = randomNumber(10);

    question.answer = num1 + num2;
    question.equation = String(num1) + ' + ' + String(num2);

    return question;
}

let newQuestion = function () {
    currQuestion = problemSet();
    $('#equation').text(currQuestion.equation);
}

let checkAnswer = function (userAnswer, answer) {
    if (userAnswer === answer) {
        newQuestion();
        $('#answer').val('')
        timeleft += 1;
        count++;
        let points = document.getElementById("points").innerHTML = count;
    }
}

document.addEventListener('input', function () {
    let answer = parseInt(document.getElementById("answer").value);
    checkAnswer(answer, currQuestion.answer);
})

newQuestion();

