import getCities from './getCities.js';

function getFormContent(bookForm) {
    const firstName = bookForm.firstName.value;
    const lastName = bookForm.lastName.value;
    const email = bookForm.email.value;
    const birthdate = bookForm.birthdate.value;
    const previousConstestAmount = bookForm.quantity.value;
    const previousCities = getCities(bookForm);
    const conditionsAgreement = bookForm.checkbox2.checked;

    return [firstName, lastName, email, birthdate, previousConstestAmount, previousCities,
        conditionsAgreement];
}

export default getFormContent;
