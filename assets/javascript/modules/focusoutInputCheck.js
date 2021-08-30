import { regexConst } from '../utils/regexConst.js';
import formErrorMessages from './formErrorMessages.js';

/* check if the value of the input is valid on focus out so the user doesn't have to press send to
know if they filled the form properly
firstName, lastName, email, and birthdate are checked against a Regex
formerContest amount must be a number */
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
