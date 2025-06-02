import { ACTIONS } from './constants.js';
import { getAllCountryRecords } from '../../data/services/countriesService.js';
import { useContext, useEffect } from 'react';
import CountriesSearchContext from './CountriesSearchContext.js';
import { applyFilters, paginateRecords } from './utils.js';

const useSearchAll = () => {
  const { state, dispatch } = useContext(CountriesSearchContext);

  const searchAll = (status, results) => {
    if (!results.length) {
      getAllCountryRecords().then((res) => {
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
    searchAll(state.status, state.results.all);
  }, [state.status, state.results.all, searchAll]);
};

export default useSearchAll;
