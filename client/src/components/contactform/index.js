import Section from '../section';

import s from './contactform.module.scss';

function ContactForm({ passRef }) {
  return (
    <Section title="Contact me" passRef={passRef}>
      <form className={s.form}>
        <label htmlFor="name">First name</label>
        <input type="text" />
        <label htmlFor="surname">Last name</label>
        <input type="text" />
        <label htmlFor="email">Email</label>
        <input type="text" />
        <label htmlFor="topic">Topic</label>
        <input type="text" />
        <label htmlFor="question">Question</label>
        <textarea />
        <button>Submit</button>
      </form>
    </Section>
  )
}

export default ContactForm;
