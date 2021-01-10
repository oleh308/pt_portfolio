import { useState, useEffect, useContext } from 'react';
import Link from 'next/link'
import { useIntl } from 'react-intl';
import IosMenu from 'react-ionicons/lib/IosMenu';
import { ViewportContext } from '../../contexts/viewport';
import IosArrowRoundForward from 'react-ionicons/lib/IosArrowRoundForward';

import s from './webnav.module.scss';

function Webnav({ type }) {
  const { formatMessage } = useIntl();
  const t = id => formatMessage({ id });
  const { width } = useContext(ViewportContext);

  const [scroll, setScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll() {
    const position = window.pageYOffset;
    setScroll(position);
  }

  function getRightSide() {
    if (width > 900) {
      return (
        <div className={s.rightside}>
          <Link passHref href="/">
            <button>{ t('home') }</button>
          </Link>
          <Link passHref href="/programmes">
            <button>{ t('programmes') }</button>
          </Link>
          <Link passHref href="/clients">
            <button>{ t('clients') }</button>
          </Link>
          <Link passHref href="/faq">
            <button>{ t('faq') }</button>
          </Link>
          <button className={s.bookButton}>{ t('consultation') }</button>
        </div>
      );
    } else {
      return (
        <div className={s.smallRightside}>
          <IosMenu fontSize="24px" className={s.menuIcon} onClick={() => setMenuOpen(true)}/>
          {menuOpen && <div className={s.mobileMenu}>
            <IosArrowRoundForward fontSize="36px" onClick={() => setMenuOpen(false)}/>
            <Link passHref href="/">
              <button>Home</button>
            </Link>
            <button>Programmes</button>
            <button>Clients</button>
            <Link passHref href="/">
              <button>FAQ</button>
            </Link>
            <button className={s.bookButton}>Consultation</button>
          </div>}
        </div>
      );
    }
  }

  function getScroll() {
    if (type === 'other') {
      return 280;
    } else {
      return 630;
    }
  }

  return (
    <header className={`${s.webnav} ${scroll > getScroll() ? s.black : ""}`}>
      <div className={s.leftside}>
        <img src="/images/logo.png" alt="Valeerian Steel logo" />
      </div>
      {getRightSide()}
    </header>
  )
}

export default Webnav;
