import CountryRecord from '../CountryRecord.js';
import {
  BASE_URL,
  DETAIL_FIELDS,
  NEIGHBOUR_FIELDS,
  RECORD_FIELDS,
} from './constants.js';
import CountryDetail from '../CountryDetail.js';
import CountryNeighbour from '../CountryNeighbour.js';

const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    if (!args.length) {
      if (!cache.result) {
        cache.result = fn();
      }
      return cache.result;
    } else {
      const strargs = JSON.stringify(args);
      if (!cache[strargs]) {
        cache[strargs] = fn(...args);
      }
      return cache[strargs];
    }
  };
};

const request = async (path, params) => {
  const url = new URL(`${BASE_URL}/${path}`);
  url.search = new URLSearchParams(params).toString();
  const res = await fetch(url);
  try {
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data)) {
        return { data };
      } else {
        return data;
      }
    } else {
      // throw Error(`[${res.status}]${res.statusText}`);
    }
  } catch (err) {
    console.error(err);
  }
};

const processCountryRecords = (countries) => {
  return countries.map((country) =>
    CountryRecord({
      name: country.name.common,
      flag: { src: country.flags.svg, alt: country.flags.alt },
      population: country.population,
      area: country.area,
      region: country.region,
      id: String(country.cca3).toLowerCase(),
      unMember: country.unMember,
      independent: country.independent,
    }),
  );
};

const processCountryDetails = (country) => {
  return CountryDetail({
    name: country.name.common,
    officialName: country.name.official,
    flag: { src: country.flags.svg, alt: country.flags.alt },
    capital: country.capital[0],
    continents: country.continents,
    languages: country.languages,
    currencies: country.currencies,
    population: country.population,
    area: country.area,
    subregion: country.subregion,
    id: String(country.cca3).toLowerCase(),
    neighbours: country.borders.map((border) => String(border).toLowerCase()),
  });
};

const processCountryNeighbour = (country) => {
  return CountryNeighbour({
    name: country.name.common,
    flag: { src: country.flags.png, alt: country.flags.alt },
    id: String(country.cca3).toLowerCase(),
  });
};

const getAll = (fields, process) =>
  memoize(async () => {
    const { data } = await request('all', {
      fields: Object.values(fields).join(','),
    });
    return process(data);
  });
const getByName = (fields, process) =>
  memoize(async (name) => {
    const { data } = await request(`name/${name}`, {
      fields: Object.values(fields).join(','),
    });
    return process(data);
  });
const getByCode = (fields, process) =>
  memoize(async (id) => {
    const data = await request(`alpha/${id}`, {
      fields: Object.values(fields).join(','),
    });
    return process(data);
  });
const getAllCountryRecords = getAll(RECORD_FIELDS, processCountryRecords);
const getCountryRecord = getByName(RECORD_FIELDS, processCountryRecords);
const getCountryDetails = getByCode(DETAIL_FIELDS, processCountryDetails);
const getCountryNeighbour = getByCode(
  NEIGHBOUR_FIELDS,
  processCountryNeighbour,
);

export {
  getAllCountryRecords,
  getCountryRecord,
  getCountryDetails,
  getCountryNeighbour,
};
