import styles from './Results.module.css';
import { RECORD_FIELDS as COLUMNS } from '../../data/services/constants.js';
import { formatNumber } from '../../directives/textDirectives.js';
import { Link } from 'react-router';
import { Suspense } from 'react';
import Flag from '../flag/Flag.jsx';
import usePagination from '../../providers/countriesSearch/usePagination.jsx';
import useResults from '../../providers/countriesSearch/useResults.js';

const Content = (column, record) => {
  if (column === COLUMNS.flags) {
    return (
      <Link to={`/countries/${record.id}`}>
        <Flag flag={record.flag} className={styles.flag} />
      </Link>
    );
  }
  if (typeof record[column] === 'number') {
    return formatNumber(record[column]);
  }
  return record[column];
};

const ContentPlaceholder = ({ columns, pageSize }) => {
  Array.from({ length: pageSize }, (_, i) => (
    <tr key={i}>
      {columns.map((column) => {
        if (column === 'flags') {
          return (
            <td key={column}>
              <div className={styles.cellFlagPlaceholder}></div>
            </td>
          );
        }

        return (
          <td key={column}>
            <div className={styles.cellPlaceholder}></div>
          </td>
        );
      })}
    </tr>
  ));
};

function Records({ columns }) {
  const { results } = useResults();
  const { pagination } = usePagination();
  const records = results.current[pagination.page] || [];

  return (
    <tbody>
      <Suspense
        fallback={
          <ContentPlaceholder
            columns={columns}
            pageSize={pagination.pageSize}
          />
        }
      >
        {records.length ? (
          records.map((record) => (
            <tr key={record.id}>
              {columns.map((column) => (
                <td key={column}>{Content(column, record)}</td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={columns.length}>No results found</td>
          </tr>
        )}
      </Suspense>
    </tbody>
  );
}

export default Records;
