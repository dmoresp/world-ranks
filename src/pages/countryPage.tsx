import Details from '../components/details/Details.jsx';
import CountriesDetailsProvider from '../providers/countriesDetails/CountriesDetailsProvider.jsx';
import Hero from '../components/hero/Hero.jsx';

function CountryPage() {
  return (
    <>
      <Hero />
      <CountriesDetailsProvider>
        <Details />
      </CountriesDetailsProvider>
    </>
  );
}

export default CountryPage;
