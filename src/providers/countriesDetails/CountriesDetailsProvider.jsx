import { useReducer } from 'react';
import { ACTIONS, INITIAL_STATE } from './constants.js';
import CountriesDetailsContext from './CountriesDetailsContext.js';

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_COUNTRY_DETAILS:
      return {
        ...state,
        details: {
          ...state.details,
          [action.payload.id]: action.payload,
        },
      };
    case ACTIONS.SET_COUNTRY_NEIGHBOUR:
      return {
        ...state,
        neighbours: {
          ...state.neighbours,
          [action.payload.id]: action.payload,
        },
      };
    default:
      return state;
  }
};

function CountriesDetailsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <CountriesDetailsContext.Provider value={{ state, dispatch }}>
      {children}
    </CountriesDetailsContext.Provider>
  );
}

export default CountriesDetailsProvider;
