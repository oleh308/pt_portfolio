
import PropTypes from 'prop-types';

import s from './textarea.module.scss';

function Textarea({ title, value, update }) {
  return (
    <div className={s.input}>
      <label>{title}</label>
      <textarea value={value} onChange={e => update(e.target.value)} />
    </div>
  )
}

Textarea.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  update: PropTypes.func
}

export default Textarea;
