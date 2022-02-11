import countryCardTpl from '../templates/country-card.hbs';

const BASE_URL = "https://restcountries.com"

const refs = {
    cardContainer: document.querySelector('.country-info'),
}

export function fetchCountries(name) {
    return fetch(`${BASE_URL}/v3.1/name/${name}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            console.log(response);
            return response.json();
        })
        .then(data => {
            // Data handling
            console.log(data);
            const markup = countryCardTpl(data);
            console.log(markup);
            refs.cardContainer.innerHTML = markup;

        
        })
        .catch(error => {
            // Error handling
            console.log(error);
        });
}


