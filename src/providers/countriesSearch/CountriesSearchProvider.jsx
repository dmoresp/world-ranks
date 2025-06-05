import { useReducer } from 'react';
import { ACTIONS, INITIAL_STATE } from './constants.js';
import CountriesSearchContext from './CountriesSearchContext.js';

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_RESULTS:
      return {
        ...state,
        results: {
          ...state.results,
          ...action.payload,
        },
        pagination: {
          page: 0,
          pages: action.payload.current.length,
        },
      };
    case ACTIONS.SET_CURRENT_RESULTS:
      return {
        ...state,
        results: {
          ...state.results,
          current: action.payload,
        },
        pagination: {
          page: 0,
          pages: action.payload.length,
        },
      };
    case ACTIONS.SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    case ACTIONS.SET_FILTER_SORT:
      return {
        ...state,
        filters: {
          ...state.filters,
          sort: action.payload,
        },
      };
    case ACTIONS.SET_FILTER_REGION:
      return {
        ...state,
        filters: {
          ...state.filters,
          region: action.payload,
        },
      };
    case ACTIONS.SET_FILTER_STATUS:
      return {
        ...state,
        filters: {
          ...state.filters,
          status: action.payload,
        },
      };
    case ACTIONS.SET_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    case ACTIONS.SET_PAGINATION:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

function CountriesSearchProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <CountriesSearchContext.Provider value={{ state, dispatch }}>
      {children}
    </CountriesSearchContext.Provider>
  );
}

export default CountriesSearchProvider;
