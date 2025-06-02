import Hero from '../components/hero/Hero.jsx';
import Dashboard from '../components/dashboard/Dashboard.jsx';

import CountriesSearchProvider from '../providers/countriesSearch/CountriesSearchProvider.jsx';

const HomePage = () => {
  return (
    <>
      <Hero />
      <CountriesSearchProvider>
        <Dashboard />
      </CountriesSearchProvider>
    </>
  );
}

export default HomePage;
