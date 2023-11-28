import { Form } from 'antd';
import React, { useMemo } from 'react';
import FormFutureHome from './FormFutureHome';
import BasicButton from '../common/BasicButton';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

function FutureHome() {
  const [form] = Form.useForm();
  const { user } = useSelector((state: RootState) => state.auth);

  const initialValues = useMemo(() => {
    return {
      liveInRetirement: user?.userProfile?.aboutFutureHome?.retirementLiveWith,
      reasonPurchasingHome: user?.userProfile?.aboutFutureHome?.specificReasons,
      buyHome: {
        age: String(user?.userProfile?.aboutFutureHome?.planToBuyYourOwnHome),
        note: user?.userProfile?.aboutFutureHome?.disadvantagesToOwningMemo,
      },
      ownHome: {
        have: user?.userProfile?.aboutFutureHome?.disadvantagesToOwning,
        note: user?.userProfile?.aboutFutureHome?.disadvantagesToOwningMemo,
      },
      retirementSaving: {
        maximum: user?.userProfile?.aboutFutureHome?.maximumMonthlySavings,
      },
      other: user?.userProfile?.aboutFutureHome?.otherRequests,
    };
  }, []);

  return (
    <>
      <div className="rounded-r-[16px] rounded-bl-[16px] bg-[#ffffff]  w-full px-[48px] py-[56px] print:p-0">
        <div className="bg-primary px-[24px] py-[20px] text-[#ffffff] text-[20px] font-bold leading-5 rounded-[4px] mb-[54px]">
          将来の住まいのご予定をお聞かせください
        </div>
        {/* eslint-disable-next-line no-console */}
        <Form form={form} initialValues={initialValues} name="formFutureHome" onFinish={(e) => console.log(e)}>
          <FormFutureHome />
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

export default FutureHome;
