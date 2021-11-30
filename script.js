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
    }
}

document.addEventListener('input', function () {
    let answer = parseInt(document.getElementById("answer").value);
    checkAnswer(answer, currQuestion.answer);
})

newQuestion();
