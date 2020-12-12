import { useState } from 'react';
import PropTypes from 'prop-types';
import { generateInputs } from './generateInputs';

import s from './configview.module.scss';

function ConfigView({ title, settings, lang }) {
  const [open, setOpen] = useState(false);
  const [inputs, setInputs] = useState(settings);

  return (
    <article className={s.config} onClick={() => setOpen(!open)}>
      <header>
        <h2>{title}</h2>
        <p>{lang}</p>
      </header>
      {open && <div>
        {generateInputs(inputs)}
      </div>}
      <p></p>
    </article>
  )
}

ConfigView.propTypes = {
  lang: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  settings: PropTypes.object.isRequired
}

export default ConfigView;
