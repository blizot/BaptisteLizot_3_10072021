import { regexConst } from '../utils/regexConst.js';
import validateCities from './validateCities.js';

function validateForm(formContent) {
    const isFormValid = {
        firstName: regexConst.nameRegex.test(formContent.firstName),
        lastName: regexConst.nameRegex.test(formContent.lastName),
        email: regexConst.emailRegex.test(formContent.email),
        birthdate: regexConst.birthdateRegex.test(formContent.birthdate),
        formerContestAmount: Number.isInteger(formContent.formerContestAmount),
        formerCities: validateCities(formContent.formerCities, formContent.formerContestAmount),
        conditionsAgreement: formContent.conditionsAgreement,
    };

    isFormValid.checksum = Object.values(isFormValid).reduce((a, b) => a && b);

    return isFormValid;
}

export default validateForm;
