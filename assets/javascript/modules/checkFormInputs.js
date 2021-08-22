import { regexConst } from '../utils/regexConst.js';
import checkFormCities from './checkFormCities.js';

function checkFormInputs(formContent) {
    const isFormValid = {
        firstName: regexConst.nameRegex.test(formContent.firstName),
        lastName: regexConst.nameRegex.test(formContent.lastName),
        email: regexConst.emailRegex.test(formContent.email),
        birthdate: regexConst.birthdateRegex.test(formContent.birthdate),
        formerContestAmount: !Number.isNaN(Number.parseInt(formContent.formerContestAmount, 10)),
        formerCities: checkFormCities(formContent.formerCities, formContent.formerContestAmount),
        conditionsAgreement: formContent.conditionsAgreement,
    };

    isFormValid.checksum = Object.values(isFormValid).reduce((a, b) => a && b);

    return isFormValid;
}

export default checkFormInputs;
