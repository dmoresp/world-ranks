const domain = 'https://restcountries.com';
const version = 'v3.1';
const BASE_URL = `${domain}/${version}`;

const RECORD_FIELDS = {
  flags: 'flags',
  name: 'name',
  population: 'population',
  area: 'area',
  region: 'region',
  status: 'status',
  cca3: 'cca3',
  unMember: 'unMember',
  independent: 'independent',
};

const DETAIL_FIELDS = {
  flags: 'flags',
  name: 'name',
  population: 'population',
  area: 'area',
  capital: 'capital',
  cca3: 'cca3',
  subregion: 'subregion',
  languages: 'languages',
  currencies: 'currencies',
  continents: 'continents',
  borders: 'borders',
};

const NEIGHBOUR_FIELDS = {
  flags: 'flags',
  cca3: 'cca3',
  name: 'name',
};

export { BASE_URL, RECORD_FIELDS, DETAIL_FIELDS, NEIGHBOUR_FIELDS };
