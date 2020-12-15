import { useReducer, useState, useEffect } from 'react';
import AdminContent from '../../components/admincontent';
import { SearchContext, SearchReducer, init } from '../../contexts/search';

function Calendar() {
  const [state, dispatch] = useReducer(SearchReducer, init);

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      <AdminContent selected={2}>
      </AdminContent>
    </SearchContext.Provider>
  )
}

export default Calendar;
