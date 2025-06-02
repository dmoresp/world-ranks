import { ACTIONS } from './constants.js';
import CountriesSearchContext from './CountriesSearchContext.js';
import { useContext } from 'react';

const usePagination = () => {
  const { state, dispatch } = useContext(CountriesSearchContext);

  const incrementPage = () => {
    dispatch({
      type: ACTIONS.SET_PAGINATION,
      payload: {
        page: state.pagination.page + 1,
      },
    });
  };

  const decrementPage = () => {
    dispatch({
      type: ACTIONS.SET_PAGINATION,
      payload: {
        page: state.pagination.page - 1,
      },
    });
  };

  return { pagination: state.pagination, incrementPage, decrementPage };
};

export default usePagination;
