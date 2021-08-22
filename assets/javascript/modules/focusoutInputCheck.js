import { regexConst } from '../utils/regexConst.js';
import formErrorMessages from './formErrorMessages.js';

function focusoutInputCheck(input) {
    if (input.name === 'firstName') {
        formErrorMessages({ firstName: regexConst.nameRegex.test(input.value) });
    }

    if (input.name === 'lastName') {
        formErrorMessages({ lastName: regexConst.nameRegex.test(input.value) });
    }

    if (input.name === 'email') {
        formErrorMessages({ email: regexConst.emailRegex.test(input.value) });
    }

    if (input.name === 'birthdate') {
        formErrorMessages({ birthdate: regexConst.birthdateRegex.test(input.value) });
    }

    if (input.name === 'quantity') {
        formErrorMessages({ formerContestAmount: !Number.isNaN(Number.parseInt(input.value, 10)) });
    }
}

export default focusoutInputCheck;
