function removeErrorMessages() {
    const formErrors = document.getElementsByClassName('form--error-border');
    const formErrorMessages = document.getElementsByClassName('form--error-message');

    Object.values(formErrors).forEach((e) => e.classList.remove('form--error-border'));
    Object.values(formErrorMessages).forEach((e) => e.remove());
}

export default removeErrorMessages;
