import getFormContent from './getFormContent';
import validateForm from './validateForm';

function submitForm(bookForm) {
    const formContent = getFormContent(bookForm);

    const isFormValid = validateForm(formContent);

    if (isFormValid) {
        bookForm.submit(formContent);
    } else {
        bookForm.addEventListener('submit', (evt) => { evt.preventDefault(); });
    }
}

export default submitForm;
