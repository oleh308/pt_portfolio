
import PropTypes from 'prop-types';

import s from './input.module.scss';

function Input({ title, value, update }) {
  return (
    <div className={s.input}>
      <label>{title}</label>
      <input value={value} onChange={e => update(e.target.value)} />
    </div>
  )
}

Input.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  update: PropTypes.func
}

export default Input;
