import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Webnav from '../components/webnav';
import Footer from '../components/footer';
import Section from '../components/section';
import PageHeader from '../components/pageheader';

import s from '../styles/pages/programmes.module.scss';
import { loremShort, loremSentence, loremSentence2 } from '../data/lorem';

function Programmes() {
  const router = useRouter();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (router?.query?.section) {
      const section = router.query.section;
      if (section === 'looseweight') setSelected(0);
      else if (section === 'gainmuscles') setSelected(1);
      else if (section === 'changelifestyle') setSelected(2);
    }
  }, [router]);

  return (
    <div className={s.container}>
      <Webnav type="other" />
      <PageHeader title={"PROGRAMMES"} />
      <main className={s.content}>
        <div className={s.switch}>
          <button className={selected === 0 ? s.selected : ''} onClick={() => setSelected(0)}>
            <h2>Loose Weight</h2>
          </button>
          <button className={selected === 1 ? s.selected : ''} onClick={() => setSelected(1)}>
            <h2>Gain Muscles</h2>
          </button>
          <button className={selected === 2 ? s.selected : ''} onClick={() => setSelected(2)}>
            <h2>Change lifestyle</h2>
          </button>
        </div>
        <p>{loremShort + ' ' + loremShort}</p>
        <p>{loremShort}</p>
        <div className={s.roadMap}>
          <div className={s.lifeSection}>
            <div className={s.road}>
              <div className={s.line}>
                <div className={s.dot} />
                <h4 className={s.number}>1</h4>
              </div>
            </div>
            <div className={s.pivotStory}>
              <h4>Changing Diet</h4>
              <p>{loremShort}</p>
            </div>
          </div>
          <div className={s.lifeSection}>
            <div className={s.road}>
              <div className={s.line}>
                <div className={s.dot} />
                <h4 className={s.number}>2</h4>
              </div>
            </div>
            <div className={s.pivotStory}>
              <h4>Creating training schedule</h4>
              <p>{loremShort}</p>
            </div>
          </div>
          <div className={s.lifeSection}>
            <div className={s.road}>
              <div className={s.line}>
                <div className={s.dot} />
                <h4 className={s.number}>3</h4>
              </div>
            </div>
            <div className={s.pivotStory}>
              <h4>Maintaining weight</h4>
              <p>{loremShort}</p>
            </div>
          </div>
        </div>
        <div className={s.buttons}>
          <button>Book Now</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Programmes;
