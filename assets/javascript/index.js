import openModal from './modules/openModal.js';
import closeModal from './modules/closeModal.js';
import submitForm from './modules/submitForm.js';
import focusoutInputCheck from './modules/focusoutInputCheck.js';
import confirmFormSubmit from './modules/confirmFormSubmit.js';

const formBackground = document.querySelector('.bground');
const formOpenButton = document.querySelectorAll('.modal-btn');
const bookForm = document.forms.book;
const formTextInput = document.querySelectorAll('input.text-control');
const formCloseButton = document.getElementById('closeModal');
const submitFormButton = document.getElementById('submit-form-btn');
const formStatus = sessionStorage.getItem('formStatus');

// on page load check if the form has been previously submitted
if (formStatus === 'submitted') {
    openModal(formBackground);
    confirmFormSubmit();
    sessionStorage.clear();
}

// on button click open the form modal
formOpenButton.forEach((btn) => btn.addEventListener('click', () => { openModal(formBackground); }));

// on cross click close the form modal
formCloseButton.addEventListener('click', () => { closeModal(formBackground); });

// on button click check the form before submitting it
submitFormButton.addEventListener('click', () => { submitForm(bookForm); });

// on focus out check the form input
formTextInput.forEach((input) => input.addEventListener('focusout', () => { focusoutInputCheck(input); }));
