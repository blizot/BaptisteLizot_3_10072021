function validateForm(bookForm) {

    let previousConstestAmount = 0;
    let previousCities = [];
    let isPreviousCitiesValid = true;

    let isFirstNameValid = bookForm['first'].validity.valid;
	let isLastNameValid = bookForm['last'].validity.valid;
	let isEmailValid = bookForm['email'].validity.valid;
	let isBirthDateValid = bookForm['birthdate'].validity.valid;
    let isPreviousConstestAmountValid = bookForm['quantity'].validity.valid;
    let isNewsletterValid = bookForm['checkbox1'].checked;
    let isAcceptConditionsValid = bookForm['checkbox2'].checked;

    for(let i = 0; i < 6; i++){
        previousCities.push(bookForm['location'+i].checked);
    }

    if (isPreviousConstestAmountValid) {
        previousConstestAmount = Number(bookForm['quantity'].value);
    }

    if (previousConstestAmount > 0) {
        isPreviousCitiesValid = previousCities.reduce((a, b) => a || b);
    }

    if (isFirstNameValid && isLastNameValid && isEmailValid && isBirthDateValid && isPreviousConstestAmountValid && isPreviousCitiesValid && isNewsletterValid && isAcceptConditionsValid) {
        bookForm.submit();
        alert('Votre réservation a bien été prise en compte, merci!');
    }
    else {
        bookForm.addEventListener('submit', (evt) => {evt.preventDefault()});
    }
}

export {validateForm};