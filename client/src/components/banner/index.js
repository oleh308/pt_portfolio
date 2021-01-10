import React from 'react';
import Link from 'next/link';
import { useIntl } from 'react-intl';

import s from './banner.module.scss';

function Banner({ aboutme, contact, config }) {
  const { formatMessage } = useIntl();
  const t = id => formatMessage({ id });

  return (
    <div className={s.banner}>
      <div className={s.image}>
        <img src="/images/me2.png" alt="Picture of me" />
      </div>
      <div className={s.text}>
        <h1>VALERYY</h1>
        <h1>SAMOYLOV</h1>
        <h2>{t('personaltrainer')}</h2>
        <p>{ config && config.value ? config.value : '' }</p>
        <div className={s.buttons}>
          <button onClick={aboutme}>{ t('readmore') }</button>
          <button onClick={contact}>{ t('getintouch') }</button>
        </div>
      </div>
    </div>
  )
}

export default Banner;
