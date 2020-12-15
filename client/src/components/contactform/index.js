import { useState } from 'react';
import axios from 'axios';
import Section from '../section';
import { useAlert } from 'react-alert';

import s from './contactform.module.scss';

function ContactForm({ passRef }) {
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

      console.log(data);

      const response = (await axios.post('/api/enquiries', data)).data;
      console.log(response)
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
        <label htmlFor="name">First name</label>
        <input
          type="text"
          value={ name }
          onChange={ e => setName(e.target.value) }
        />
        <label htmlFor="surname">Last name</label>
        <input
          type="text"
          value={ surname }
          onChange={ e => setSurname(e.target.value) }
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={ email }
          onChange={ e => setEmail(e.target.value) }
        />
        <label htmlFor="topic">Topic</label>
        <input
          type="text"
          value={ topic }
          onChange={ e => setTopic(e.target.value) }
        />
        <label htmlFor="question">Question</label>
        <textarea
          value={ question }
          onChange={ e => setQuestion(e.target.value) }
        />
        <button onClick={submit}>Submit</button>
      </form>
    </Section>
  )
}

export default ContactForm;
