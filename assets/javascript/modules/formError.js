import insertError from './insertError.js';
import removeError from './removeError.js';

function formError(isFormValid) {
    removeError();

    if (!isFormValid.firstName) {
        insertError(0, 'Veuillez insérer votre prénom');
    }

    if (!isFormValid.lastName) {
        insertError(1, 'Veuillez insérer votre nom de famille');
    }

    if (!isFormValid.email) {
        insertError(2, 'Veuillez insérer votre email valide');
    }

    if (!isFormValid.birthdate) {
        insertError(3, 'Veuillez insérer votre date de naissance, >13 ans');
    }

    if (!isFormValid.formerContestAmount) {
        insertError(4, 'Veuillez renseigner le nombre de concours auxquels vous avez participé');
    }

    if (!isFormValid.formerCities) {
        insertError(5, 'Veuillez sélectioner les villes dans lesquelles vous avez participé à nos concours');
    }

    if (!isFormValid.conditionsAgreement) {
        insertError(6, 'Veuillez accepter les conditions d\'utilisation');
    }
}

export default formError;
