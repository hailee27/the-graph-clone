import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Households from './Households';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

function HouseholdsPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (slug !== 'single' && slug !== 'multiple') {
      navigate('/');
    }
  }, [slug]);
  useEffect(() => {
    if (user?.userProfile) {
      if (user.userProfile.userType === 'SINGLE') {
        navigate('/house-holds/single');
      } else {
        navigate('/house-holds/multiple');
      }
    }
  }, [user?.userProfile]);

  return <Households />;
}

export default HouseholdsPage;
