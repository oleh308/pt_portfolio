import React from 'react';

import s from './section.module.scss';

function Section({ title, passRef, children }) {
  return (
    <section className={s.section} ref={passRef}>
      <header>
        <div className={s.titleBack}>
          <h2>{title.toUpperCase()}</h2>
        </div>
      </header>
      <main>
        {children}
      </main>
    </section>
  )
}

export default Section;
