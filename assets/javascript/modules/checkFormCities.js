// check if formerCities is filled if formerContestAmount is greater than 0
function checkFormCities(cities, formerConstestAmount) {
    let citiesCheck = true;
    const citiesCheckArray = [];
    const formerContestAmountCheck = Number.parseInt(formerConstestAmount, 10);

    if (formerContestAmountCheck > 0) {
        for (let i = 0; i < cities.length; i += 1) {
            // push boolean values to the array corresponding to checked cities
            citiesCheckArray.push(cities[i].hasParticipated);
        }

        // if any of the cities is checked, evaluate to true
        citiesCheck = citiesCheckArray.reduce((a, b) => a || b);
    }

    return citiesCheck;
}

export default checkFormCities;
