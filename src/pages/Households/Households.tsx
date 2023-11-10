import React, { lazy, Suspense } from 'react';
import Tab from '../../components/common/Tab';
import { useParams } from 'react-router-dom';

const LifeDiagnosis = lazy(() => import('../../components/LifeDiagnosis'));
const ContentHouseholds = lazy(() => import('../../components/ContentHouseholds'));
const FutureHome = lazy(() => import('../../components/FutureHome'));

function Households() {
  const { slug } = useParams();
  return (
    <div className="mt-[40px]  max-w-[1344px] w-full ">
      <Tab
        defaultValue="1"
        items={[
          {
            key: '1',
            label: slug === 'multiple' ? 'ライフメイクカルテ（一般世帯）' : 'ライフメイクカルテ（単身世帯）',
            children: (
              <Suspense fallback={<div>loading...</div>}>
                <ContentHouseholds />
              </Suspense>
            ),
          },
          {
            key: '2',
            label: '将来のお住まいについて',
            children: (
              <Suspense fallback={<div>loading...</div>}>
                <FutureHome />
              </Suspense>
            ),
          },
          {
            key: '3',
            label: '人生診断について',
            children: (
              <Suspense fallback={<div>loading...</div>}>
                <LifeDiagnosis />
              </Suspense>
            ),
          },
        ]}
      />
    </div>
  );
}

export default Households;
