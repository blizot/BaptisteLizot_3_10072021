import getFormContent from './getFormContent.js';
import validateForm from './validateForm.js';

function submitForm(bookForm) {
    const formContent = getFormContent(bookForm);

    const isFormValid = validateForm(formContent);

    if (isFormValid) {
        // bookForm.submit(formContent);
        // eslint-disable-next-line no-console
        console.log('submit');
    }
}

export default submitForm;
