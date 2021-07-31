import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { getRouterData } from '../routes/router';
import { DefaultProps } from '../';

type Props = {
  routerData: typeof getRouterData;
} & DefaultProps;

export default function Controller(props: Props) {
  const { routerData } = props || {};
  const BasicLayout: any = routerData['/'].component;
  const ComponentsLayout: any = routerData['/components'].component;
  return (
    <Switch>
      <Route path="/components" render={(props) => <ComponentsLayout {...props} routerData={routerData} />} />
      <Route path="/" render={(props) => <BasicLayout {...props} routerData={routerData} />} />
    </Switch>
  );
}
