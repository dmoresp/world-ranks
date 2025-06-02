import { SORT_VALUES } from './constants.js';

const applyFilters = (results, filters) => {
  if (!results.length) {
    return results;
  }
  return results
    .reduce((acc, r) => {
      if (
        (filters.region.length
          ? filters.region.includes(String(r.region).toLowerCase())
          : true) &&
        (filters.status.length ? filters.status.every((s) => r[s]) : true)
      ) {
        acc.push(r);
      }
      return acc;
    }, [])
    .toSorted((a, b) => {
      switch (filters.sort) {
        case SORT_VALUES.POPULATION:
          return b.population - a.population;
        case SORT_VALUES.AREA:
          return b.area - a.area;
        case SORT_VALUES.REGION:
          return a.region.localeCompare(b.region);
        case SORT_VALUES.NAME:
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
};

const paginateRecords = (records = [], pageSize = 10) => {
  return records.reduce((acc, record, index) => {
    const page = Math.floor(index / pageSize);
    if (!acc[page]) {
      acc[page] = [];
    }
    acc[page].push(record);
    return acc;
  }, []);
};

export { applyFilters, paginateRecords };
