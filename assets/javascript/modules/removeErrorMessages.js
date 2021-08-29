function removeErrorMessages(i) {
    const formInputFields = ['firstName', 'lastName', 'email', 'birthdate', 'formerContestAmount', 'formerCities', 'conditionsAgreement'];
    const formErrorMessage = document.getElementById(`${formInputFields[i]}-error-message`);

    if (formErrorMessage) {
        formErrorMessage.previousElementSibling.classList.remove('form--error-border');
        formErrorMessage.remove();
    }
}

export default removeErrorMessages;
