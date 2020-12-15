import React from 'react';
import Link from 'next/link';

import s from './banner.module.scss';

function Banner({ aboutme, contact, config }) {
  return (
    <div className={s.banner}>
      <div className={s.image}>
        <img src="/images/me2.png" alt="Picture of me" />
      </div>
      <div className={s.text}>
        <h1>VALERYY</h1>
        <h1>SAMOYLOV</h1>
        <h2>Personal Trainer</h2>
        <p>{ config && config.value ? config.value : '' }</p>
        <div className={s.buttons}>
          <button onClick={aboutme}>Read more</button>
          <button onClick={contact}>Get in touch</button>
        </div>
      </div>
    </div>
  )
}

export default Banner;
