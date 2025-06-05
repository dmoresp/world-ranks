import styles from './Search.module.css';
import TextInput from '../text-input/TextInput.jsx';
import searchIcon from '../../assets/icons/Search.svg';
import ResultsCount from '../results-count/ResultsCount.jsx';
import debounce from 'lodash/debounce';
import useSearchQuery from '../../providers/countriesSearch/useSearchQuery.jsx';

function Search({ formId }) {
  const { results, searchQuery } = useSearchQuery();
  const debouncedSetQuery = debounce((query) => searchQuery(query), 700);
  return (
    <fieldset className={styles.search}>
      <ResultsCount count={results.count} />
      <TextInput
        form={formId}
        icon={searchIcon}
        name="search"
        placeholder="Search by Name, Region, Subregion"
        onKeyUp={(e) => debouncedSetQuery(e.target.value)}
      />
    </fieldset>
  );
}

export default Search;
