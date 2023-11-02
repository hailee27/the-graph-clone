import React from 'react';
import { useParams } from 'react-router-dom';
import Tab from '../../components/common/Tab';
import ContentHouseholds from '../../components/ContentHouseholds';

function Households() {
  const { slug } = useParams();
  return (
    <div className="mt-[40px] px-[48px]">
      <Tab
        defaultValue="1"
        items={[
          { key: '1', label: 'alo', children: <ContentHouseholds /> },
          { key: '2', label: 'alo2', children: <ContentHouseholds /> },
          { key: '3', label: 'alo4', children: <ContentHouseholds /> },
        ]}
      />
    </div>
  );
}

export default Households;
