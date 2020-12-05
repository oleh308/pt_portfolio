import { createContext, useReducer } from 'react';

const init = {
  search: ''
}

const SearchContext = createContext({});

function SearchReducer(state, action) {
  switch (action.type) {
    case 'change':
      return { search: action.search };
    case 'reset':
      return { search: '' };
    default:
      throw new Error();
  }
}

export { SearchContext, SearchReducer, init };
