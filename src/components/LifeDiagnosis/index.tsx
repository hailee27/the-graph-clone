import { Form } from 'antd';
import React, { useMemo } from 'react';
import BasicButton from '../common/BasicButton';
import FormHouseHoldAndLivingEnvironmant from './FormHouseHoldAndLivingEnvironmant';
import Form4MajorRisksOfLife from './Form4MajorRisksOfLife';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

function LifeDiagnosis() {
  const [form] = Form.useForm();
  const { user } = useSelector((state: RootState) => state.auth);

  const initialValues = useMemo(
    () => ({
      householdFinance: {
        savingStatus: !user?.userProfile?.aboutLifeDiagnosis?.householdSavings ? 'no' : 'yes',
        wastefulFixedCosts: !user?.userProfile?.aboutLifeDiagnosis?.householdWasteful ? 'no' : 'yes',
        variableCosts: !user?.userProfile?.aboutLifeDiagnosis?.householdBudget ? 'no' : 'yes',
        loanDebt: !user?.userProfile?.aboutLifeDiagnosis?.householdLoan ? 'no' : 'yes',
        childbirthAndChildcare: !user?.userProfile?.aboutLifeDiagnosis?.householdPreparingChild ? 'no' : 'yes',
      },
      livingEnvironment: {
        comfort: !user?.userProfile?.aboutLifeDiagnosis?.livingComfort ? 'no' : 'yes',
        healthConsiderations: !user?.userProfile?.aboutLifeDiagnosis?.livingHealthConsideration ? 'no' : 'yes',
        housework: !user?.userProfile?.aboutLifeDiagnosis?.livingHouseworkEfficiency ? 'no' : 'yes',
        fulfillmentofPrivateLife: !user?.userProfile?.aboutLifeDiagnosis?.livingPrivateLife ? 'no' : 'yes',
        spaceStorageCapacity: !user?.userProfile?.aboutLifeDiagnosis?.livingStorageCapacity ? 'no' : 'yes',
        childbirthAndChildcare: !user?.userProfile?.aboutLifeDiagnosis?.livingPreparingChild ? 'no' : 'yes',
      },

      regardingMeasures: {
        necessarySecurity: !user?.userProfile?.aboutLifeDiagnosis?.emergencyUnnecessaryPayments ? 'no' : 'yes',
        survivingFamily: !user?.userProfile?.aboutLifeDiagnosis?.emergencySecuringHousing ? 'no' : 'yes',
      },

      retirementMeasures: {
        retirementSaving: !user?.userProfile?.aboutLifeDiagnosis?.retirementSavings ? 'no' : 'yes',
        operationalFunds: !user?.userProfile?.aboutLifeDiagnosis?.retirementOperational ? 'no' : 'yes',
        assetFormation: !user?.userProfile?.aboutLifeDiagnosis?.retirementAsset ? 'no' : 'yes',
        reducingExpensesInRetirement: !user?.userProfile?.aboutLifeDiagnosis?.retirementExpenses ? 'no' : 'yes',
        securingHousingForRetirement: !user?.userProfile?.aboutLifeDiagnosis?.retirementSecuring ? 'no' : 'yes',
      },

      disasterCountermeasures: {
        earthquakeFireTyphoon: !user?.userProfile?.aboutLifeDiagnosis?.countermeasureEarthquake ? 'no' : 'yes',
        securingaLifeline: !user?.userProfile?.aboutLifeDiagnosis?.countermeasureSecuringLifelines ? 'no' : 'yes',
        foodStockpilingAndDisasterPrevention: !user?.userProfile?.aboutLifeDiagnosis?.countermeasureStorageSpace
          ? 'no'
          : 'yes',
        securingFunds: !user?.userProfile?.aboutLifeDiagnosis?.countermeasureSecuringFundS ? 'no' : 'yes',
      },

      healthMeasures: {
        selfCateringEnvironment: !user?.userProfile?.aboutLifeDiagnosis?.measureSelfCatering ? 'no' : 'yes',
        immunityUpEnvironment: !user?.userProfile?.aboutLifeDiagnosis?.measureImmunityBoosting ? 'no' : 'yes',
      },
    }),
    [user?.userProfile]
  );

  return (
    <>
      <div className="rounded-r-[16px] rounded-bl-[16px] bg-[#ffffff]  w-full px-[48px] pt-[56px] print:p-0 print:break-before-page pb-[80px]">
        <h2 className="text-[26px] font-bold text-center">「人生１００年時代を幸せに生きる為に押さえるべき６項目」</h2>

        <Form className="mt-[64px] " form={form} initialValues={initialValues} name="formLifeDiagnosis">
          <FormHouseHoldAndLivingEnvironmant />
          <div className="mt-[56px] print:mt-0  print:break-before-page">
            <Form4MajorRisksOfLife />
          </div>
        </Form>
      </div>
      <div className="flex items-center justify-center mt-[80px] mb-[200px]  print:hidden">
        <BasicButton className="h-[77px] w-[400px]" onClick={() => form.submit()} type="secondary">
          <div className="flex items-center justify-center space-x-[10px]">
            <span className="text-[18px] font-bold text-[#ffffff]">診断する</span>
            <svg fill="none" height="8" viewBox="0 0 6 8" width="6" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.8764 3.18912C5.42946 3.58825 5.42946 4.41175 4.87641 4.81088L1.58521 7.1861C0.923842 7.6634 9.76746e-08 7.19083 8.79486e-08 6.37522L3.13002e-08 1.62478C2.15742e-08 0.809174 0.923841 0.336598 1.58521 0.813896L4.8764 3.18912Z"
                fill="white"
              />
            </svg>
          </div>
        </BasicButton>
      </div>
    </>
  );
}

export default LifeDiagnosis;
