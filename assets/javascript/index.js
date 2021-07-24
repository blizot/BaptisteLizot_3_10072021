import {openModal} from './modules/openModal.js';
import {closeModal} from './modules/closeModal.js';
import {validateForm} from './modules/validateForm.js';

const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const bookForm = document.forms['book'];
const modalCloseButton = document.getElementById('closeModal');
const submitFormButton = document.getElementById('submit-form-btn');

modalBtn.forEach((btn) => btn.addEventListener('click', () => {openModal(modalbg)}));

modalCloseButton.addEventListener('click', () => {closeModal(modalbg)});

submitFormButton.addEventListener('click', () => {validateForm(bookForm)});