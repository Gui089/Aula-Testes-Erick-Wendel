const {get} = require('axios');

const URL = `https://swapi.dev/api/people/?search=`;

async function getPersons(name) {
    const url = `${URL}${name}`
    const response = await get(url);
    console.log(response.data);
    return response.data.results.map(mapPersons);
}

const mapPersons = (item) => {
    return {
        name: item.name,
        peso: item.height
    }
}

module.exports = {
    getPersons
}