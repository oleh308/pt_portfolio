import React from 'react';
import Link from 'next/link';

import s from './banner.module.scss';

function Banner({ aboutme, contact }) {
  return (
    <div className={s.banner}>
      <div className={s.image}>
        <img src="/images/me2.png" alt="Picture of me" />
      </div>
      <div className={s.text}>
        <h1>VALERYY</h1>
        <h1>SAMOYLOV</h1>
        <h2>Personal Trainer</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <div className={s.buttons}>
          <button onClick={aboutme}>Read more</button>
          <button onClick={contact}>Get in touch</button>
        </div>
      </div>
    </div>
  )
}

export default Banner;
