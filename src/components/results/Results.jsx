import styles from './Results.module.css';

import { RECORD_FIELDS as COLUMNS } from '../../data/services/constants.js';
import ResultsActions from './Actions.jsx';
import ResultsColumns from './Columns.jsx';
import Records from './Records.jsx';

const columns = [
  COLUMNS.flags,
  COLUMNS.name,
  COLUMNS.population,
  COLUMNS.area,
  COLUMNS.region,
];

function Results() {
  return (
    <>
      <div className={styles.results}>
        <table>
          <ResultsColumns columns={columns} />
          <Records columns={columns} />
        </table>
      </div>
      <ResultsActions />
    </>
  );
}

export default Results;
