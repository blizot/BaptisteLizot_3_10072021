import { City } from '../utils/city.js';

// fetch the city inputs, own function because there are various inputs for one field
function getFormCities(bookForm) {
    const cities = [];
    for (let i = 0; i < 9; i += 1) {
        // create an array containing objects indicating if a specific city has been checked
        cities.push(new City(bookForm.location[i].value, bookForm.location[i].checked));
    }

    return cities;
}

export default getFormCities;
