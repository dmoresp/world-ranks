import { createContext } from 'react';
import { INITIAL_STATE } from './constants.js';

const CountriesSearchContext= createContext(INITIAL_STATE);

export default CountriesSearchContext;

