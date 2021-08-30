import { regexConst } from '../utils/regexConst.js';
import checkFormCities from './checkFormCities.js';

// check the form content
function checkFormInputs(formContent) {
    /* firstName, lastName, email, and birthdate are checked against a Regex
    formerContest amount must be a number
    formerCities must be filled if formerContestAmount is greater than 0
    conditionsAgreement must be checked by the user: no default check to comply with GDPR */
    const isFormValid = {
        firstName: regexConst.nameRegex.test(formContent.firstName),
        lastName: regexConst.nameRegex.test(formContent.lastName),
        email: regexConst.emailRegex.test(formContent.email),
        birthdate: regexConst.birthdateRegex.test(formContent.birthdate),
        formerContestAmount: !Number.isNaN(Number.parseInt(formContent.formerContestAmount, 10)),
        formerCities: checkFormCities(formContent.formerCities, formContent.formerContestAmount),
        conditionsAgreement: formContent.conditionsAgreement,
    };

    // checksum evaluates to true only if all form inputs are valid
    isFormValid.checksum = Object.values(isFormValid).reduce((a, b) => a && b);

    return isFormValid;
}

export default checkFormInputs;
