import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useIntl } from "react-intl";
import { useAlert } from 'react-alert';
import { generateInputs } from './generateInputs';

import s from './configview.module.scss';

function ConfigView({ _id, title, settings, lang, blocks, update }) {
  const alert = useAlert();
  const { formatMessage } = useIntl();
  const t = id => formatMessage({ id });

  const [open, setOpen] = useState(false);
  const [inputs, setInputs] = useState(settings);

  function filterInputs(inputs) {
    Object.keys(inputs).forEach(key => {
      if (inputs[key].options) delete inputs[key].options;
    })
  }

  async function submit() {
    try {
      filterInputs(inputs);
      const data = {
        settings: inputs
      }

      const response = (await axios.patch('/api/configurations/' + _id, data)).data;
      console.log(response);
      update(response.settings);
      setOpen(false);
    } catch (error) {
      if (error.response) {
        alert.show('Oops, something went wrong. Please try again later', {
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
    <article className={s.config}>
      <header onClick={() => setOpen(!open)}>
        <h2>{t(title)}</h2>
        <p>{t(lang)}</p>
      </header>
      {open && <div>
        {generateInputs(t, inputs, setInputs, blocks)}
        <div className={s.buttons}>
          <button className={s.closeButton} onClick={() => setOpen(false)}>
            {t('close')}
          </button>
          <button className={s.submitButton} onClick={submit}>
            {t('save')}
          </button>
        </div>
        <p></p>
      </div>}
    </article>
  )
}

ConfigView.propTypes = {
  update: PropTypes.func,
  _id: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  settings: PropTypes.object.isRequired,
  blocks: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
    created_at: PropTypes.string.isRequired
  }))
}

export default ConfigView;
