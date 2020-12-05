import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from '../inputs/input';
import Textarea from '../inputs/textarea';
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


function generateInputs(template, update) {
  if (!template) return '';

  function createInput(input, key) {
    return (
      <Input
        key={key}
        title={input.title}
        value={input.value}
        update={str => {
          input.value = str,
          update({ ...template })
        }}
      />
    )
  }

  function createTextarea(input, key) {
    return (
      <Textarea
        key={key}
        title={input.title}
        value={input.value}
        update={str => {
          input.value = str,
          update({ ...template })
        }}
      />
    )
  }

  function createArrayInput(value, key, textChange, deleteItem) {
    return (
      <div key={key} className={s.generatedItem}>
        <Input
          title={''}
          value={value}
          update={textChange}
        />
        <button onClick={deleteItem}>Delete</button>
      </div>
    )
  }

  function createArrayTextarea(value, key, textChange, deleteItem) {
    return (
      <div key={key} className={s.generatedItem}>
        <Textarea
          key={key}
          title={''}
          value={value}
          update={textChange}
        />
        <button onClick={deleteItem}>Delete</button>
      </div>
    )
  }

  return Object.keys(template).map((key, i) => {
    let input = template[key];

    if (input.type === 'input') {
      return createInput(input, i);
    } else if (input.type === 'textarea') {
      return createTextarea(input, i)
    } else if (input.type === 'array') {
      const addNew = () => {
        input.values.push('');
        update({ ...template });
      }

      const textChange = (str, j) => {
        input.values[j] = str;
        update({ ...template });
      }

      const deleteItem = (j) => {
        input.values = input.values.filter((value, k) => k !== j);
        update({ ...template });
      }

      return (
        <div key={i} className={s.arrayType}>
          <label>{input.title}</label>
          {input.values.map((value, j) => {
            if (input.arrayOf === 'input') {
              return createArrayInput(value, j, str => textChange(str, j), () => deleteItem(j));
            } else if (input.arrayOf === 'textarea') {
              return createArrayTextarea(value, j, str => textChange(str, j), () => deleteItem(j));
            }
          })}
          <button onClick={addNew}>Add new</button>
        </div>
      )
    }
  });
}

function CreateBlock({ close }) {
  const [name, setName] = useState('');
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

  function submit() {
    const lang = langs.find(lang => lang.selected);

    const inputs = Object.keys(template).reduce((acc, key) => {
      if (template[key].type === 'input' || template[key].type === 'textarea') {
        acc[key] = template[key].value;
      } else if (template[key].type === 'array') {
        acc[key] = template[key].values;
      }
      return acc;
    }, {});

    let data = {
      name: name,
      lang: lang.title,
      type: template.key,
      content: inputs
    }

    console.log(data);
  }

  return (
    <section className={s.createBlock}>
      <DropDown items={langs} update={setLangs} title={'Language'}/>
      <DropDown items={pages} update={setPages} title={'Page'}/>
      <DropDown items={templates} update={setTemplates} title={'Page'}/>
      <Input
        value={name}
        title={'Block Name'}
        update={e => setName(e.target.value)}
      />
      {generateInputs(template, setTemplate)}
      <div className={s.buttons}>
        <button onClick={close}>
          Close
        </button>
        <button className={s.submitButton} onClick={submit}>
          Submit
        </button>
      </div>
    </section>
  )
}

CreateBlock.propTypes = {
  close: PropTypes.func.isRequired
}

export default CreateBlock;
