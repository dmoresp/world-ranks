import { useContext, useEffect } from 'react';
import CountriesSearchContext from './CountriesSearchContext.js';
import { ACTIONS } from './constants.js';
import { applyFilters, paginateRecords } from './utils.js';

const action = (filter) => {
  return ACTIONS[`SET_FILTER_${String(filter).toUpperCase()}`];
};

const useFilters = () => {
  const { state, dispatch } = useContext(CountriesSearchContext);

  const setFilter = ({ filter, value }) => {
    dispatch({ type: action(filter), payload: value });
  };

  const toggleFilterOption = ({ filter, id, checked }) => {
    let payload;
    if (checked) {
      payload = [...state.filters[filter], id];
    } else {
      payload = state.filters[filter].filter((value) => value !== id);
    }
    dispatch({ type: action(filter), payload });
  };

  useEffect(() => {
    dispatch({
      type: ACTIONS.SET_CURRENT_RESULTS,
      payload: paginateRecords(applyFilters(state.results.all, state.filters)),
    });
  }, [state.filters]);

  return { filters: state.filters, setFilter, toggleFilterOption };
};

export default useFilters;
