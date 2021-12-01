$(document).ready(function () {
    let timeleft = 10;
    let count = 0;
    let highscore = 0;
    let currQuestion;
    let downloadTimer;
    let points = document.getElementById("points");
    // let times = document.getElementById("countdown");

    let randomNumber = function (size) {
        return Math.ceil(Math.random() * size);
    }

    let problemSet = function () {
        let question = {};

        let rangeslider = document.getElementById("sliderRange");
        let output = document.getElementById("output");
        output.innerHTML = rangeslider.value;

        rangeslider.oninput = function () {
            output.innerHTML = this.value;
        }

        let num1 = randomNumber(rangeslider.value);
        let num2 = randomNumber(rangeslider.value);
        question.answer = num1 + num2;
        question.equation = String(num1) + ' + ' + String(num2);
        return question;
    }

    let updateTime = function (time) {
        timeleft += time;
        $('#countdown').text(timeleft);
    }

    let updateScore = function (score) {
        count += score;
        points.innerHTML = count;
    }

    let updateHighScore = function (score) {
        if (score > highscore) {
            highscore = score;
            $('#highscore').text(highscore);
        }
    }

    let button = document.getElementById("reset")
    button.addEventListener("click", function () {
        if (!downloadTimer) {
            if (timeleft === 0) {
                answer.disabled = false;
                updateTime(10);
                updateHighScore(count);
                updateScore(-count);
            }
        }
    });

    let startGame = function () {
        if (!downloadTimer) {
            downloadTimer = setInterval(function () {
                updateTime(-1);
                if (timeleft <= 0) {
                    clearInterval(downloadTimer);
                    downloadTimer = undefined;
                    answer.disabled = true;
                }
            }, 1000);
        }
    }

    let newQuestion = function () {
        currQuestion = problemSet();
        $('#equation').text(currQuestion.equation);
    }

    let checkAnswer = function (userAnswer, answer) {
        if (userAnswer === answer) {
            newQuestion();
            $('#answer').val('')
            updateTime(+1);
            updateScore(+1);
        }
    }

    let input = document.querySelector("input");
    input.addEventListener("keyup", function () {
        startGame();
        let answer = parseInt(document.getElementById("answer").value);
        checkAnswer(answer, currQuestion.answer);
    });
    newQuestion();
});
