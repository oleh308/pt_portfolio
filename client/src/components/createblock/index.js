import { useState, useEffect } from 'react';
import DropDown from '../inputs/dropdown';
import Templates from '../../data/blockTemplates';

import s from './createblock.module.scss';

const langsInit = [
  { title: 'en', selected: true },
  { title: 'pl', selected: false },
  { title: 'ua', selected: false }
]

const pagesInit = [
  { title: 'Home', key: 'home', selected: true },
  { title: 'Programmes', key: 'programmes',selected: false },
  { title: 'Clients', key: 'clients',selected: false },
  { title: 'FAQ', key: 'faq',selected: false }
]

function CreateBlock() {
  const [template, setTemplate] = useState([]);
  const [langs, setLangs] = useState(langsInit);
  const [pages, setPages] = useState(pagesInit);
  const [templates, setTemplates] = useState([]);

  useState(() => {
    initTemplates();
  }, []);

  useEffect(() => {
    initTemplates();
  }, [pages]);

  useEffect(() => {
    const template = templates.find(temp => temp.selected);

    setTemplate(template);
  }, [templates]);

  function initTemplates() {
    const selected = pages.find(page => page.selected);

    if (selected) {
      let temps = Templates[selected.key];
      if (temps) {
        temps = temps.map((obj, i) => ({
          ...obj,
          selected: i === 0
        }));
      } else {
        temps = []
      }
      setTemplates(temps);
    }
  }

  return (
    <section className={s.createBlock}>
      <DropDown items={langs} update={setLangs} title={'Language'}/>
      <DropDown items={pages} update={setPages} title={'Page'}/>
      <DropDown items={templates} update={setTemplates} title={'Page'}/>
    </section>
  )
}

export default CreateBlock;
