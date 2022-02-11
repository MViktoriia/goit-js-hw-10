import './css/styles.css';
import { fetchCountries } from './js/fetchCountries.js';
import countryCardTpl from './templates/country-card.hbs';

const DEBOUNCE_DELAY = 300;


fetchCountries('wi');
