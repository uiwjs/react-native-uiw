import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import '@uiw/reset.css';
import Controller from './routes/Controller';
import './index.css';

export type DefaultProps = React.PropsWithChildren<any> & {};

ReactDOM.render(
  <HashRouter>
    <Controller />
  </HashRouter>,
  document.getElementById('root'),
);
