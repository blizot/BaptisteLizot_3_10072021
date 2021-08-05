import openModal from './modules/openModal.js';
import closeModal from './modules/closeModal.js';
import submitForm from './modules/submitForm.js';

const formBackground = document.querySelector('.bground');
const formOpenButton = document.querySelectorAll('.modal-btn');
const bookForm = document.forms.book;
const formCloseButton = document.getElementById('closeModal');
const submitFormButton = document.getElementById('submit-form-btn');

formOpenButton.forEach((btn) => btn.addEventListener('click', () => { openModal(formBackground); }));

formCloseButton.addEventListener('click', () => { closeModal(formBackground); });

submitFormButton.addEventListener('click', () => { submitForm(bookForm); });
