function validateCities(cities, previousConstestAmount) {
    let citiesCheck = [];

    if (!Number.isNaN(previousConstestAmount) && previousConstestAmount > 0) {
        for (let i = 0; i < cities.length; i += 1) {
            citiesCheck.push(cities[i][`city${i}`].hasParticipated);
        }

        citiesCheck.reduce((a, b) => a || b);
    } else if (!Number.isNaN(previousConstestAmount) && previousConstestAmount === 0) {
        citiesCheck = true;
    } else {
        citiesCheck = true;
    }

    return citiesCheck;
}

function validateForm(formContent) {
    const nameRegex = /[A-z]{2,}/;
    // from http://emailregex.com/
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // dates under the format dd/mm/yyyy between 1921 and 2008
    const birthdateRegex = /(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(19[2-9][1-9]|)200[0-8]/;

    const isFirstNameValid = nameRegex.test(formContent[0]);
    const isLastNameValid = nameRegex.test(formContent[1]);
    const isEmailValid = emailRegex.test(formContent[2]);
    const isBirthdateValid = birthdateRegex.test(formContent[3]);
    const isPreviousContestAmountValid = !Number.isNaN(formContent[4]);
    const isPreviousCitiesValid = validateCities(formContent[5], Number(formContent[4]));
    const isConditionAgreementChecked = formContent[6];

    let isFormValid = [isFirstNameValid, isLastNameValid, isEmailValid, isBirthdateValid,
        isPreviousContestAmountValid, isPreviousCitiesValid, isConditionAgreementChecked];
    isFormValid = isFormValid.reduce((a, b) => a || b);

    return isFormValid;
}

export default validateForm;
