let randomNumber = function(size) {
    return Math.ceil(Math.random() * size);
}

let problemSet = function() {
    let question = {};
    let num1 = randomNumber(10);
    let num2 = randomNumber(10);

    question.answer = num1 + num2;
    question.equation = String(num1) + ' + ' + String(num2);

    return question;
}

console.log(problemSet());
console.log(problemSet());

curr = problemSet();
$('#equation').text(curr.equation);