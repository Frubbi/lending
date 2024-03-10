    // сменяется цвет бланков
    var emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    var email = document.getElementById('email');
    function isEmailValid(value) {
            return emailRegex.test(value);
    }
    function onInpute() {
        if (isEmailValid(email.value)) {
            email.style.borderColor = 'green';
        } else {
            email.style.borderColor = 'red';
        }
    }
    email.addEventListener('input', onInpute);

    var latRegex = /^[А-Яа-яЁё\s]+$/;
    let fio = document.getElementById('fio');
    let question = document.getElementById('question');
    function isFioValid(value) {
            return latRegex.test(value);
    }
    function isQuestionValid(value) {
            return latRegex.test(value);
    }
    function onInputf() {
        if (isFioValid(fio.value)) {
            fio.style.borderColor = 'green';
        } else {
            fio.style.borderColor = 'red';
        }
    }
    fio.addEventListener('input', onInputf);

    function onInputq() {
        if (isQuestionValid(question.value)) {
            question.style.borderColor = 'green';
        } else {
            question.style.borderColor = 'red';
        }
    }
    question.addEventListener('input', onInputq);
    
// отправка сообщений
    function sendFun() {
        if (question.style.borderColor == 'green' && fio.style.borderColor == 'green' && email.style.borderColor == 'green'){
                alert(fio.value + ', мы приняли ваш вопрос:'+ '\n"'+question.value + '"' + "\n Ответ будет отправлен на вашу почту: " + email.value);            
            } else {
                alert("Не все данные введены корректно.");
        }
    }