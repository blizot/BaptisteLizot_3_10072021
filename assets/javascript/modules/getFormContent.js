function cities(bookForm) {
    class City {
        constructor(location, hasParticipated) {
            this.location = location;
            this.hasParticipated = hasParticipated;
        }
    }

    const city0 = new City(bookForm.location0.value, bookForm.location0.checked);
    const city1 = new City(bookForm.location1.value, bookForm.location1.checked);
    const city2 = new City(bookForm.location2.value, bookForm.location2.checked);
    const city3 = new City(bookForm.location3.value, bookForm.location3.checked);
    const city4 = new City(bookForm.location4.value, bookForm.location4.checked);
    const city5 = new City(bookForm.location5.value, bookForm.location5.checked);

    const citiesArray = [city0, city1, city2, city3, city4, city5];

    return citiesArray;
}

function getFormContent(bookForm) {
    const firstName = bookForm.first.value;
    const lastName = bookForm.last.value;
    const email = bookForm.email.value;
    const birthdate = bookForm.birthdate.value;
    const previousConstestAmount = bookForm.quantity.value;
    const previousCities = cities(bookForm);
    const conditionsAgreement = bookForm.checkbox2.checked;

    return [firstName, lastName, email, birthdate, previousConstestAmount, previousCities,
        conditionsAgreement];
}

export default getFormContent;
