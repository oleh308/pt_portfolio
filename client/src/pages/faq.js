import { useState } from 'react';
import Webnav from '../components/webnav';
import Footer from '../components/footer';
import PageHeader from '../components/pageheader';
import IosArrowUp from 'react-ionicons/lib/IosArrowUp';
import IosArrowDown from 'react-ionicons/lib/IosArrowDown';

import s from '../styles/pages/faq.module.scss';

import { loremShort, loremSentence, loremSentence2 } from '../data/lorem';

const questions = new Array(10).fill({ title: loremSentence, content: loremShort });
const openedInit = new Array(questions.length).fill(false);

function Faq() {
  const [opened, setOpened] = useState(openedInit);

  function toggle(index) {
    opened[index] = !opened[index];

    setOpened([...opened]);
  }

  function getIcon(index) {
    if (opened[index]) {
      return <IosArrowUp fontSize="24px" />;
    } else {
      return <IosArrowDown fontSize="24px" />;
    }
  }

  return (
    <div className={s.container}>
      <Webnav type="other" />
      <PageHeader title={"FAQ"} />
      <main className={s.content}>
        {questions.map((question, index) => (
          <section className={s.question}>
            <button className={s.questionButton} onClick={() => toggle(index)}>
              <h2>{question.title}</h2>
              {getIcon(index)}
            </button>
            {opened[index] && <p>{question.content}</p>}
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default Faq;
