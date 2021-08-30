import getFormContent from './getFormContent.js';
import checkFormInputs from './checkFormInputs.js';
import formErrorMessages from './formErrorMessages.js';

// check the form inputs and submit it in valid case
function submitForm(bookForm) {
    // fetch the form content/inputs
    const formContent = getFormContent(bookForm);

    // check the validity of the content/inputs
    const isFormValid = checkFormInputs(formContent);

    // update the sessionStorage and submit the form if the content/inputs are all valid
    if (isFormValid.checksum) {
        sessionStorage.setItem('formStatus', 'submitted');

        return bookForm.submit(formContent);
    }

    // display errors if any of the form content/inputs are invalid
    return formErrorMessages(isFormValid);
}

export default submitForm;
