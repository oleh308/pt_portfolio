import Webnav from '../components/webnav';
import Footer from '../components/footer';
import PageHeader from '../components/pageheader';
import IosArrowForward from 'react-ionicons/lib/IosArrowForward';

import s from '../styles/pages/clients.module.scss';
import { loremShort, loremSentence, loremSentence2 } from '../data/lorem';

function Clients() {
  return (
    <div className={s.container}>
      <Webnav type="other" />
      <PageHeader title="CLIENTS" />
      <main className={s.content}>
        <section className={s.client}>
          <div className={s.header}>
            <img src="https://via.placeholder.com/200x200" alt="Human" />
            <div className={s.transition}>
              <div className={s.line} />
              <IosArrowForward fontSize="24px" />
            </div>
            <img src="https://via.placeholder.com/200x200" alt="Human" />
            <div className={s.details}>
              <div className={s.detail}>
                <h3>Start date: </h3>
                24th Dec 2019
              </div>
              <div className={s.detail}>
                <h3>End date: </h3>
                24th March 2020
              </div>
              <div className={s.detail}>
                <h3>Duration: </h3>
                3 months
              </div>
              <div className={s.detail}>
                <h3>Programme: </h3>
                Loose weight
              </div>
            </div>
          </div>
          <p className={s.story}>
            {loremShort}
          </p>
          <p className={s.story}>
            {loremShort}
          </p>
          <h3 className={s.feedback}>Client's Feedback:</h3>
          <p className={s.story}>
            {loremSentence2}
          </p>
        </section>
        <section className={s.client}>
          <div className={s.header}>
            <img src="https://via.placeholder.com/200x200" alt="Human" />
            <div className={s.transition}>
              <div className={s.line} />
              <IosArrowForward fontSize="24px" />
            </div>
            <img src="https://via.placeholder.com/200x200" alt="Human" />
            <div className={s.details}>
              <div className={s.detail}>
                <h3>Start date: </h3>
                24th Dec 2019
              </div>
              <div className={s.detail}>
                <h3>End date: </h3>
                24th March 2020
              </div>
              <div className={s.detail}>
                <h3>Duration: </h3>
                3 months
              </div>
              <div className={s.detail}>
                <h3>Programme: </h3>
                Loose weight
              </div>
            </div>
          </div>
          <p className={s.story}>
            {loremShort}
          </p>
          <p className={s.story}>
            {loremShort}
          </p>
          <h3 className={s.feedback}>Client's Feedback:</h3>
          <p className={s.story}>
            {loremSentence2}
          </p>
        </section>
        <section className={s.client}>
          <div className={s.header}>
            <img src="https://via.placeholder.com/200x200" alt="Human" />
            <div className={s.transition}>
              <div className={s.line} />
              <IosArrowForward fontSize="24px" />
            </div>
            <img src="https://via.placeholder.com/200x200" alt="Human" />
            <div className={s.details}>
              <div className={s.detail}>
                <h3>Start date: </h3>
                24th Dec 2019
              </div>
              <div className={s.detail}>
                <h3>End date: </h3>
                24th March 2020
              </div>
              <div className={s.detail}>
                <h3>Duration: </h3>
                3 months
              </div>
              <div className={s.detail}>
                <h3>Programme: </h3>
                Loose weight
              </div>
            </div>
          </div>
          <p className={s.story}>
            {loremShort}
          </p>
          <p className={s.story}>
            {loremShort}
          </p>
          <h3 className={s.feedback}>Client's Feedback:</h3>
          <p className={s.story}>
            {loremSentence2}
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Clients;
