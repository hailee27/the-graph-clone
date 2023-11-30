import React, { useEffect } from 'react';
import { useNavigate, useRoutes } from 'react-router-dom';
import { routeConfig } from './routes/routeConfig';
import PrimaryLayout from './components/layout/PrimaryLayout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { useLazyGetMeQuery } from './redux/endpoints/user';
import { Spin } from 'antd';
import { updateUserProfile } from './redux/slices/auth.slice';

function App() {
  const { accessToken } = useSelector((state: RootState) => state.auth);
  const routesPrivate = useRoutes(routeConfig.private);
  const routesPublic = useRoutes(routeConfig.public);
  const navigate = useNavigate();
  const [trigger, { isLoading }] = useLazyGetMeQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!accessToken) {
      navigate('/');
    } else {
      trigger()
        .unwrap()
        .then((res) => dispatch(updateUserProfile(res ?? {})));
    }
  }, [accessToken]);

  return (
    <Spin spinning={isLoading}>
      {accessToken ? (
        <PrimaryLayout>{routesPrivate}</PrimaryLayout>
      ) : (
        <div className="bg-tertiary-thin">{routesPublic}</div>
      )}
    </Spin>
  );
}

export default App;
