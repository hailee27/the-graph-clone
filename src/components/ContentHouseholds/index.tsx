import React, { useMemo } from 'react';
import FormInformationBasic from './FormInformationBasic';
import { Form } from 'antd';
import BasicButton from '../common/BasicButton';
import FormWorkInformation from './FormWorkInformation';
import FormFamilyInformation from './FormFamilyInformation';
import FormNewHouseInformation from './FormNewHouseInformation';
import FormScholarships from './FormScholarships';
import CardFix from './CardFix';
import { useParams } from 'react-router-dom';
import BasicInput from '../common/BasicInput';

function ContentHouseholds() {
  const [form] = Form.useForm();
  const { slug } = useParams();
  const typeContent = useMemo<'single' | 'multiple' | string>(() => {
    if (slug) {
      return slug;
    }
    return 'single';
  }, [slug]);

  return (
    <div>
      <div className="rounded-r-[16px] rounded-bl-[16px] bg-[#ffffff]  w-full px-[48px] py-[56px]">
        <Form
          form={form}
          // eslint-disable-next-line no-console
          onFinish={(e) => console.log(e)}
          scrollToFirstError={{ behavior: 'smooth', block: 'center', inline: 'center' }}
        >
          <FormInformationBasic typeContent={typeContent} />
          <div className="mt-[68px]">
            <FormWorkInformation typeContent={typeContent} />
          </div>
          <div className="mt-[68px]">
            <FormFamilyInformation typeContent={typeContent} />
          </div>
          <div className="mt-[68px]">
            <FormNewHouseInformation />
          </div>
          <FormScholarships />
        </Form>
      </div>
      <div className="mt-[24px] bg-[#ffffff] min-h-[585px] rounded-[16px] flex items-center justify-center flex-col">
        <h2 className="font-bold text-[40px] text-primary pb-[64px]">新生活で毎月支払う固定費</h2>
        <div className="flex justify-between space-x-[8px]">
          <CardFix
            content={
              <span className="text-[48px] font-bold">
                0<span className="text-[24px] ml-[8px]">円</span>
              </span>
            }
            title="希望家賃"
          />
          <CardFix
            content={
              <span className="text-[48px] font-bold">
                0<span className="text-[24px] ml-[8px]">円</span>
              </span>
            }
            title="希望家賃"
          />
          <CardFix
            content={
              <span className="text-[48px] font-bold">
                0<span className="text-[24px] ml-[8px]">円</span>
              </span>
            }
            title="希望家賃"
          />
          <CardFix
            content={
              <div className="px-[34px] flex space-x-[8px] items-center">
                <BasicInput className="bg-primary-light" placeholder="10,000" />
                <span className="text-[14px] font-bold">円</span>
              </div>
            }
            title="希望家賃"
          />
          <CardFix
            content={
              <div className="px-[34px] flex space-x-[8px] items-center">
                <BasicInput className="bg-primary-light" placeholder="10,000" />
                <span className="text-[14px] font-bold">円</span>
              </div>
            }
            title="希望家賃"
          />
        </div>
        <div className="flex space-x-[40px] max-h-[51px] mt-[40px]">
          <div className="flex items-end justify-center space-x-[36px] ">
            <span className=" underline underline-offset-[14px] text-primary text-[24px] font-bold">合計</span>
            <span className="text-[70px] font-bold leading-[32px]">
              0<span className="text-[40px] ml-[8px]">円</span>
            </span>
          </div>
          <div className="flex items-center justify-center space-x-[36px] ">
            <div className="flex flex-col">
              <span className=" text-primary text-[14px] font-bold">二人の手取り給与に</span>
              <span className=" text-primary text-[14px] font-bold underline underline-offset-[14px]">
                対する固定費の割合
              </span>
            </div>
            <div>
              <span className="text-[70px] font-bold leading-normal">
                0<span className="text-[40px] ml-[8px]">%</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-[80px] mb-[200px]">
        <BasicButton className="h-[77px] w-[400px]" onClick={() => form.submit()} type="secondary">
          <div className="flex items-center justify-center space-x-[10px]">
            <span className="text-[18px] font-bold">診断する</span>
            <svg fill="none" height="8" viewBox="0 0 6 8" width="6" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.8764 3.18912C5.42946 3.58825 5.42946 4.41175 4.87641 4.81088L1.58521 7.1861C0.923842 7.6634 9.76746e-08 7.19083 8.79486e-08 6.37522L3.13002e-08 1.62478C2.15742e-08 0.809174 0.923841 0.336598 1.58521 0.813896L4.8764 3.18912Z"
                fill="white"
              />
            </svg>
          </div>
        </BasicButton>
      </div>
    </div>
  );
}

export default ContentHouseholds;
