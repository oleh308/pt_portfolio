import Link from 'next/link';
import { useIntl } from 'react-intl';
import LogoFacebook from 'react-ionicons/lib/LogoFacebook';
import LogoInstagram from 'react-ionicons/lib/LogoInstagram';

import s from './footer.module.scss';

function Footer() {
  const { formatMessage } = useIntl();
  const t = id => formatMessage({ id });

  return (
    <footer className={s.footer}>
      <div className={s.middle}>
        <Link passHref href="/">
          <button>{ t('home') }</button>
        </Link>
        <Link passHref href="/programmes">
          <button>{ t('programmes') }</button>
        </Link>
        <Link passHref href="/clients">
          <button>{ t('clients') }</button>
        </Link>
        <Link passHref href="/consultation">
          <button>{ t('consultation') }</button>
        </Link>
      </div>
      <div className={s.left}>
        <Link passHref href="/?section=aboutme">
          <button>{ t('aboutme') }</button>
        </Link>
        <Link passHref href="/programmes?section=looseweight">
          <button>{ t('looseweight') }</button>
        </Link>
        <Link passHref href="/programmes?section=gainmuscles">
          <button>{ t('gainmuscles') }</button>
        </Link>
        <Link passHref href="/programmes?section=changelifestyle">
          <button>{ t('changelifestyle') }</button>
        </Link>
        <Link passHref href="/contact">
          <button>{ t('contactme') }</button>
        </Link>
      </div>
      <div className={s.right}>
        <h4>{ t('followme') }</h4>
        <div className={s.social}>
          <LogoFacebook fontSize="24px" />
          <LogoInstagram fontSize="24px" />
        </div>
      </div>
      <div className={s.copyright}>
        <p>
          Copyright (c) 2020 Valeriy Samoylov. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer;
