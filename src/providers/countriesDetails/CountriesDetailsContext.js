import { createContext } from 'react';
import { INITIAL_STATE } from './constants.js';

const CountriesDetailsContext = createContext(INITIAL_STATE);

export default CountriesDetailsContext;
