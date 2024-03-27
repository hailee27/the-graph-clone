import React from 'react';
import { useRoutes } from 'react-router-dom';
import { routeConfig } from './routes/routeConfig';
import PrimaryLayout from './components/layout/PrimaryLayout';

function App() {
  const routesPublic = useRoutes(routeConfig.public);

  return <PrimaryLayout>{routesPublic}</PrimaryLayout>;
}

export default App;
