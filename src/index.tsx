///<reference types="webpack-env" />

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement
);

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  if (module.hot) { module.hot.accept(); }
}