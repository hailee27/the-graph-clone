import { Form } from 'antd';
import React from 'react';
import BasicButton from '../common/BasicButton';
import FormHouseHoldAndLivingEnvironmant from './FormHouseHoldAndLivingEnvironmant';
import Form4MajorRisksOfLife from './Form4MajorRisksOfLife';

function LifeDiagnosis() {
  const [form] = Form.useForm();

  return (
    <>
      <div className="rounded-r-[16px] rounded-bl-[16px] bg-[#ffffff]  w-full px-[48px] pt-[56px] print:p-0 print:break-before-page pb-[80px]">
        <h2 className="text-[26px] font-bold text-center">「人生１００年時代を幸せに生きる為に押さえるべき６項目」</h2>

        <Form className="mt-[64px] " form={form} name="formLifeDiagnosis">
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
