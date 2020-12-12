import moment from 'moment';
import PropTypes from 'prop-types';
import { langs } from '../../data/languages';
import templates from '../../data/blockTemplates';

import s from './cmsblock.module.scss';

function CmsBlock({ name, type, lang, created_at, openEdit, deleteItem }) {

  function getLanguage() {
    const language = langs.find(langObj => langObj.key === lang);

    return language ? language.title : lang;
  }

  function getTemplate() {
    const templateKey = Object.keys(templates.keysMap).find(key =>
      templates.keysMap[key].key === type);

    return templates.keysMap[templateKey] ? templates.keysMap[templateKey].title : type;
  }

  return (
    <article className={ s.cmsBlock } onClick={() => openEdit ? openEdit() : void(0)}>
      <header>
        <h2>{ name }</h2>
        <button onClick={deleteItem}>Delete</button>
      </header>
      <div>
        <p>Template: { getTemplate() }</p>
        <p>Language: { getLanguage() }</p>
      </div>
      <footer>
        <p className={ s.createdAt }>{moment(created_at).format('HH:mm DD MMM YYYY')}</p>
      </footer>
    </article>
  )
}

CmsBlock.propTypes = {
  openEdit: PropTypes.func,
  deleteItem: PropTypes.func,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  created_at: PropTypes.string.isRequired,
}

export default CmsBlock;
