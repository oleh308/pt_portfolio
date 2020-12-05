import { useState } from 'react';
import PropTypes from 'prop-types';

import s from './dropdown.module.scss';

function DropDown({ items, update, title }) {
  const [isOpen, setIsOpen] = useState(false);

  const selected = items.find(item => item.selected);
  const rest = items.filter(item => !item.selected);

  function onChange(value) {
    setIsOpen(false);
    update(items.map(item => ({ ...item, selected: item.title === value })));
  }

  return (
    <div className={s.dropDown}>
      <label>{title}</label>
      <select onChange={() => onChange(e.target.value)} value={selected ? selected.title : ''}>
        {items.map((item, i) => (
          <option key={i}>{item.title}</option>
        ))}
      </select>
      <button className={s.selected} onClick={() => setIsOpen(!isOpen)}>
        {selected ? selected.title : 'Please select'}
      </button>
      {isOpen && rest.map((item, i) => (
        <button key={i} className={s.option} onClick={() => onChange(item.title)}>
          {item.title}
        </button>
      ))}
    </div>
  )
}

DropDown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    selected: PropTypes.boolean
  })).isRequired,
  update: PropTypes.func
}


export default DropDown;
