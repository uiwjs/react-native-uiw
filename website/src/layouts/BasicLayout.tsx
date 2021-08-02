import { Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { DefaultProps } from '../';
import { RouterData } from '../routes/router';
import Container from '../component/Container';
import { componentMenus, docsMenus } from '../routes/menus';

function BasicLayout(props: DefaultProps) {
  const { routerData, location } = props || {};
  const RouteComponents: JSX.Element[] = [];
  let data = undefined;

  if (/^(\/components)/.test(location.pathname)) {
    data = componentMenus;
  }
  if (/^(\/docs)/.test(location.pathname)) {
    data = docsMenus;
  }
  Object.keys(routerData).forEach((path, idx) => {
    if (path === '/') {
      RouteComponents.push(<Route exact key={idx + 1} path="/" render={() => <Redirect to="/home" />} />);
    } else {
      RouteComponents.push(
        <Route
          exact
          key={idx + 1}
          path={path}
          render={(props: RouteComponentProps<any>) => {
            const ChildComp = routerData[path as keyof RouterData].component as any;
            // 可以给子组件传一些参数如： isNavShow=true
            return <ChildComp {...props} isNavShow />;
          }}
        />,
      );
    }
  });
  return (
    <Container data={data} path={location.pathname}>
      <Switch>{RouteComponents}</Switch>
    </Container>
  );
}

export default BasicLayout;
