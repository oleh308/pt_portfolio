import Link from 'next/link';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import s from './adminnav.module.scss';

const pages = [
  { title: 'Dashboard', url: '/dashboard/' },
  { title: 'Configuration', url: '/dashboard/configuration' },
  { title: 'Calendar', url: '/dashboard/calendar' },
  { title: 'Users', url: '/dashboard/users' },
  { title: 'Enquires', url: '/dashboard/enquires' },
  { title: 'Logout', url: '/api/admins/logout' }
]

const locales = [
  { title: 'EN', key: 'en' },
  { title: 'PL', key: 'pl' },
  { title: 'UA', key: 'uk' }
]

function getPages(selected) {
  return pages.map((page, i) => (
    <Link key={ i } href={ page.url } passHref>
      <button className={ i === selected ? s.selected :
        page.title === 'Logout' ? s.logout :
        ''
      }>
        { page.title }
      </button>
    </Link>
  ));
}

function getLocales(webLocale, pathname) {
  let localesLinks = [];

  let realIndex = 0;
  locales.forEach((locale, i) => {
    localesLinks.push(
      <Link key={realIndex} href={ pathname } passHref locale={ locale.key }>
        <button className={ webLocale === locale.key ? s.selected : '' }>
          { locale.title }
        </button>
      </Link>
    )
    realIndex++;

    if (i + 1 !== locales.length) {
      localesLinks.push(<span key={realIndex}>|</span>);
      realIndex++;
    }
  })

  return localesLinks;
}

function getNavName(selected) {
  if (pages[selected]) {
    return pages[selected].title;
  } else {
    return 'No page';
  }
}

function AdminNav({ selected }) {
  const router = useRouter();
  const { locale, pathname } = router;

  return (
    <div className={ s.nav }>
      <h2>{ getNavName(selected) }</h2>
      { getPages(selected) }
      <footer className={ s.languages }>
        { getLocales(locale, pathname) }
      </footer>
    </div>
  );
}

AdminNav.propTypes = {
  selected: PropTypes.number.isRequired
}

export default AdminNav;
