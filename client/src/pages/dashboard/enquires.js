import { useReducer, useState, useEffect } from 'react';
import AdminContent from '../../components/admincontent';
import { SearchContext, SearchReducer, init } from '../../contexts/search';

function Enquires() {
  const [state, dispatch] = useReducer(SearchReducer, init);

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      <AdminContent selected={4}>
      </AdminContent>
    </SearchContext.Provider>
  )
}

export default Enquires;
