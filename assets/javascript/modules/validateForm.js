import { nameRegex, emailRegex, birthdateRegex } from '../utils/globalConst.js';
import validateCities from './validateCities.js';

function validateForm(formContent) {
    const isFirstNameValid = nameRegex.test(formContent[0]);
    const isLastNameValid = nameRegex.test(formContent[1]);
    const isEmailValid = emailRegex.test(formContent[2]);
    const isBirthdateValid = birthdateRegex.test(formContent[3]);
    const isPreviousContestAmountValid = Number.isInteger(Number(formContent[4]));
    const isPreviousCitiesValid = validateCities(formContent[5], Number(formContent[4]));
    const isConditionAgreementChecked = formContent[6];

    const isFormValid = [isFirstNameValid, isLastNameValid, isEmailValid, isBirthdateValid,
        isPreviousContestAmountValid, isPreviousCitiesValid, isConditionAgreementChecked];

    return isFormValid.reduce((a, b) => a && b);
}

export default validateForm;
