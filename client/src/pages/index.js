import { useState, useEffect, useRef } from 'react';

import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Banner from '../components/banner';
import Webnav from '../components/webnav';
import Footer from '../components/footer';
import Section from '../components/section';
import Section2 from '../components/section2';
import IosPaper from 'react-ionicons/lib/IosPaper';
import IosSchool from 'react-ionicons/lib/IosSchool';
import IosTrophy from 'react-ionicons/lib/IosTrophy';
import MdRibbon from 'react-ionicons/lib/MdRibbon';
import ContactForm from '../components/contactform';

import s from '../styles/pages/index.module.scss';

import { loremShort, loremSentence, loremSentence2 } from '../data/lorem';

export default function Home() {
  const router = useRouter();
  const aboutMeRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    if (router?.query?.section) {
      const section = router.query.section;

      if (section === 'aboutme' && aboutMeRef.current) {
        window.scrollTo({ behavior: 'smooth', top: aboutMeRef.current.offsetTop - 100 });
      }
    }
  }, [router, aboutMeRef]);

  function scrollToAboutMe() {
    window.scrollTo({ behavior: 'smooth', top: aboutMeRef.current.offsetTop - 100 });
  }

  function scrollToContact() {
    window.scrollTo({ behavior: 'smooth', top: contactRef.current.offsetTop - 100 });
  }

  return (
    <div className={s.container}>
      <Webnav />
      <Banner aboutme={scrollToAboutMe} contact={scrollToContact} />
      <Section title={"About me"} passRef={aboutMeRef}>
        <h3 className={s.quote}>"Train hard, eat harder..."</h3>
        <p>{loremShort + ' ' + loremShort}</p>
        <p>{loremShort}</p>
        <h3 className={s.quote}>"You have to be active your whole life."</h3>
        <div className={s.roadMap}>
          <div className={s.lifeSection}>
            <div className={s.road}>
              <div className={s.line}>
                <div className={s.dot} />
              </div>
            </div>
            <div className={s.pivotStory}>
              <h4>Swimming</h4>
              <p>{loremShort}</p>
            </div>
          </div>
          <div className={s.lifeSection}>
            <div className={s.road}>
              <div className={s.line}>
                <div className={s.dot} />
              </div>
            </div>
            <div className={s.pivotStory}>
              <h4>Football</h4>
              <p>{loremShort}</p>
            </div>
          </div>
          <div className={s.lifeSection}>
            <div className={s.road}>
              <div className={s.line}>
                <div className={s.dot} />
              </div>
            </div>
            <div className={s.pivotStory}>
              <h4>University</h4>
              <p>{loremShort}</p>
            </div>
          </div>
        </div>
      </Section>
      <Section2 type="programmes">
        <div className={s.programmeSection}>
          <div className={s.left}>
            <div className={s.titleContainer}>
              <h1>LOOSE WEIGHT</h1>
            </div>
            <h3>Beginner programme</h3>
          </div>
          <div className={s.right}>
            <div className={s.programme}>
              <div className={s.titleContainer}>
                <h2>Programme Overview</h2>
              </div>
              <div className={s.content}>
                <p>{loremSentence2}</p>
                {[1,2,3,4].map(index => {
                  return (
                    <div key={index} className={s.achievement}>
                      <div className={s.logo}>
                        <MdRibbon fontSize="24px" />
                      </div>
                      <p>{loremSentence}</p>
                    </div>
                  )
                })}
              </div>
              <div className={s.buttons}>
                <Link passRef href={'/programmes?section=looseweight'}>
                  <button>Read more</button>
                </Link>
                <button>Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </Section2>
      <div className={s.clientResponse}>
        <img src={"images/client.jpeg"} alt="Client's name"/>
        <h2>{'"' + loremShort + '"'}</h2>
        <h3>- Client Name</h3>
      </div>
      <Section2 type="programmes">
        <div className={`${s.programmeSection} ${s.rightProgramme}`}>
          <div className={s.left}>
            <div className={s.titleContainer}>
              <h1>GAIN MUSCLES</h1>
            </div>
            <h3>Intermediate programme</h3>
          </div>
          <div className={s.right}>
            <div className={s.programme}>
              <div className={s.titleContainer}>
                <h2>Programme Overview</h2>
              </div>
              <div className={s.content}>
                <p>{loremSentence2}</p>
                {[1,2,3,4].map(index => {
                  return (
                    <div key={index} className={s.achievement}>
                      <div className={s.logo}>
                        <MdRibbon fontSize="24px" />
                      </div>
                      <p>{loremSentence}</p>
                    </div>
                  )
                })}
              </div>
              <div className={s.buttons}>
                <Link passRef href={'/programmes?section=gainmuscles'}>
                  <button>Read more</button>
                </Link>
                <button>Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </Section2>
      <div className={s.clientResponse}>
        <img src={"images/client.jpeg"} alt="Client's name"/>
        <h2>{'"' + loremShort + '"'}</h2>
        <h3>- Client Name</h3>
      </div>
      <Section2 type="programmes">
        <div className={s.programmeSection}>
          <div className={s.left}>
            <div className={s.titleContainer}>
              <h1>CHANGE LIFESTYLE</h1>
            </div>
            <h3>Advance programme</h3>
          </div>
          <div className={s.right}>
            <div className={s.programme}>
              <div className={s.titleContainer}>
                <h2>Programme Overview</h2>
              </div>
              <div className={s.content}>
                <p>{loremSentence2}</p>
                {[1,2,3,4].map(index => {
                  return (
                    <div key={index} className={s.achievement}>
                      <div className={s.logo}>
                        <MdRibbon fontSize="24px" />
                      </div>
                      <p>{loremSentence}</p>
                    </div>
                  )
                })}
              </div>
              <div className={s.buttons}>
                <Link passRef href={'/programmes?section=changelifestyle'}>
                  <button>Read more</button>
                </Link>
                <button>Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </Section2>
      <div className={s.clientResponse}>
        <img src={"images/client.jpeg"} alt="Client's name"/>
        <h2>{'"' + loremShort + '"'}</h2>
        <h3>- Client Name</h3>
      </div>
      <ContactForm passRef={contactRef} />
      <Footer />
    </div>
  )
}
