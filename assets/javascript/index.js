import openModal from './modules/openModal.js';
import closeModal from './modules/closeModal.js';
import submitForm from './modules/submitForm.js';
import focusoutInputCheck from './modules/focusoutInputCheck.js';

const formBackground = document.querySelector('.bground');
const formOpenButton = document.querySelectorAll('.modal-btn');
const bookForm = document.forms.book;
const formTextInput = document.querySelectorAll('input.text-control');
const formCloseButton = document.getElementById('closeModal');
const submitFormButton = document.getElementById('submit-form-btn');

formOpenButton.forEach((btn) => btn.addEventListener('click', () => { openModal(formBackground); }));

formCloseButton.addEventListener('click', () => { closeModal(formBackground); });

submitFormButton.addEventListener('click', () => { submitForm(bookForm); });

formTextInput.forEach((input) => input.addEventListener('focusout', () => { focusoutInputCheck(input); }));
