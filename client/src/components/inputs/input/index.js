
import PropTypes from 'prop-types';

import s from './input.module.scss';

function Input({ title, value, update, type = 'text' }) {
  return (
    <div className={ s.input }>
      <label>{ title }</label>
      <input
        type={ type }
        value={ value }
        onChange={ e => update(e.target.value) }
      />
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  update: PropTypes.func
}

export default Input;
