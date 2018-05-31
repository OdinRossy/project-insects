$(function () {
    let numberOfCorrect = 0;
    $('#button').click(function () {
        if ($('#q1').prop('checked') === true && $('#q2').prop('checked') === false && $('#q3').prop('checked') === false && $('#q4').prop('checked') === false) {
            numberOfCorrect++;
            // window.alert("Верно " + numberOfCorrect);
        }
        if ($('#q5').prop('checked') === true && $('#q6').prop('checked') === false && $('#q7').prop('checked') === false && $('#q8').prop('checked') === false) {
            numberOfCorrect++;
            // window.alert("Верно " + numberOfCorrect);
        }
        if ($('#q9').prop('checked') === true && $('#q10').prop('checked') === false && $('#q11').prop('checked') === false && $('#q12').prop('checked') === false) {
            numberOfCorrect++;
            // window.alert("Верно " + numberOfCorrect);
        }
        if ($('#q13').prop('checked') === true && $('#q14').prop('checked') === false && $('#q15').prop('checked') === false && $('#q16').prop('checked') === false) {
            numberOfCorrect++;
            // window.alert("Верно " + numberOfCorrect);
        }
        alert("Вы ответили правильно на " + numberOfCorrect + " вопросов.");
        numberOfCorrect = 0;
    });
});