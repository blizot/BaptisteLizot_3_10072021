import { regexConst } from '../utils/regexConst.js';

// check the form content
function checkFormInputs(formContent) {
    /* firstName, lastName, email, and birthdate are checked against a Regex
    formerContest amount must be a number
    a city must be selected
    conditionsAgreement must be checked by the user: no default check to comply with GDPR */
    const isFormValid = {
        firstName: regexConst.nameRegex.test(formContent.firstName),
        lastName: regexConst.nameRegex.test(formContent.lastName),
        email: regexConst.emailRegex.test(formContent.email),
        birthdate: regexConst.birthdateRegex.test(formContent.birthdate),
        formerContestAmount: !Number.isNaN(Number.parseInt(formContent.formerContestAmount, 10)),
        city: formContent.city.length > 0,
        conditionsAgreement: formContent.conditionsAgreement,
    };

    // checksum evaluates to true only if all form inputs are valid
    isFormValid.checksum = Object.values(isFormValid).reduce((a, b) => a && b);

    return isFormValid;
}

export default checkFormInputs;
