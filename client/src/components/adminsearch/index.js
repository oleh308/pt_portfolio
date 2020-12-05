import { useContext } from 'react';
import { SearchContext } from '../../contexts/search';

import s from './adminsearch.module.scss';

function AdminSearch() {
  const { state: { search }, dispatch } = useContext(SearchContext);

  function onChange(e) {
    dispatch({ type: 'change', search: e.target.value });
  }

  return (
    <header className={s.search}>
      <input
        value={search}
        type={'text'}
        placeholder="Search"
        onChange={onChange}
      />
    </header>
  )
}

export default AdminSearch;
