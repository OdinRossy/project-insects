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
        if ($('#q17').prop('checked') === true && $('#q18').prop('checked') === false && $('#q19').prop('checked') === false && $('#q20').prop('checked') === false) {
            numberOfCorrect++;
            // window.alert("Верно " + numberOfCorrect);
        }
        if ($('#q21').prop('checked') === true && $('#q22').prop('checked') === false && $('#q23').prop('checked') === false && $('#q24').prop('checked') === false) {
            numberOfCorrect++;
            // window.alert("Верно " + numberOfCorrect);
        }
        if ($('#q25').prop('checked') === true && $('#q26').prop('checked') === false && $('#q27').prop('checked') === false && $('#q28').prop('checked') === false) {
            numberOfCorrect++;
            // window.alert("Верно " + numberOfCorrect);
        }
        if ($('#q29').prop('checked') === true && $('#q30').prop('checked') === false && $('#q31').prop('checked') === false && $('#q32').prop('checked') === false) {
            numberOfCorrect++;
            // window.alert("Верно " + numberOfCorrect);
        }
        if ($('#q33').prop('checked') === true && $('#q34').prop('checked') === false && $('#q35').prop('checked') === false && $('#q36').prop('checked') === false) {
            numberOfCorrect++;
            // window.alert("Верно " + numberOfCorrect);
        }
        if ($('#q37').prop('checked') === true && $('#q38').prop('checked') === false && $('#q39').prop('checked') === false && $('#q40').prop('checked') === false) {
            numberOfCorrect++;
            // window.alert("Верно " + numberOfCorrect);
        }
        answer(numberOfCorrect);
        numberOfCorrect = 0;
    });
    function answer(num) {
        if (num===0){
            alert("Вы не ответили ни на один вопрос правильно")
        }
        else {
            alert("Вы ответили правильно на " + num + " из 10 вопросов.");
        }
    }
});