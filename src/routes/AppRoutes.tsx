import { Redirect, Switch, Route, useLocation } from 'react-router-dom';
import { appRoutes } from './routes.model';
import { useEffect } from 'react';

const AppRoutes = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!pathname) return;

    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Switch>
      <Redirect exact path="/" to="/main" />
      {appRoutes.map(({ exact = true, path, component: Component }) => (
        <Route exact={exact} path={path} key={path}>
          <Component />
        </Route>
      ))}
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default AppRoutes;
