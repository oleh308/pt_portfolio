import { useReducer, useState } from 'react';
import AdminNav from '../../components/adminnav';
import CreateBlock from '../../components/createblock';
import { SearchContext, SearchReducer, init } from '../../contexts/search';
import AdminContent from '../../components/admincontent';

import s from '../../styles/pages/dashboard/pages.module.scss';

function Pages() {
  const [content, setContent] = useState('pages');
  const [openCreate, setOpenCreate] = useState(false);
  const [state, dispatch] = useReducer(SearchReducer, init);
  const { search } = state;

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      <AdminContent selected={1}>
        <div className={s.pages}>
          <div className={s.switch}>
            <button
              onClick={() => setContent('pages')}
              className={content === 'pages' ? s.selected : ''}
            >
              <h3>Pages</h3>
            </button>
            <button
              onClick={() => setContent('blocks')}
              className={content === 'blocks' ? s.selected : ''}
            >
              <h3>Blocks</h3>
            </button>
          </div>
          {!openCreate && <button className={s.createBlock} onClick={() => setOpenCreate(true)}>
            <h4>Create Block</h4>
          </button>}
          {openCreate && <CreateBlock close={() => setOpenCreate(false)} />}
        </div>
      </AdminContent>
    </SearchContext.Provider>
  )
}

export default Pages;
