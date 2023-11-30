import React, { useEffect } from 'react';

import Home from './Home';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

function HomePage() {
  const { user } = useSelector((state: RootState) => state.auth);

  const navigate = useNavigate();
  useEffect(() => {
    if (user?.userProfile) {
      if (user.userProfile.userType === 'SINGLE') {
        navigate('/house-holds/single');
      } else {
        navigate('/house-holds/multiple');
      }
    }
  }, [user?.userProfile]);
  return <Home />;
}

export default HomePage;
