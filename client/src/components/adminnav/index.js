
import Link from 'next/link';
import PropTypes from 'prop-types';
import s from './adminnav.module.scss';

const pages = [
  { title: 'Dashboard', url: '/dashboard/' },
  { title: 'Pages', url: '/dashboard/pages' },
  { title: 'Calendar', url: '/dashboard/calendar' },
  { title: 'Users', url: '/dashboard/users' }
]

function getPages(selected) {
  return pages.map((page, i) => (
    <Link key={i} href={page.url} passHref>
      <button className={i === selected ? s.selected : ''}>{page.title}</button>
    </Link>
  ));
}

function getNavName(selected) {
  if (pages[selected]) {
    return pages[selected].title;
  } else {
    return 'No page';
  }
}

function AdminNav({ selected }) {

  return (
    <div className={s.nav}>
      <h2>{getNavName(selected)}</h2>
      {getPages(selected)}
      <button className={s.logout}>Logout</button>
    </div>
  );
}

AdminNav.propTypes = {
  selected: PropTypes.number.isRequired
}

export default AdminNav;
