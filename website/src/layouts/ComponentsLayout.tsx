import { Switch, Route } from 'react-router-dom';
import { DefaultProps } from '../';
import { RouterData } from '../routes/router';
import Container from '../component/Container';
import { componentMenus } from '../routes/menus';

function ComponentsLayout(props: DefaultProps) {
  const { routerData } = props || {};
  const RouteComponents: JSX.Element[] = [];
  Object.keys(routerData).forEach((path, idx) => {
    if (/^(\/components)/.test(path) && !/^(\/components)$/.test(path)) {
      RouteComponents.push(
        <Route exact key={idx + 1} path={path} component={routerData[path as keyof RouterData].component as any} />,
      );
    }
  });
  return (
    <Container data={componentMenus}>
      <Switch>{RouteComponents}</Switch>
    </Container>
  );
}

export default ComponentsLayout;
