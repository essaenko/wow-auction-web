import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import css from './app.module.css';

export const App = (): JSX.Element => {
  return (
    <div className={css.root}>
      <Router>
        <Routes>
          <Route path="/" element={<>Hello World</>} />
        </Routes>
      </Router>
    </div>
  );
};
