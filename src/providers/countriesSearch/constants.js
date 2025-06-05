const ACTIONS = {
  SET_QUERY: 'SET_QUERY',
  SET_FILTER_SORT: 'SET_FILTER_SORT',
  SET_FILTER_REGION: 'SET_FILTER_REGION',
  SET_FILTER_STATUS: 'SET_FILTER_STATUS',
  SET_RESULTS: 'SET_RESULTS',
  SET_CURRENT_RESULTS: 'SET_CURRENT_RESULTS',
  SET_STATUS: 'SET_STATUS',
  SET_PAGINATION: 'SET_PAGINATION',
};

const STATUS = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  NO_RESULTS: 'NO_RESULTS',
  OK: 'OK',
  ERROR: 'ERROR',
};

const FILTER_TYPES = {
  REGION: 'region',
  STATUS: 'status',
  SORT: 'sort',
};

const FILTER_VALUES = {
  ALL: [],
  REGION: {
    AFRICA: 'africa',
    AMERICAS: 'americas',
    ASIA: 'asia',
    EUROPE: 'europe',
    OCEANIA: 'oceania',
  },
  STATUS: {
    UN_MEMBER: 'unMember',
    INDEPENDENT: 'independent',
  },
};

const SORT_VALUES = {
  POPULATION: 'population',
  NAME: 'name',
  AREA: 'area',
  REGION: 'region',
};

const INITIAL_STATE = {
  query: '',
  filters: {
    sort: SORT_VALUES.POPULATION,
    region: FILTER_VALUES.ALL,
    status: FILTER_VALUES.ALL,
  },
  results: {
    all: [],
    current: [],
    count: 0,
  },
  pagination: {
    page: 0,
    pages: 0,
    pageSize: 10,
  },
  status: STATUS.IDLE,
};

export {
  INITIAL_STATE,
  ACTIONS,
  STATUS,
  SORT_VALUES,
  FILTER_VALUES,
  FILTER_TYPES,
};
