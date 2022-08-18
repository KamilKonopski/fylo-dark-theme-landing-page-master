const emailInput = document.getElementById('early-access-email');
const submitButton = document.getElementById('submit-button');
const invalidEmailText = document.getElementById('invalid-email-text');

const sendForm = event => {
    event.preventDefault()
    const validRegex  = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(emailInput === "" || !emailInput.value.match(validRegex)) {
        invalidEmailText.classList.add('invalid-email');
    } else {
        invalidEmailText.classList.remove('invalid-email');
    }
};

submitButton.addEventListener('click', sendForm);