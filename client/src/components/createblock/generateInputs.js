import { cloneDeep } from 'lodash';
import Input from '../inputs/input';
import Textarea from '../inputs/textarea';

import s from './createblock.module.scss';

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

  function addDeleteButton(Component, deleteItem, i) {
    return (
      <div key={i} className={s.arrayItem}>
        <div className={s.arrayItemContent}>
          {Component}
        </div>
        <button onClick={deleteItem}>Delete</button>
      </div>
    );
  }

  function manageBasic(input, i) {
    if (input.type === 'input') {
      return createInput(input, i);
    } else if (input.type === 'textarea') {
      return createTextarea(input, i);
    } else if (input.type === 'object') {
      return manageObject(input.props, Object.keys(input.props));
    } else if (input.type === 'array') {
      const addNew = () => {
        input.values.push(cloneDeep(input.arrayOf));
        update({ ...template });
      }

      const deleteItem = (j) => {
        input.values = input.values.filter((value, k) => k !== j);
        update({ ...template });
      }

      return (
        <div key={i} className={s.arrayType}>
          <label>{input.title}</label>
          {input.values.map((value, j) => addDeleteButton(manageBasic(value, j), deleteItem, j))}
          <button onClick={addNew}>Add new</button>
        </div>
      )
    }
  }

  function manageObject(obj, keys) {
    return keys.map((key, i) => {
      return manageBasic(obj[key], i);
    });
  }

  return manageObject(template, Object.keys(template));
}


function encodeData(template) {

  function manageBasic(input) {
    if (input.type === 'input' || input.type === 'textarea') {
      return input.value;
    } else if (input.type === 'object') {
      return manageObject(input.props, Object.keys(input.props));
    } else if (input.type === 'array') {
      return input.values.map(manageBasic);
    }
  }

  function manageObject(obj, keys) {
    return keys.reduce((acc, key) => {
      if (!obj[key].type) return acc;

      return {
        ...acc,
        [key]: manageBasic(obj[key])
      }
    }, {});
  }

  return manageObject(template, Object.keys(template));
}

function decodeData(data, template) {
  function manageBasic(input, key, data) {
    if (input.type === 'input' || input.type === 'textarea') {
      input.value = data[key] ? data[key] : '';
    } else if (input.type === 'object') {
      manageObject(input.props, Object.keys(input.props), data[key]);
    } else if (input.type === 'array') {
      input.values = data[key].map((value, i) => {
        const new_input = cloneDeep(input.arrayOf);
        manageBasic(new_input, i, data[key]);
        return new_input;
      });
    }
  }

  function manageObject(obj, keys, data) {
    return keys.map(key => {
      return manageBasic(obj[key], key, data);
    });
  }

  manageObject(template, Object.keys(template), data);

  return template;
}

export { generateInputs, encodeData, decodeData }
