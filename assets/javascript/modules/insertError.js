function insertError(i, errorMessage) {
    const formElements = document.getElementsByClassName('formData');

    formElements[i].insertAdjacentHTML('beforeend', `<p class="form--error-message">${errorMessage}.</p>`);
    formElements[i].children[1].classList.add('form--error-border');
}

export default insertError;
