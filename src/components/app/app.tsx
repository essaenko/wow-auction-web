import React from 'react';
import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom';

import {AuthRegistration} from "../auth/auth.registration";

import css from './app.module.css';

export const App = (): JSX.Element => {
  return (
    <div className={css.root}>
      <Router>
        <Routes>
          <Route path={'/auth/register'} element={<AuthRegistration />} />
        </Routes>
      </Router>
    </div>
  );
}
