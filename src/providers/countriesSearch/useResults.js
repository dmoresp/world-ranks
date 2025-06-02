import { useContext } from 'react';
import CountriesSearchContext from './CountriesSearchContext.js';

const useResults = () => {
  const { state } = useContext(CountriesSearchContext);

  return { results: state.results };
};

export default useResults;
