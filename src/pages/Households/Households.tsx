/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { lazy, Suspense, useEffect, useRef } from 'react';
import Tab from '../../components/common/Tab';
import { createSearchParams, useNavigate, useParams, useSearchParams } from 'react-router-dom';
// import { useReactToPrint } from 'react-to-print';

import { Form, Spin } from 'antd';
import {
  PostUsersProfileParams,
  TypeBasicInformation,
  usePostUsersProfileMutation,
  // useUpdateUsersProfileMutation,
} from '../../redux/endpoints/userProflie';
import { CommonType, TypeContentHouseHold, TypeFormFutureHome, TypeFormLifeDiagnosis } from './type';
import { verifyBasicInformationValue } from '../../utils/adapterBasicInformation';
import { useNotificationContext } from '../../components/context/NotificationContext';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
// import { useHouseHoldsContext } from '../../components/context/HouseHoldsContext';
// import { useLazyGetMeQuery } from '../../redux/endpoints/user';
import { updateUserProfile } from '../../redux/slices/auth.slice';

const LifeDiagnosis = lazy(() => import('../../components/LifeDiagnosis'));
const ContentHouseholds = lazy(() => import('../../components/ContentHouseholds'));
const FutureHome = lazy(() => import('../../components/FutureHome'));

function Households() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  // const [spin, setSpin] = useState<boolean>(false);
  // const { data: user, isLoading } = useGetMeQuery();
  const ref = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  // const { formContentHouseholds: form } = useHouseHoldsContext();
  const { openNotification } = useNotificationContext();
  const [trigger, { isError, isSuccess }] = usePostUsersProfileMutation();

  // const handlePrint = useReactToPrint({
  //   content: () => ref?.current,
  //   copyStyles: true,
  //   onBeforeGetContent: () => setSpin(true),
  //   onAfterPrint: () => setSpin(false),
  // });
  useEffect(() => {
    if (isError) {
      openNotification.error({
        message: (
          <div className="mr-[20px]">
            診断は失敗しました。 診断を送信する前に必須項目を入力する必要があります。もう一度確認してください！
          </div>
        ),
        icon: (
          <svg
            aria-hidden="true"
            data-icon="close-circle"
            fill="currentColor"
            fillRule="evenodd"
            focusable="false"
            height="1em"
            viewBox="64 64 896 896"
            width="1em"
          >
            <path
              d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"
              fill="#ff4d4f"
            ></path>
          </svg>
        ),
      });
    }
    if (isSuccess) {
      openNotification.success({
        message: '診断の送るに成功',
        icon: (
          <svg
            aria-hidden="true"
            data-icon="check-circle"
            fill="currentColor"
            focusable="false"
            height="1em"
            viewBox="64 64 896 896"
            width="1em"
          >
            <path
              d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
              fill="#2c8d27"
            ></path>
          </svg>
        ),
      });
    }
  }, [isError, isSuccess]);

  return (
    <>
      <Form.Provider
        onFormFinish={(name, { values, forms }) => {
          let profileParams: PostUsersProfileParams;
          let basicInformation: TypeBasicInformation[] = [];
          const formContentHouseholds = forms.formContentHouseholds.getFieldsValue();
          const common: CommonType = formContentHouseholds.common;
          const formFutureHome: TypeFormFutureHome = forms.formFutureHome.getFieldsValue();
          const formLifeDiagnosis: TypeFormLifeDiagnosis = forms.formLifeDiagnosis.getFieldsValue();
          const none: TypeContentHouseHold = formContentHouseholds.people
            ? Object.assign.apply(Object, Object.values(formContentHouseholds?.people) as any)
            : null;
          const wife: TypeContentHouseHold = formContentHouseholds.wife
            ? Object.assign.apply(Object, Object.values(formContentHouseholds?.wife) as any)
            : null;
          const husband: TypeContentHouseHold = formContentHouseholds.husband
            ? Object.assign.apply(Object, Object.values(formContentHouseholds?.husband) as any)
            : null;
          // const age = values?.husband?.inforBasic?.age || values?.people?.inforBasic?.age;

          if (none) {
            const id = user?.userProfile
              ? user?.userProfile?.basicInformation?.find((e) => e.informationType === 'NONE')?.id
              : null;
            basicInformation = [verifyBasicInformationValue({ data: none, informationType: 'NONE', id })];
          }
          if (wife && husband && wife.lifeInsurance && husband.lifeInsurance) {
            const idWife = user?.userProfile
              ? user?.userProfile?.basicInformation?.find((e) => e.informationType === 'WIFE')?.id
              : null;
            const idHusband = user?.userProfile
              ? user?.userProfile?.basicInformation?.find((e) => e.informationType === 'HUSBAND')?.id
              : null;
            basicInformation = [
              verifyBasicInformationValue({ data: wife, informationType: 'WIFE', id: idWife }),
              verifyBasicInformationValue({ data: husband, informationType: 'HUSBAND', id: idHusband }),
            ];
          }

          if (name === 'formContentHouseholds') {
            // forms.formContentHouseholds.submit();

            forms.formFutureHome.setFieldValue(
              'age',
              values?.husband?.inforBasic?.age || values?.people?.inforBasic?.age
            );

            navigate({
              search: createSearchParams({
                step: '2',
              }).toString(),
            });
          }
          if (name === 'formFutureHome') {
            forms.formLifeDiagnosis.setFieldValue('maximum', Number(values?.retirementSaving?.maximum));
            forms.formLifeDiagnosis.setFieldValue('annual', values?.retirementSaving?.annual);
            navigate({
              search: createSearchParams({
                step: '3',
              }).toString(),
            });
          }
          if (name === 'formLifeDiagnosis') {
            // forms.formContentHouseholds.submit();

            profileParams = {
              basicInformation: basicInformation,
              newHomePlans: Object.values(common?.newHouseInfor.plannedNewHome ?? {}).map((e) => ({
                age: Number(e.age),
                name: e.relationship,
              })),
              budgetAmount: String(common?.newHouseInfor?.budget?.type),
              breakdown: common?.newHouseInfor?.budget?.breakdown,
              initialCost: common?.newHouseInfor?.budget?.initialCostMovingFee,
              householdApplianceCost: common?.newHouseInfor?.budget?.householdAppliancesCost,
              others: common?.newHouseInfor?.budget?.others,
              desiredRent: String(common?.newHouseInfor?.desiredRent?.type),
              selfPayAmount: common?.newHouseInfor?.desiredRent?.selfBurdenAmount,
              parking: common?.newHouseInfor?.desiredRent?.parking,
              desiredFloorPlan: common?.newHouseInfor?.desiredFloorPlan?.floorPlan,
              breadth: String(common?.newHouseInfor?.desiredFloorPlan?.breadth),
              desiredArea: common?.newHouseInfor?.desiredAreaConditions,
              newHouseMemo: common?.newHouseInfor?.memo,
              borrowings: Object.values(common?.scholarships?.borrowing ?? {}).map((e) => ({
                borrower: Number(e.borrower),
                remainingDebt: Number(e.remainingDebt),
                numberOfYearsLeft: Number(e.numberOfYearsLeft),
                monthly: Number(e.monthly),
                bonus: Number(e.bonus),
                delay: String(e.delay),
                guarantor: String(e.guarantor),
                kinds: Number(e.kinds),
                electric: Number(e.bonus),
              })),
              borrowingMemo: common?.scholarships?.memo,
              parkingLotConsumptionTax: common?.newHouseInfor?.desiredRent?.other,
              userType: slug === 'single' ? 'SINGLE' : 'MULTIPLE',
              gender: slug === 'single' ? none.gender : 'NONE',
              aboutFutureHome: {
                retirementLiveWith: formFutureHome.liveInRetirement,
                disadvantagesToOwning: formFutureHome.ownHome.have,
                disadvantagesToOwningMemo: formFutureHome.ownHome.note,
                planToBuyYourOwnHome: Number(formFutureHome.buyHome.age),
                planToBuyYourOwnHomeMemo: formFutureHome.buyHome.note,
                specificReasons: formFutureHome.reasonPurchasingHome,
                maximumMonthlySavings: Number(formFutureHome.retirementSaving.maximum),
                otherRequests: formFutureHome.other,
              },
              aboutLifeDiagnosis: {
                householdSavings: formLifeDiagnosis.householdFinance.savingStatus !== 'no',
                householdWasteful: formLifeDiagnosis.householdFinance.wastefulFixedCosts !== 'no',
                householdBudget: formLifeDiagnosis.householdFinance.variableCosts !== 'no',
                householdLoan: formLifeDiagnosis.householdFinance.loanDebt !== 'no',
                householdPreparingChild: formLifeDiagnosis.householdFinance.childbirthAndChildcare !== 'no',

                livingComfort: formLifeDiagnosis.livingEnvironment.comfort !== 'no',
                livingHealthConsideration: formLifeDiagnosis.livingEnvironment.healthConsiderations !== 'no',
                livingHouseworkEfficiency: formLifeDiagnosis.livingEnvironment.housework !== 'no',
                livingPrivateLife: formLifeDiagnosis.livingEnvironment.fulfillmentofPrivateLife !== 'no',
                livingStorageCapacity: formLifeDiagnosis.livingEnvironment.spaceStorageCapacity !== 'no',
                livingPreparingChild: formLifeDiagnosis.livingEnvironment?.childbirthAndChildcare !== 'no',

                emergencyUnnecessaryPayments: formLifeDiagnosis.regardingMeasures.necessarySecurity !== 'no',
                emergencySecuringHousing: formLifeDiagnosis.regardingMeasures.survivingFamily !== 'no',

                retirementSavings: formLifeDiagnosis.retirementMeasures.retirementSaving !== 'no',
                retirementOperational: formLifeDiagnosis.retirementMeasures.operationalFunds !== 'no',
                retirementAsset: formLifeDiagnosis.retirementMeasures.assetFormation !== 'no',
                retirementExpenses: formLifeDiagnosis.retirementMeasures.reducingExpensesInRetirement !== 'no',
                retirementSecuring: formLifeDiagnosis.retirementMeasures.securingHousingForRetirement !== 'no',

                countermeasureEarthquake: formLifeDiagnosis.disasterCountermeasures.earthquakeFireTyphoon !== 'no',
                countermeasureSecuringLifelines: formLifeDiagnosis.disasterCountermeasures.securingaLifeline !== 'no',
                countermeasureStorageSpace:
                  formLifeDiagnosis.disasterCountermeasures.foodStockpilingAndDisasterPrevention !== 'no',
                countermeasureSecuringFundS: formLifeDiagnosis.disasterCountermeasures.securingFunds !== 'no',

                measureSelfCatering: formLifeDiagnosis.healthMeasures.selfCateringEnvironment !== 'no',
                measureImmunityBoosting: formLifeDiagnosis.healthMeasures.immunityUpEnvironment !== 'no',
              },
              tax: formContentHouseholds.tax,
              electricBill: formContentHouseholds.electricBill,
            };

            dispatch(updateUserProfile({ userProfile: profileParams }));
            trigger(profileParams)
              .unwrap()
              .then(() => {
                navigate({
                  pathname: '/diagnosis',
                  search: createSearchParams({
                    query: JSON.stringify({
                      slug: slug as string,
                      fixCost: formContentHouseholds.fixCost,
                      budget: common.newHouseInfor.budget.type,
                    }),
                  }).toString(),
                });
              });
            // .finally(() => dispatch(updateUserProfile({ userProfile: profileParams })));
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
            // onChange={(e) => {
            //   if (e === '2') {
            //     form?.submit();
            //   }
            // }}
          />
          {/* </Spin> */}
        </div>
      </Form.Provider>
    </>
  );
}

export default Households;
