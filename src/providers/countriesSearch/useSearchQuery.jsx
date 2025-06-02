import { useContext, useEffect } from 'react';
import CountriesSearchContext from './CountriesSearchContext.js';
import { ACTIONS } from './constants.js';
import { getCountryRecord } from '../../data/services/countriesService.js';
import { paginateRecords, applyFilters } from './utils.js';

const useSearchQuery = () => {
  const { state, dispatch } = useContext(CountriesSearchContext);

  const searchQuery = (query) => {
    if (query) {
      getCountryRecord(query).then((res) => {
        dispatch({
          type: ACTIONS.SET_RESULTS,
          payload: {
            all: res,
            current: paginateRecords(applyFilters(res, state.filters)),
          },
        });
      });
    }
  };

  useEffect(() => {
    searchQuery(state.query, state.results);
  }, [state.query, searchQuery]);

  return {
    results: {
      ...state.results,
      count: state.results.current.reduce((acc, curr) => {
        if (Array.isArray(curr)) {
          return acc + curr.length
        }
        return acc + curr;
      }, 0)
    },
    searchQuery
  };
};

export default useSearchQuery;
