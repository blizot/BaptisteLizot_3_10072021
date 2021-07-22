export function validateForm() {
    const submitFormButton = document.getElementById('btn-submit');

    submitFormButton.addEventListener('click', () => {

        let isFirstNameValid = document.forms['book']['first'].validity.valid;
	    let isLastNameValid = document.getElementById('last').validity.valid;
	    let isEmailValid = document.getElementById('email').validity.valid;
	    let isBirthDateValid = document.getElementById('birthdate').validity.valid;
        let isAcceptConditionsValid = document.getElementById('checkbox1').validity.valid;

        if ( !isFirstNameValid && !isLastNameValid && !isEmailValid && !isBirthDateValid && !isAcceptConditionsValid) {
            submitFormButton.preventDefault();
        }
    })
}