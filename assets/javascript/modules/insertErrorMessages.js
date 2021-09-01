// insert an error message under a specific form input if the entry is invalid
function insertErrorMessages(formInputIndex, errorMessage) {
    const formInputFields = ['firstName', 'lastName', 'email', 'birthdate', 'formerContestAmount', 'city', 'conditionsAgreement'];
    const formElements = document.getElementsByClassName('formInput');
    const alreadyError = document.getElementById(`${formInputFields[formInputIndex]}-error-message`);

    // doesn't add an additional error if one is already displayed
    if (alreadyError) { return; }

    formElements[formInputIndex].insertAdjacentHTML('beforeend',
        `<p class="form--error-message" id="${formInputFields[formInputIndex]}-error-message">${errorMessage}.</p>`);
    formElements[formInputIndex].children[1].classList.add('form--error-border');
}

export default insertErrorMessages;
