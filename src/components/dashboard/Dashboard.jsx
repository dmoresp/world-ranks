import styles from './Dashboard.module.css';
import Panel from '../panel/Panel.jsx';
import Form from '../form/Form.jsx';
import Search from '../search/Search.jsx';
import Filters from '../filters/Filters.jsx';
import Results from '../results/Results.jsx';
import useSearchAll from '../../providers/countriesSearch/useSearchAll.jsx';
import useSearchQuery from '../../providers/countriesSearch/useSearchQuery.jsx';

function Dashboard() {
  const { searchQuery } = useSearchQuery();
  useSearchAll();

  // TODO: Implement form submit
  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log('FORM_DATA', data);
    searchQuery();
  };

  return (
    <Panel>
      <main className={styles.dashboard}>
        <section className={styles.searchBarArea}>
          <Search formId="search-form" />
        </section>
        <section className={styles.filtersArea}>
          <Form id="search-form" action={onSubmit}>
            <Filters />
          </Form>
        </section>
        <section className={styles.resultsArea}>
          <Results />
        </section>
      </main>
    </Panel>
  );
}

export default Dashboard;
