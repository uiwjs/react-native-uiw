import { Switch, Route, Redirect } from 'react-router-dom';
import { getRouterData } from '../routes/router';
import { DefaultProps } from '../';

type Props = {
  routerData: typeof getRouterData;
} & DefaultProps;

export default function Controller(props: Props) {
  const { routerData } = props || {};
  const BasicLayout: any = routerData['/'].component;

  return (
    <Switch>
      <Route exact path="/components" render={() => <Redirect to="/components/about" />} />
      <Route exact path="/docs" render={() => <Redirect to="/docs/getting-started" />} />
      <Route path="/" render={(props) => <BasicLayout {...props} routerData={routerData} />} />
    </Switch>
  );
}
