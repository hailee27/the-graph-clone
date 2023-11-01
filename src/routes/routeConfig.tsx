import { RouteObject } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';

interface TypeRouteConFig {
  private: RouteObject[];
  public: RouteObject[];
}
export const routeConfig: TypeRouteConFig = {
  private: [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
  public: [{ path: '/', element: <LoginPage /> }],
};
