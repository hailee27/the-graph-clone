import React, { lazy, Suspense, useRef } from 'react';
import Tab from '../../components/common/Tab';
import { createSearchParams, useNavigate, useParams, useSearchParams } from 'react-router-dom';
// import { useReactToPrint } from 'react-to-print';

import { Form, Spin } from 'antd';

const LifeDiagnosis = lazy(() => import('../../components/LifeDiagnosis'));
const ContentHouseholds = lazy(() => import('../../components/ContentHouseholds'));
const FutureHome = lazy(() => import('../../components/FutureHome'));

function Households() {
  const { slug } = useParams();
  // const [spin, setSpin] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // const handlePrint = useReactToPrint({
  //   content: () => ref?.current,
  //   copyStyles: true,
  //   onBeforeGetContent: () => setSpin(true),
  //   onAfterPrint: () => setSpin(false),
  // });

  return (
    <>
      <Form.Provider
        onFormFinish={(name, { values }) => {
          if (name === 'formContentHouseholds') {
            const age = values?.husband?.inforBasic?.age || values?.people?.inforBasic?.age;
            navigate({
              search: createSearchParams({
                step: '2',
                age,
              }).toString(),
            });
          }
          if (name === 'formFutureHome') {
            navigate({
              search: createSearchParams({
                step: '3',
                annual: values?.retirementSaving?.annual,
                untilAge60: values?.retirementSaving?.untilAge60,
              }).toString(),
            });
          }
          if (name === 'formLifeDiagnosis') {
            navigate({
              pathname: '/diagnosis',
              search: createSearchParams({
                slug: slug as string,
              }).toString(),
            });
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });

          // setSpin(true);
          // handlePrint();
        }}
      >
        <div className="mt-[40px] print:mt-0 w-full" ref={ref}>
          {/* <Spin size="large" spinning={spin}> */}
          <Tab
            defaultValue={searchParams.get('step') ?? '1'}
            items={[
              {
                key: '1',
                label: slug === 'multiple' ? 'ライフメイクカルテ（一般世帯）' : 'ライフメイクカルテ（複数世帯）',
                children: (
                  <Suspense
                    fallback={
                      <Spin size="large">
                        <div className="w-screen h-screen"></div>
                      </Spin>
                    }
                  >
                    <ContentHouseholds />
                  </Suspense>
                ),
              },
              {
                key: '2',
                label: '将来のお住まいについて',
                children: (
                  <Suspense
                    fallback={
                      <Spin size="large">
                        <div className="w-screen h-screen"></div>
                      </Spin>
                    }
                  >
                    <FutureHome />
                  </Suspense>
                ),
              },
              {
                key: '3',
                label: '人生診断について',
                children: (
                  <Suspense
                    fallback={
                      <Spin size="large">
                        <div className="w-screen h-screen"></div>
                      </Spin>
                    }
                  >
                    <LifeDiagnosis />
                  </Suspense>
                ),
              },
            ]}
          />
          {/* </Spin> */}
        </div>
      </Form.Provider>
    </>
  );
}

export default Households;
