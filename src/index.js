import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './js/fetchCountries.js';
import countryInfoCardTpl from './templates/country-info-card.hbs';
import countriesListCardTpl from './templates/countries-list-card.hbs';



const DEBOUNCE_DELAY = 300;

const refs = {
    countryInfoCardContainer: document.querySelector('.country-info'),
    countryListCardContainer: document.querySelector('.country-list'),
    inputSearchBox: document.querySelector('#search-box'),
};


const renderCountries = data => {
    const markup = countriesListCardTpl(data);
    refs.countryListCardContainer.innerHTML = markup;
};

const renderCountryInfo = data => {
    const markup = countryInfoCardTpl(data);
    refs.countryInfoCardContainer.innerHTML = markup;
};


refs.inputSearchBox.addEventListener('input', debounce(inputChangeHandler, DEBOUNCE_DELAY));


function inputChangeHandler(event) {
    const inputData = (event.target.value).trim();  
    // console.log(inputData);
    if (inputData !== '') {
        
        fetchCountries(inputData)
        .then(data => {
            console.log(data);
            if (data.length > 10) {
                return Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
            } else if (data.length >= 2 && data.length <= 10) {
                return renderCountries(data);
            } else if (data.length = 1) {
                return renderCountryInfo(data);
            };         
         
        })
        .catch(error => {
            
            console.log(error);
            return Notiflix.Notify.failure("Oops, there is no country with that name");      

        });
       
    };
    
    refs.countryListCardContainer.innerHTML = '';
    refs.countryInfoCardContainer.innerHTML = '';

};


  
