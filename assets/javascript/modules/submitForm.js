import getFormContent from './getFormContent.js';
import validateForm from './validateForm.js';
import formError from './formError.js';

function submitForm(bookForm) {
    const formContent = getFormContent(bookForm);

    const isFormValid = validateForm(formContent);

    if (isFormValid.checksum) {
        return bookForm.submit(formContent);
    }

    return formError(isFormValid);
}

export default submitForm;
