$(function() {
    $('#button').click(function() {
        let numberOfCorrect = 0;
        // Вопрос 1 (2)
        if ($('#q1').prop('checked') === false && $('#q2').prop('checked') === true && $('#q3').prop('checked') === false && $('#q4').prop('checked') === false) {
            numberOfCorrect++;
        }
        // Вопрос 2 (1)
        if ($('#q5').prop('checked') === true && $('#q6').prop('checked') === false && $('#q7').prop('checked') === false && $('#q8').prop('checked') === false) {
            numberOfCorrect++;
        }
        // Вопрос 3 (3)
        if ($('#q9').prop('checked') === false && $('#q10').prop('checked') === false && $('#q11').prop('checked') === true && $('#q12').prop('checked') === false) {
            numberOfCorrect++;
        }
        // Вопрос 4 (2)
        if ($('#q13').prop('checked') === false && $('#q14').prop('checked') === true && $('#q15').prop('checked') === false && $('#q16').prop('checked') === false) {
            numberOfCorrect++;
        }
        // Вопрос 5 (3)
        if ($('#q17').prop('checked') === false && $('#q18').prop('checked') === false && $('#q19').prop('checked') === true && $('#q20').prop('checked') === false) {
            numberOfCorrect++;
        }
        // Вопрос 6 (4)
        if ($('#q21').prop('checked') === false && $('#q22').prop('checked') === false && $('#q23').prop('checked') === false && $('#q24').prop('checked') === true) {
            numberOfCorrect++;
        }
        // Вопрос 7 (1,2,4)
        if ($('#q25').prop('checked') === true && $('#q26').prop('checked') === true && $('#q27').prop('checked') === false && $('#q28').prop('checked') === true) {
            numberOfCorrect++;
        }
        // Вопрос 8 (2)
        if ($('#q29').prop('checked') === false && $('#q30').prop('checked') === true && $('#q31').prop('checked') === false && $('#q32').prop('checked') === false) {
            numberOfCorrect++;
        }
        // Вопрос 9 (2)
        if ($('#q33').prop('checked') === false && $('#q34').prop('checked') === true && $('#q35').prop('checked') === false && $('#q36').prop('checked') === false) {
            numberOfCorrect++;
        }
        // Вопрос 10 (1,3,4)
        if ($('#q37').prop('checked') === true && $('#q38').prop('checked') === false && $('#q39').prop('checked') === true && $('#q40').prop('checked') === true) {
            numberOfCorrect++;
        }
        answer(numberOfCorrect);
    });

    function answer(num) {
        if (num === 0) {
            alert("Вы не ответили правильно ни на один вопрос.")
        } else if (num === 10) {
            alert("Поздравляем! Вы ответили на все вопросы верно!")
        } else {
            alert("Вы ответили правильно на " + num + " из 10 вопросов.");
        }
    }
});