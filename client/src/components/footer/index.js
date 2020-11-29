import Link from 'next/link';
import LogoFacebook from 'react-ionicons/lib/LogoFacebook';
import LogoInstagram from 'react-ionicons/lib/LogoInstagram';

import s from './footer.module.scss';

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.middle}>
        <Link passHref href="/">
          <button>Home</button>
        </Link>
        <Link passHref href="/programmes">
          <button>Programmes</button>
        </Link>
        <Link passHref href="/clients">
          <button>Clients</button>
        </Link>
        <Link passHref href="/consultation">
          <button>Consulation</button>
        </Link>
      </div>
      <div className={s.left}>
        <Link passHref href="/?section=aboutme">
          <button>About me</button>
        </Link>
        <Link passHref href="/programmes?section=looseweight">
          <button>Loose Weight</button>
        </Link>
        <Link passHref href="/programmes?section=gainmuscles">
          <button>Gain Muscles</button>
        </Link>
        <Link passHref href="/programmes?section=changelifestyle">
          <button>Change Lifestyle</button>
        </Link>
        <Link passHref href="/contact">
          <button>Contact Me</button>
        </Link>
      </div>
      <div className={s.right}>
        <h4>Follow me</h4>
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
