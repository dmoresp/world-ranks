import styles from './NeighbourPlaceholder.module.css';
import { Suspense, useContext } from 'react';
import { getCountryNeighbour } from '../../../data/services/countriesService.js';
import Neighbour from './Neighbour.jsx';
import { ACTIONS } from '../../../providers/countriesDetails/constants.js';
import CountriesDetailsContext from '../../../providers/countriesDetails/CountriesDetailsContext.js';

function NeighbourPlaceholder({ id }) {
  const { state, dispatch } = useContext(CountriesDetailsContext);
  let neighbour;
  if (state.neighbours[id] === undefined) {
    neighbour = getCountryNeighbour(id).then((neighbour) => {
      dispatch({
        type: ACTIONS.SET_COUNTRY_NEIGHBOUR,
        payload: neighbour,
      });
    });
  } else {
    neighbour = state.neighbours[id];
  }

  return (
    <Suspense
      fallback={
        <div className={styles.neighbour}>
          <div className={styles.flag}></div>
          <div className={styles.name}></div>
        </div>
      }
    >
      <Neighbour neighbour={neighbour} link={`/countries/${id}`} />
    </Suspense>
  );
}

export default NeighbourPlaceholder;
