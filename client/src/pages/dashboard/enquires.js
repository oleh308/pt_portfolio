import AdminContent from '../../components/admincontent';
import { SearchContext, SearchReducer, init } from '../../contexts/search';

function Enquires() {
  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      <AdminContent selected={1}>
      </AdminContent>
    </SearchContext.Provider>
  )
}

export default Enquires;
