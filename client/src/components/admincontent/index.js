import { useContext } from 'react';
import AdminNav from '../adminnav';
import PropTypes from 'prop-types';
import AdminSearch from '../adminsearch';

import s from './admincontent.module.scss';

function AdminContent({ selected, children }) {
  return (
    <div className={s.layout}>
      <AdminNav selected={selected} />
      <div className={s.rightSide}>
        <AdminSearch />
        <main className={s.content}>
          {children}
        </main>
      </div>
    </div>
  )
}

AdminContent.propTypes = {
  selected: PropTypes.number.isRequired,
  children: PropTypes.element
}

export default AdminContent;
