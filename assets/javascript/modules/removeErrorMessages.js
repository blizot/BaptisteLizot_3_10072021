// removes a specific error message and the input field red border
function removeErrorMessages(formInputIndex) {
    const formInputFields = ['firstName', 'lastName', 'email', 'birthdate', 'formerContestAmount', 'city', 'conditionsAgreement'];
    const formErrorMessage = document.getElementById(`${formInputFields[formInputIndex]}-error-message`);

    if (formErrorMessage) {
        formErrorMessage.previousElementSibling.classList.remove('form--error-border');
        formErrorMessage.remove();
    }
}

export default removeErrorMessages;
