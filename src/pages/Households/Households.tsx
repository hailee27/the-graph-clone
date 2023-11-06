import React, { lazy, Suspense } from 'react';
import Tab from '../../components/common/Tab';

const ContentHouseholds = lazy(() => import('../../components/ContentHouseholds'));

function Households() {
  return (
    <div className="mt-[40px]  max-w-[1344px] w-full">
      <Tab
        defaultValue="1"
        items={[
          {
            key: '1',
            label: 'alo',
            children: (
              <Suspense fallback={<div>loading...</div>}>
                <ContentHouseholds />
              </Suspense>
            ),
          },
          { key: '2', label: 'alo2', children: <div /> },
          { key: '3', label: 'alo4', children: <div /> },
        ]}
      />
    </div>
  );
}

export default Households;
