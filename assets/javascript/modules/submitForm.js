import getFormContent from './getFormContent.js';
import validateForm from './validateForm.js';

function submitForm(bookForm) {
    const formContent = getFormContent(bookForm);

    const isFormValid = validateForm(formContent);

    if (isFormValid.checksum) {
        return bookForm.submit(formContent);
    }
}

export default submitForm;
