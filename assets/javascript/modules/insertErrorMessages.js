function insertErrorMessages(i, errorMessage) {
    const formInputFields = ['firstName', 'lastName', 'email', 'birthdate', 'formerContestAmount', 'formerCities', 'conditionsAgreement'];
    const formElements = document.getElementsByClassName('formInput');
    const alreadyError = document.getElementById(`${formInputFields[i]}-error-message`);

    if (alreadyError) { return; }

    formElements[i].insertAdjacentHTML('beforeend', `<p class="form--error-message" id="${formInputFields[i]}-error-message">${errorMessage}.</p>`);
    formElements[i].children[1].classList.add('form--error-border');
}

export default insertErrorMessages;
