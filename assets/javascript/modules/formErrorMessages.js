import insertErrorMessages from './insertErrorMessages.js';
import removeErrorMessages from './removeErrorMessages.js';

// manages the error messages, inserts or deletes them
function formErrorMessages(isFormValid) {
    if (isFormValid.firstName === false) {
        insertErrorMessages(0, 'Veuillez insérer votre prénom');
    }

    if (isFormValid.lastName === false) {
        insertErrorMessages(1, 'Veuillez insérer votre nom de famille');
    }

    if (isFormValid.email === false) {
        insertErrorMessages(2, 'Veuillez insérer votre email valide');
    }

    if (isFormValid.birthdate === false) {
        insertErrorMessages(3, 'Veuillez insérer votre date de naissance, >13 ans');
    }

    if (isFormValid.formerContestAmount === false) {
        insertErrorMessages(4, 'Veuillez renseigner le nombre de concours auxquels vous avez participé');
    }

    if (isFormValid.formerCities === false) {
        insertErrorMessages(5, 'Veuillez sélectioner les villes dans lesquelles vous avez participé à nos concours');
    }

    if (isFormValid.conditionsAgreement === false) {
        insertErrorMessages(6, 'Veuillez accepter les conditions d\'utilisation');
    }

    if (isFormValid.firstName === true) {
        removeErrorMessages(0);
    }

    if (isFormValid.lastName === true) {
        removeErrorMessages(1);
    }

    if (isFormValid.email === true) {
        removeErrorMessages(2);
    }

    if (isFormValid.birthdate === true) {
        removeErrorMessages(3);
    }

    if (isFormValid.formerContestAmount === true) {
        removeErrorMessages(4);
    }

    if (isFormValid.formerCities === true) {
        removeErrorMessages(5);
    }

    if (isFormValid.conditionsAgreement === true) {
        removeErrorMessages(6);
    }
}

export default formErrorMessages;
