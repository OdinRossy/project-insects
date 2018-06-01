$(function () {
    $('#button').click(function () {
        let numberOfCorrect = 0;
        if ($('#q1').prop('checked') === false && $('#q2').prop('checked') === true && $('#q3').prop('checked') === false && $('#q4').prop('checked') === false) {
            numberOfCorrect++;
        }
        if ($('#q5').prop('checked') === true && $('#q6').prop('checked') === false && $('#q7').prop('checked') === false && $('#q8').prop('checked') === false) {
            numberOfCorrect++;
        }
        if ($('#q9').prop('checked') === false && $('#q10').prop('checked') === false && $('#q11').prop('checked') === true && $('#q12').prop('checked') === false) {
            numberOfCorrect++;
        }
        if ($('#q13').prop('checked') === false && $('#q14').prop('checked') === true && $('#q15').prop('checked') === false && $('#q16').prop('checked') === false) {
            numberOfCorrect++;
        }
        if ($('#q17').prop('checked') === false && $('#q18').prop('checked') === false && $('#q19').prop('checked') === true && $('#q20').prop('checked') === false) {
            numberOfCorrect++;
        }
        if ($('#q21').prop('checked') === true && $('#q22').prop('checked') === false && $('#q23').prop('checked') === false && $('#q24').prop('checked') === false) {
            numberOfCorrect++;
        }
        if ($('#q25').prop('checked') === true && $('#q26').prop('checked') === false && $('#q27').prop('checked') === false && $('#q28').prop('checked') === false) {
            numberOfCorrect++;
        }
        if ($('#q29').prop('checked') === true && $('#q30').prop('checked') === false && $('#q31').prop('checked') === false && $('#q32').prop('checked') === false) {
            numberOfCorrect++;
        }
        if ($('#q33').prop('checked') === true && $('#q34').prop('checked') === false && $('#q35').prop('checked') === false && $('#q36').prop('checked') === false) {
            numberOfCorrect++;
        }
        if ($('#q37').prop('checked') === true && $('#q38').prop('checked') === false && $('#q39').prop('checked') === false && $('#q40').prop('checked') === false) {
            numberOfCorrect++;
        }
        answer(numberOfCorrect);
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