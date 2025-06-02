import styles from './Details.module.css';
import Panel from '../panel/Panel';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { ACTIONS } from '../../providers/countriesDetails/constants.js';
import { getCountryDetails } from '../../data/services/countriesService.js';
import CountriesDetailsContext from '../../providers/countriesDetails/CountriesDetailsContext.js';
import Flag from '../flag/Flag.jsx';
import Pill from './Pill.jsx';
import Entry from './Entry.jsx';
import NeighbourPlaceholder from './neighbour/NeighbourPlaceholder.jsx';

function Details() {
  const { state, dispatch } = useContext(CountriesDetailsContext);
  const { id = '' } = useParams();
  const {
    flag,
    name,
    officialName,
    population,
    area,
    capital,
    subregion,
    languages,
    currencies,
    continents,
    neighbours,
  } = state.details[String(id).toLowerCase()] || {};

  useEffect(() => {
    getCountryDetails(id).then((details) => {
      dispatch({ type: ACTIONS.SET_COUNTRY_DETAILS, payload: details });
    });
  }, [id, dispatch]);

  return (
    <Panel className={styles.detailsPanel}>
      <article className={styles.details}>
        <header className={styles.header}>
          <Flag flag={flag} className={styles.flag} />
          <h1 className={styles.title}>{name}</h1>
          <h2 className={styles.subtitle}>{officialName}</h2>
          <div className={styles.pills}>
            {Object.entries({ population, area }).map(([key, value], i) => (
              <Pill key={i} label={key} value={value} />
            ))}
          </div>
        </header>
        <main>
          <div className={styles.entries}>
            {Object.entries({
              capital,
              subregion,
              languages,
              currencies,
              continents,
            }).map(([key, value], i) => (
              <Entry key={i} label={key} value={value} />
            ))}
          </div>
        </main>
        <footer>
          <h3 className={styles.title}>Neighbouring countries</h3>
          <div className={styles.neighbours}>
            {neighbours?.length
              ? neighbours.map((neighbourId) => (
                  <NeighbourPlaceholder key={neighbourId} id={neighbourId} />
                ))
              : ''}
          </div>
        </footer>
      </article>
    </Panel>
  );
}

export default Details;
