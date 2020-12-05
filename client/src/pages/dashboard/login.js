import { useState } from 'react';
import axios from 'axios';
import { useAlert } from 'react-alert'

import s from '../../styles/pages/dashboard/login.module.scss';

function Login() {
  const alert = useAlert();
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
        <label htmlFor="email">Username</label>
        <input type="text" value={username}
          onChange={e => setUsername(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" value={password}
          onChange={e => setPassword(e.target.value)} />
        <button type="button" onClick={login}>Login</button>
      </form>
    </main>
  )
}

export default Login;
