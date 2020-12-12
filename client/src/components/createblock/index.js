import { useState, useEffect } from 'react';
import axios from 'axios';
import { cloneDeep } from 'lodash';
import PropTypes from 'prop-types';
import Input from '../inputs/input';
import { useAlert } from 'react-alert';
import Textarea from '../inputs/textarea';
import DropDown from '../inputs/dropdown';
import Templates from '../../data/blockTemplates';
import { langs as langsInit } from '../../data/languages';
import { generateInputs, encodeData, decodeData } from './generateInputs';

import s from './createblock.module.scss';

const pagesInit = [
  { title: 'Home', key: 'home', selected: true },
  { title: 'Programmes', key: 'programmes',selected: false },
  { title: 'Clients', key: 'clients',selected: false },
  { title: 'FAQ', key: 'faq',selected: false }
]

function CreateBlock({ close, edit }) {
  const alert = useAlert();
  const [name, setName] = useState('');
  const [template, setTemplate] = useState([]);
  const [langs, setLangs] = useState(langsInit);
  const [pages, setPages] = useState(pagesInit);
  const [templates, setTemplates] = useState([]);

  useState(() => {
    if (edit) {
      initEdit();
    } else {
      initTemplates();
    }
  }, []);

  useEffect(() => {
    if (!edit) initTemplates();
  }, [pages]);

  useEffect(() => {
    const template = templates.find(temp => temp.selected);

    if (!edit) setTemplate(cloneDeep(template));
  }, [templates]);

  function initTemplates() {
    const selected = pages.find(page => page.selected);

    if (selected) {
      let temps = Templates[selected.key];
      if (temps) {
        temps = temps.map((obj, i) => ({
          ...obj,
          selected: false
        }));
      } else {
        temps = []
      }
      setTemplates(temps);
    }
  }

  function initEdit() {
    const skip = ['keysMap']
    const pages = Object.keys(Templates).filter(page => !skip.includes(page));

    pages.forEach(page => {
      const templates = Templates[page];
      const template = templates.find(temp => temp.key === edit.type);
      if (template) setTemplate(decodeData(edit.content, cloneDeep(template)));
    });

    setName(edit.name);
    setLangs(langs.map(lang => ({ ...lang, selected: edit.lang === lang.key })))
  }

  async function submit() {
    const lang = langs.find(lang => lang.selected);

    const data = {
      name: name,
      lang: lang.key,
      type: template.key,
      content: encodeData(template)
    }

    try {
      const response = (await axios.post('/api/cmsblocks', data)).data;
      close(response);
    } catch (error) {
      if (error.response) {
        alert.show(JSON.stringify(error.response.data), {
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

  async function change() {
    const lang = langs.find(lang => lang.selected);

    const data = {
      name: name,
      lang: lang.key,
      content: encodeData(template)
    }

    try {
      const response = (await axios.patch('/api/cmsblocks/' + edit._id, data)).data;
      close(response);
    } catch (error) {
      if (error.response) {
        alert.show(JSON.stringify(error.response.data), {
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
    <section className={s.createBlock}>
      <Input
        value={name}
        update={setName}
        title={'Block Name'}
      />
      <DropDown items={langs} update={setLangs} title={'Language'}/>
      {!edit && <DropDown items={pages} update={setPages} title={'Page'}/>}
      {!edit && <DropDown items={templates} update={setTemplates} title={'Template'}/>}
      {generateInputs(template, setTemplate)}
      <div className={s.buttons}>
        <button className={s.closeButton} onClick={() => close()}>
          Close
        </button>
        <button className={s.submitButton} onClick={edit ? change : submit}>
          {edit ? 'Save' : 'Submit'}
        </button>
      </div>
    </section>
  )
}

CreateBlock.propTypes = {
  close: PropTypes.func.isRequired,
  edit: PropTypes.shape({
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
    created_at: PropTypes.string.isRequired,
  })
}

export default CreateBlock;
