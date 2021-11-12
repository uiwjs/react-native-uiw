import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@uiw/reset.css';
import { store } from './models';
import Controller from './routes/Controller';
import './index.css';

export type DefaultProps = React.PropsWithChildren<any> & {};

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Controller />
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
