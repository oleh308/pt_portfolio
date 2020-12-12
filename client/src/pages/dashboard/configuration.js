import { useReducer, useState, useEffect } from 'react';
import axios from 'axios';
import { useIntl } from "react-intl";
import { useAlert } from 'react-alert';
import CmsBlock from '../../components/cmsblock';
import ConfigView from '../../components/configview';
import CreateBlock from '../../components/createblock';
import AdminContent from '../../components/admincontent';
import { SearchContext, SearchReducer, init } from '../../contexts/search';

import s from '../../styles/pages/dashboard/pages.module.scss';

function NoContent({ title }) {
  return (
    <h4>{title}</h4>
  )
}

function Configuration() {
  const alert = useAlert();
  const { formatMessage } = useIntl();
  const t = id => formatMessage({ id })
  const [state, dispatch] = useReducer(SearchReducer, init);

  const [edit, setEdit] = useState(null);
  const [blocks, setBlocks] = useState([]);
  const [content, setContent] = useState('config');
  const [openCreate, setOpenCreate] = useState(false);
  const [configurations, setConfigurations] = useState([]);
  const { search } = state;

  useEffect(() => {
    fetchCmsblocks();
    fetchConfigurations();
  }, []);

  async function fetchCmsblocks() {
    try {
      const response = (await axios.get('/api/cmsblocks')).data;
      setBlocks(response);
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

  async function fetchConfigurations() {
    try {
      const response = (await axios.get('/api/configurations')).data;
      setConfigurations(response);
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

  async function deleteBlock(e, block) {
    e.stopPropagation();
    try {
      const response = (await axios.delete('/api/cmsblocks/' + block._id)).data;
      const index = blocks.indexOf(block);
      blocks.splice(index, 1);
      setBlocks([...blocks]);
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

  function close(data) {
    setOpenCreate(false);

    if (data && edit) {
      const new_blocks = blocks.map(block => {
        return block._id === edit._id ? { ...block, ...data } : block;
      });
      setBlocks(new_blocks);
    } else if (data) {
      setBlocks([...blocks, data]);
    }

    setEdit(null);
  }

  function openEdit(block) {
    setEdit(block);
    setOpenCreate(true);
  }

  function getContent() {
    if (content === 'config') {
      if (configurations.length === 0) {
        return <NoContent title="No configurations found" />
      } else {
        return configurations.map((config, i) => (
          <ConfigView
            key={ i }
            { ...config }
          />
        ));
      }
    } else if (content === 'blocks') {
      if (blocks.length === 0 && !openCreate) {
        return <NoContent title="No blocks found" />
      } else {
        return !openCreate && blocks.map((block, i) =>
          <CmsBlock
            key={ i }
            { ...block }
            openEdit={ () => openEdit(block) }
            deleteItem={ (e) => deleteBlock(e, block) }
          />
        )
      }
    }
  }

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      <AdminContent selected={1}>
        <div className={s.pages}>
        {t('helloworld')}
          <div className={s.switch}>
            <button
              onClick={() => setContent('config')}
              className={content === 'config' ? s.selected : ''}
            >
              <h3>Configurations</h3>
            </button>
            <button
              onClick={() => setContent('blocks')}
              className={content === 'blocks' ? s.selected : ''}
            >
              <h3>Blocks</h3>
            </button>
          </div>
          {!openCreate && content === 'blocks' &&
            <button className={s.createBlock} onClick={() => setOpenCreate(true)}>
              <h4>Create Block</h4>
            </button>
          }
          {getContent()}
          {openCreate && content === 'blocks' && <CreateBlock close={close} edit={edit}/>}
        </div>
      </AdminContent>
    </SearchContext.Provider>
  )
}


export default Configuration;
