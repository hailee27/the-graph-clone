import React, { useEffect } from 'react';
import { useNavigate, useRoutes } from 'react-router-dom';
import { routeConfig } from './routes/routeConfig';
import PrimaryLayout from './components/layout/PrimaryLayout';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { HouseHoldsProvider } from './components/context/HouseHoldsContext';

function App() {
  const { accessToken } = useSelector((state: RootState) => state.auth);
  const routesPrivate = useRoutes(routeConfig.private);
  const routesPublic = useRoutes(routeConfig.public);
  const navigate = useNavigate();
  useEffect(() => {
    if (!accessToken) {
      navigate('/');
    }
  }, [accessToken]);

  return (
    <>
      {accessToken ? (
        <HouseHoldsProvider>
          <PrimaryLayout>{routesPrivate}</PrimaryLayout>
        </HouseHoldsProvider>
      ) : (
        <div className="bg-tertiary-thin">{routesPublic}</div>
      )}
    </>
  );
}

export default App;
