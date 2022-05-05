import React, {useState} from 'react';

import css from './auth.registration.module.css';

export const AuthRegistration = (): JSX.Element => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <div className={css.root}>
      <form>
        <label>
          Login
          <input type="text" value={login} onChange={({ target: { value } }) => setLogin(value)} />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={({ target: { value } }) => setPassword(value)} />
        </label>
      </form>
    </div>
  )
}