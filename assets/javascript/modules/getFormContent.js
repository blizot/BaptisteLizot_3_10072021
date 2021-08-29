import getFormCities from './getFormCities.js';

function getFormContent(bookForm) {
    const formContent = {
        firstName: bookForm.firstName.value,
        lastName: bookForm.lastName.value,
        email: bookForm.email.value,
        birthdate: bookForm.birthdate.value,
        formerContestAmount: Number(bookForm.quantity.value),
        formerCities: getFormCities(bookForm),
        newsletter: bookForm.checkbox1.checked,
        conditionsAgreement: bookForm.checkbox2.checked,
    };

    return formContent;
}

export default getFormContent;
