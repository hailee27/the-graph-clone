import { RouteObject } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import ForgotPasswordPage from '../pages/ForgotPassword';
import HouseholdsPage from '../pages/Households';
import Diagnosis from '../pages/Diagnosis';

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
      path: '/house-holds/:slug',
      element: <HouseholdsPage />,
    },
    {
      path: '/diagnosis',
      element: <Diagnosis />,
    },

    {
      path: '*',
      element: <NotFound />,
    },
  ],
  public: [
    { path: '/', element: <LoginPage /> },
    { path: '/forgot-password', element: <ForgotPasswordPage /> },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
};
