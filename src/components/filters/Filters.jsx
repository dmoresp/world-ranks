import styles from './Filters.module.css';
import Field from '../field/Field.jsx';
import Select from '../select/Select.jsx';
import CheckList from '../checklist/ChecklList.jsx';
import { CHECKLIST_TYPES } from '../checklist/constants.js';
import { capitalize } from '../../directives/textDirectives.js';
import {
  FILTER_VALUES,
  SORT_VALUES,
  FILTER_TYPES,
} from '../../providers/countriesSearch/constants.js';
import i18next from 'i18next';
import useFilters from '../../providers/countriesSearch/useFilters.js';

const generateOptions = (data) => {
  return Object.values(data).map((value = '') => ({
    value,
    label: i18next.exists(value) ? i18next.t(value) : capitalize(value),
  }));
};

function Filters() {
  const { filters, setFilter, toggleFilterOption } = useFilters();
  return (
    <div className={styles.filters}>
      <Field id="sort-by" label="Sort by">
        <Select
          id="sort-by"
          options={generateOptions(SORT_VALUES)}
          onChange={(e) =>
            setFilter({ filter: FILTER_TYPES.SORT, value: e.target.value })
          }
          selected={filters.sort}
        />
      </Field>
      <Field id="region" legend="Region">
        <CheckList
          options={generateOptions(FILTER_VALUES.REGION)}
          type={CHECKLIST_TYPES.BUTTON}
          onChange={(e) =>
            toggleFilterOption({
              checked: e.target.checked,
              id: e.target.id,
              filter: FILTER_TYPES.REGION,
            })
          }
          checkedValues={filters.region}
        />
      </Field>
      <Field id="status" legend="Status">
        <CheckList
          options={generateOptions(FILTER_VALUES.STATUS)}
          onChange={(e) =>
            toggleFilterOption({
              checked: e.target.checked,
              id: e.target.id,
              filter: FILTER_TYPES.STATUS,
            })
          }
          checkedValues={filters.status}
        />
      </Field>
    </div>
  );
}

export default Filters;
