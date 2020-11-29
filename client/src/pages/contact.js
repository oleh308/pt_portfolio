import Webnav from '../components/webnav';
import Footer from '../components/footer';
import PageHeader from '../components/pageheader';
import ContactForm from '../components/contactform';

import s from '../styles/pages/contact.module.scss';

function Clients() {
  return (
    <div className={s.container}>
      <Webnav type="other" />
      <PageHeader title="CONTACTS" />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Clients;
