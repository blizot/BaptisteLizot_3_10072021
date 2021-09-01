import responsiveNav from './modules/responsiveNav.js';
import openModal from './modules/openModal.js';
import closeModal from './modules/closeModal.js';
import submitForm from './modules/submitForm.js';
import focusoutInputCheck from './modules/focusoutInputCheck.js';
import confirmFormSubmit from './modules/confirmFormSubmit.js';

const formStatus = sessionStorage.getItem('formStatus');
const navBurger = document.getElementById('burger');
const formBackground = document.querySelector('.bground');

// on page load check if the form has been previously submitted
if (formStatus === 'submitted') {
    openModal(formBackground);
    confirmFormSubmit();
    sessionStorage.clear();
}

const bookForm = document.forms.book;
const formTextInput = document.querySelectorAll('input.text-control');
const formOpenButton = document.querySelectorAll('.modal-btn');
const formCloseButton = document.querySelectorAll('.closeModal');
const submitFormButton = document.getElementById('submit-form-btn');

// on burger click open the responsive nav menu
navBurger.addEventListener('click', () => { responsiveNav(); });

// on button click open the form modal
formOpenButton.forEach((btn) => btn.addEventListener('click', () => { openModal(formBackground); }));

// on cross click close the form modal
formCloseButton.forEach((btn) => btn.addEventListener('click', () => { closeModal(formBackground); }));

// on button click check the form before submitting it
submitFormButton.addEventListener('click', () => { submitForm(bookForm); });

// on focus out check the form input
formTextInput.forEach((input) => input.addEventListener('focusout', () => { focusoutInputCheck(input); }));
