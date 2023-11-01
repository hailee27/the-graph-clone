import React from 'react';
import { useRoutes } from 'react-router-dom';
import { routeConfig } from './routes/routeConfig';
import PrimaryLayout from './components/layout/PrimaryLayout';

function App() {
  const token = false;
  const routesPrivate = useRoutes(routeConfig.private);
  const routesPublic = useRoutes(routeConfig.public);
  return (
    <>
      {token ? <PrimaryLayout>{routesPrivate}</PrimaryLayout> : <div className="bg-tertiary-thin">{routesPublic}</div>}
    </>
  );
}

export default App;
