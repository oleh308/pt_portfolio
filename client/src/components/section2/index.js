import React from 'react';

import s from './section.module.scss';

function Section2({ type, children }) {

  function getStyles() {
    if (type === 'programmes') {
      return `${s.section} ${s.sectionType1}`;
    }
  }

  return (
    <section className={getStyles()}>
      <main>
        {children}
      </main>
    </section>
  )
}

export default Section2;
