import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, withRouter, RouteComponentProps } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@uiw/reset.css';
import './index.css';
import { store } from './models';
import Controller from './routes/Controller';
import { getRouterData } from './routes/router';

export type DefaultProps = React.PropsWithChildren<RouteComponentProps<any>> & {
  routerData: typeof getRouterData;
};

const Container = withRouter((props) => {
  const routerData = getRouterData;
  const resetProps: DefaultProps = { ...props, routerData };
  return <Controller {...resetProps} />;
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Container />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
