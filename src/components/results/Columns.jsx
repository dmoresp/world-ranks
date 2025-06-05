import { RECORD_FIELDS as COLUMNS } from '../../data/services/constants.js';
import { capitalize } from '../../directives/textDirectives.js';
import i18next from 'i18next';

const getColumnContent = (column) => {
  if (column === COLUMNS.flags || column === COLUMNS.area) {
    return capitalize(i18next.t(column));
  }
  return capitalize(column);
};

function Columns({ columns }) {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column}>{getColumnContent(column)}</th>
        ))}
      </tr>
    </thead>
  );
}

export default Columns;
