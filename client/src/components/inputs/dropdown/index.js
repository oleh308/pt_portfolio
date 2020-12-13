import { useState } from 'react';
import PropTypes from 'prop-types';

import s from './dropdown.module.scss';

function DropDown({ items, update, title, prop }) {
  const [isOpen, setIsOpen] = useState(false);

  const selected = items.find(item => item.selected);
  const rest = items.filter(item => !item.selected);

  function onChange(value) {
    setIsOpen(false);
    update(items.map(item => ({ ...item, selected: getTitle(item) === value })));
  }

  function getTitle(item) {
    if (prop) {
      return item[prop] ? item[prop] : ''
    } else {
      return item.title;
    }
  }

  return (
    <div className={s.dropDown}>
      <label>{title}</label>
      <select onChange={() => onChange(e.target.value)} value={selected ? getTitle(selected) : ''}>
        {items.map((item, i) => (
          <option key={i}>{getTitle(item)}</option>
        ))}
      </select>
      <button className={s.selected} onClick={() => setIsOpen(!isOpen)}>
        {selected ? getTitle(selected) : 'Please select'}
      </button>
      {isOpen && rest.map((item, i) => (
        <button key={i} className={s.option} onClick={() => onChange(getTitle(item))}>
          {getTitle(item)}
        </button>
      ))}
    </div>
  )
}

DropDown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    selected: PropTypes.boolean
  })).isRequired,
  prop: PropTypes.string,
  update: PropTypes.func
}


export default DropDown;
