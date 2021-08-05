import getFormContent from './getFormContent.js';
import validateForm from './validateForm.js';

function submitForm(bookForm) {
    const formContent = getFormContent(bookForm);

    const isFormValid = validateForm(formContent);

    if (isFormValid) {
        // bookForm.submit(formContent);
    } else {
        bookForm.addEventListener('submit', (evt) => { evt.preventDefault(); });
    }
}

export default submitForm;
