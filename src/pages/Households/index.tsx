import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Households from './Households';
import { HouseHoldsProvider } from '../../components/context/HouseHoldsContext';

function HouseholdsPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug !== 'single' && slug !== 'multiple') {
      navigate('/');
    }
  }, [slug]);

  return (
    <HouseHoldsProvider>
      <Households />
    </HouseHoldsProvider>
  );
}

export default HouseholdsPage;
