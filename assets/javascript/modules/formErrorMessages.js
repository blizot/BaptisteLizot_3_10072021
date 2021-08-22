import insertErrorMessages from './insertErrorMessages.js';
import removeErrorMessages from './removeErrorMessages.js';

function formErrorMessages(isFormValid) {
    removeErrorMessages();

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
}

export default formErrorMessages;
