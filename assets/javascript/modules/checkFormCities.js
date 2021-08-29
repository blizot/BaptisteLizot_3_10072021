function checkFormCities(cities, previousConstestAmount) {
    let citiesCheck = true;
    const citiesCheckArray = [];

    if (Number.isInteger(previousConstestAmount) && previousConstestAmount > 0) {
        for (let i = 0; i < cities.length; i += 1) {
            citiesCheckArray.push(cities[i].hasParticipated);
        }

        citiesCheck = citiesCheckArray.reduce((a, b) => a || b);
    }

    return citiesCheck;
}

export default checkFormCities;
