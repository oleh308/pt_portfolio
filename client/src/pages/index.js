import { useState, useEffect, useRef } from 'react';

import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Banner from '../components/banner';
import Webnav from '../components/webnav';
import Footer from '../components/footer';
import Section from '../components/section';
import Section2 from '../components/section2';
import { serverSideUrl } from '../utils/url';
import IosPaper from 'react-ionicons/lib/IosPaper';
import MdRibbon from 'react-ionicons/lib/MdRibbon';
import ContactForm from '../components/contactform';
import IosSchool from 'react-ionicons/lib/IosSchool';
import IosTrophy from 'react-ionicons/lib/IosTrophy';

import s from '../styles/pages/index.module.scss';

import { loremShort, loremSentence, loremSentence2 } from '../data/lorem';

function Home({ settings }) {
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

  function getAboutMe(config) {
    let content = {
      blockTitle: '',
      paragraphs: [],
      points: [],
      quote1: '',
      quote2: ''
    }
    if (config && config.block && config.block.content) {
      content = config.block.content;
    }

    return (
      <Section title={ content.blockTitle } passRef={ aboutMeRef }>
        <h3 className={ s.quote }>{ `"${content.quote1}"` }</h3>
        {content.paragraphs.map((paragraph, i) => (
          <p key={ i }>{ paragraph }</p>
        ))}
        <h3 className={ s.quote }>{ `"${content.quote2}"` }</h3>
        <div className={ s.roadMap }>
          {content.points.map((point, i) => (
            <div key={i} className={s.lifeSection}>
              <div className={s.road}>
                <div className={s.line}>
                  <div className={s.dot} />
                </div>
              </div>
              <div className={s.pivotStory}>
                <h4>{ point.title }</h4>
                <p>{ point.content }</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    )
  }

  function getProgramme(config, isRight) {
    let content = {
      blockTitle: '',
      blockSubtitle: '',
      blockHeader: '',
      blockContent: '',
      points: []
    }
    if (config && config.block && config.block.content) {
      content = config.block.content;
    }

    return (
      <Section2 type="programmes">
        <div className={ `${s.programmeSection} ${isRight ? s.rightProgramme : ''}` }>
          <div className={ s.left }>
            <div className={ s.titleContainer }>
              <h1>{ content.blockTitle }</h1>
            </div>
            <h3>{ content.blockSubtitle }</h3>
          </div>
          <div className={ s.right }>
            <div className={ s.programme }>
              <div className={ s.titleContainer }>
                <h2>{ content.blockHeader }</h2>
              </div>
              <div className={ s.content }>
                <p>{ content.blockContent }</p>
                { content.points.map((point, index) => {
                  return (
                    <div key={ index } className={ s.achievement }>
                      <div className={ s.logo }>
                        <MdRibbon fontSize="24px" />
                      </div>
                      <p>{ point }</p>
                    </div>
                  )
                })}
              </div>
              <div className={ s.buttons }>
                <Link passRef href={ '/programmes?section=looseweight' }>
                  <button>Read more</button>
                </Link>
                <button>Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </Section2>
    )
  }

  function getComment(config) {
    let content = {
      comment: '',
      clientName: '',
      clientImageUrl: ''
    }
    if (config && config.block && config.block.content) {
      content = config.block.content;
    }

    return (
      <div className={s.clientResponse}>
        <img
          alt="Client's image"
          src={ content.clientImageUrl ? content.clientImageUrl : "images/client.jpeg" }
        />
        <h2>{ `"${content.comment}"` }</h2>
        <h3>{ `- ${content.clientName}` }</h3>
      </div>
    )
  }

  return (
    <div className={s.container}>
      <Webnav />
      <Banner
        aboutme={ scrollToAboutMe }
        contact={ scrollToContact }
        config={ settings['bannertext'] }
      />
      { getAboutMe(settings['aboutmeblock']) }
      { getProgramme(settings['programmehomeblock1'], false) }
      { getComment(settings['commentblock1']) }
      { getProgramme(settings['programmehomeblock2'], true) }
      { getComment(settings['commentblock2']) }
      { getProgramme(settings['programmehomeblock3'], false) }
      { getComment(settings['commentblock3']) }
      <ContactForm passRef={contactRef} />
      <Footer />
    </div>
  )
}

export async function getStaticProps({ locale }) {
  let settings = {}
  try {
    const response = (await axios.get(serverSideUrl + '/api/configurations/homepage/' + locale)).data;
    settings = response.settings;
  } catch (error) {
    if (error.response) {
      console.log('Home - getStaticProps:', error.response.data);
    } else {
      console.log('Home - getStaticProps:', error.message);
    }
  }

  return {
    props: {
      settings
    }
  }
}

export default Home;
