import { RouteObject } from 'react-router-dom';
import HomePage from '../pages/Home';

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
      element: <div />,
    },
  ],
  public: [
    {
      path: '*',
      element: <HomePage />,
    },
  ],
};
