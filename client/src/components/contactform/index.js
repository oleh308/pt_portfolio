import { useState } from 'react';
import axios from 'axios';
import Section from '../section';
import { useIntl } from 'react-intl';
import { useAlert } from 'react-alert';

import s from './contactform.module.scss';

function ContactForm({ passRef }) {
  const { formatMessage } = useIntl();
  const t = id => formatMessage({ id });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [surname, setSurname] = useState('');
  const [question, setQuestion] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      const data = {
        name,
        surname,
        email,
        topic,
        content: question
      }

      const response = (await axios.post('/api/enquiries', data)).data;
    } catch (error) {
      if (error.response) {
        alert.show('Oops, something went wrong. Please try again later', {
          title: 'Server error',
          closeCopy: 'Close'
        });
      } else {
        alert.show(error.message, {
          title: 'Web error',
          closeCopy: 'Close'
        });
      }
    }
  }

  return (
    <Section title="Contact me" passRef={ passRef }>
      <form className={ s.form }>
        <label htmlFor="name">{ t('firstname') }</label>
        <input
          type="text"
          value={ name }
          onChange={ e => setName(e.target.value) }
        />
        <label htmlFor="surname">{ t('lastname') }</label>
        <input
          type="text"
          value={ surname }
          onChange={ e => setSurname(e.target.value) }
        />
        <label htmlFor="email">{ t('email') }</label>
        <input
          type="text"
          value={ email }
          onChange={ e => setEmail(e.target.value) }
        />
        <label htmlFor="topic">{ t('topic') }</label>
        <input
          type="text"
          value={ topic }
          onChange={ e => setTopic(e.target.value) }
        />
        <label htmlFor="question">{ t('question') }</label>
        <textarea
          value={ question }
          onChange={ e => setQuestion(e.target.value) }
        />
        <button onClick={submit}>{ t('submit') }</button>
      </form>
    </Section>
  )
}

export default ContactForm;
