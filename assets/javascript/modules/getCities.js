import { City } from '../utils/City.js';

function getCities(bookForm) {
    const cities = [];
    for (let i = 0; i < 6; i += 1) {
        cities.push(new City(bookForm.location[i].value, bookForm.location[i].checked));
    }

    return cities;
}

export default getCities;
