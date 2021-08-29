import getFormContent from './getFormContent.js';
import checkFormInputs from './checkFormInputs.js';
import formErrorMessages from './formErrorMessages.js';

function submitForm(bookForm) {
    const formContent = getFormContent(bookForm);

    const isFormValid = checkFormInputs(formContent);

    if (isFormValid.checksum) {
        sessionStorage.setItem('formStatus', 'submitted');

        return bookForm.submit(formContent);
    }

    return formErrorMessages(isFormValid);
}

export default submitForm;
