import { useState } from 'react';
import axios from 'axios';
import { useIntl } from "react-intl";
import { useAlert } from 'react-alert';
import Input from '../../components/inputs/input';

import s from '../../styles/pages/dashboard/login.module.scss';

function Login() {
  const alert = useAlert();
  const { formatMessage } = useIntl();
  const t = id => formatMessage({ id });

  const [username, setUsername] = useState('oleh308');
  const [password, setPassword] = useState('123456');

  async function login() {
    try {
      const data = { username, password };
      await axios.post('/api/admins/login', data);
      location.reload();
    } catch (error) {
      if (error.response) {
        alert.show(JSON.stringify(error.response.data), {
          title: 'Server Error'
        });
      } else {
        alert.show(error.message, {
          title: 'Website Error'
        });
      }
    }
  }

  return (
    <main className={s.login}>
      <form className={s.form}>
        <h2>Login</h2>
        <Input
          value={ username }
          title={ t('username') }
          update={ setUsername }
        />
        <Input
          value={ password }
          type={ 'password' }
          title={ t('password') }
          update={ setPassword }
        />
        <button type="button" onClick={login}>Login</button>
      </form>
    </main>
  )
}

export default Login;
