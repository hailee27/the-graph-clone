import React, { useEffect, useMemo } from 'react';
import FormInformationBasic from './FormInformationBasic';
import BasicButton from '../common/BasicButton';
import FormWorkInformation from './FormWorkInformation';
import FormFamilyInformation from './FormFamilyInformation';
import FormNewHouseInformation from './FormNewHouseInformation';
import FormScholarships from './FormScholarships';
import CardFix from './CardFix';
import BasicInput from '../common/BasicInput';
import { Form } from 'antd';
import { useParams } from 'react-router-dom';
import { formatNumber } from '../../utils/formatNumber';
import Currency from '../common/Currency';

function ContentHouseholds() {
  const { slug } = useParams();
  const [form] = Form.useForm();
  const RegexKatakanaHalfWidth = /^[ｧ-ﾝﾞﾟ]|[0-9]+$/;
  const desiredRentWatch = Form.useWatch(['common', 'newHouseInfor', 'desiredRent', 'type'], form);
  // lifeInsurancePremium
  const peopleLifeInsuranceTypeWatch = Form.useWatch(['people', 'inforBasic', 'lifeInsurancePremium'], form);
  const husbandLifeInsuranceTypeWatch = Form.useWatch(['husband', 'inforBasic', 'lifeInsurancePremium'], form);
  const wifeLifeInsuranceTypeWatch = Form.useWatch(['wife', 'inforBasic', 'lifeInsurancePremium'], form);
  // monthlytakehomePay
  const peopleMonthlytakehomePay = Form.useWatch(['people', 'workInfor', 'salary', 'monthlytakehomePay'], form);
  const husbandMonthlytakehomePay = Form.useWatch(['husband', 'workInfor', 'salary', 'monthlytakehomePay'], form);
  const wifeMonthlytakehomePay = Form.useWatch(['wife', 'workInfor', 'salary', 'monthlytakehomePay'], form);

  const monthlyWatch = Form.useWatch(['common', 'scholarships', 'borrowing', 'monthly'], form);

  const lifeInsurancePremiumWatch = Form.useWatch('lifeInsurancePremium', form);
  const electricBillWatch = Form.useWatch('electricBill', form);
  const taxWatch = Form.useWatch('tax', form);

  const typeContent = useMemo<'single' | 'multiple' | string>(() => {
    if (slug) {
      return slug;
    }
    return 'single';
  }, [slug]);

  const totalmonths = useMemo(() => {
    return (
      Number(husbandMonthlytakehomePay ?? 0) + Number(wifeMonthlytakehomePay ?? 0) ||
      Number(peopleMonthlytakehomePay ?? 0)
    );
  }, [husbandMonthlytakehomePay, wifeMonthlytakehomePay, peopleMonthlytakehomePay]);
  const percents = useMemo(() => {
    const totals =
      Number(lifeInsurancePremiumWatch ?? 0) +
        Number(electricBillWatch ?? 0) +
        Number(taxWatch ?? 0) +
        Number(monthlyWatch ?? 0) +
        Number(desiredRentWatch ?? 0) || 1;
    return Math.floor((totalmonths / totals) * 100);
  }, [lifeInsurancePremiumWatch, electricBillWatch, taxWatch, monthlyWatch, desiredRentWatch, totalmonths]);
  useEffect(() => {
    form.setFieldValue(
      'lifeInsurancePremium',
      peopleLifeInsuranceTypeWatch || Number(husbandLifeInsuranceTypeWatch) + Number(wifeLifeInsuranceTypeWatch) || 0
    );
  }, [peopleLifeInsuranceTypeWatch, husbandLifeInsuranceTypeWatch, wifeLifeInsuranceTypeWatch]);
  const total = useMemo(() => {
    return new Intl.NumberFormat('ja-JP', {
      maximumFractionDigits: 0,
    }).format(
      Number(lifeInsurancePremiumWatch ?? 0) +
        Number(electricBillWatch ?? 0) +
        Number(taxWatch ?? 0) +
        Number(monthlyWatch ?? 0) +
        Number(desiredRentWatch ?? 0)
    );
  }, [desiredRentWatch, monthlyWatch, taxWatch, electricBillWatch, lifeInsurancePremiumWatch]);

  return (
    <>
      <Form
        form={form}
        name="formContentHouseholds"
        // onFinish={(e) => console.log(e)}
        scrollToFirstError={{ behavior: 'smooth', block: 'center', inline: 'center' }}
        // validateTrigger={['onBlur']}
      >
        <div className="rounded-r-[16px] rounded-bl-[16px] bg-[#ffffff]  w-full px-[48px] py-[56px] print:p-0 ">
          <FormInformationBasic typeContent={typeContent} />

          <div className="mt-[68px] print:mt-0 print:pt-0  print:break-before-page">
            <FormWorkInformation typeContent={typeContent} />
          </div>
          <div className="mt-[68px] print:mt-0 print:pt-0  print:break-before-page">
            <FormFamilyInformation typeContent={typeContent} />
          </div>
          <div className="mt-[68px] print:mt-0 print:pt-0  print:break-before-page">
            <FormNewHouseInformation />
          </div>
          <div className=" print:break-before-page">
            <FormScholarships />
          </div>
        </div>
        <div className="mt-[24px] bg-[#ffffff] min-h-[585px] rounded-[16px] flex items-center justify-center flex-col print:hidden">
          <h2 className="font-bold text-[40px] text-primary pb-[64px]">新生活で毎月支払う固定費</h2>
          <div className="flex justify-between space-x-[8px]">
            <CardFix
              content={
                <>
                  <span className="text-[48px] font-bold truncate">{formatNumber(desiredRentWatch ?? 0)}</span>
                </>
              }
              title="希望家賃"
            />
            <CardFix
              content={
                <Form.Item name="lifeInsurancePremium" noStyle>
                  <Currency />
                </Form.Item>
              }
              title={
                <span className="text-[#ffffff]">
                  生命保険料 <span className="text-[16px]">（定期）</span>
                </span>
              }
            />
            <CardFix content={<Currency value={monthlyWatch} />} title="返済等" />
            <CardFix
              content={
                <div className="px-[34px] flex space-x-[8px] items-center">
                  <Form.Item
                    className="!mb-0"
                    name="tax"
                    rules={[
                      { max: 10, message: '半角数字、10文字以内' },
                      {
                        validator: (_, value) => {
                          if (RegexKatakanaHalfWidth.test(value)) {
                            return Promise.resolve();
                          }
                          return Promise.reject('半角数字10文字以内');
                        },
                      },
                    ]}
                  >
                    <BasicInput className="bg-primary-light" placeholder="10,000" type="number" />
                  </Form.Item>
                  <span className="text-[14px] font-bold">円</span>
                </div>
              }
              title="税金  "
            />
            <CardFix
              content={
                <div className="px-[34px] flex space-x-[8px] items-center">
                  <Form.Item
                    className="!mb-0"
                    name="electricBill"
                    rules={[
                      { max: 10, message: '半角数字、10文字以内' },
                      {
                        validator: (_, value) => {
                          if (RegexKatakanaHalfWidth.test(value)) {
                            return Promise.resolve();
                          }
                          return Promise.reject('半角数字10文字以内');
                        },
                      },
                    ]}
                  >
                    <BasicInput className="bg-primary-light" placeholder="10,000" type="number" />
                  </Form.Item>
                  <span className="text-[14px] font-bold">円</span>
                </div>
              }
              title="電気代"
            />
          </div>
          <div className="flex space-x-[40px] max-h-[51px] mt-[40px] print:hidden">
            <div className="flex items-end justify-center space-x-[36px] ">
              <span className=" underline underline-offset-[14px] text-primary text-[24px] font-bold">合計</span>
              <span className="text-[70px] font-bold leading-[32px]  ">
                {total}
                <span className="text-[40px] ml-[8px]">円</span>
              </span>
            </div>
            <div className="flex items-center justify-center space-x-[36px] ">
              <div className="flex flex-col">
                <span className=" text-primary text-[14px] font-bold">2人の手取り給与に</span>
                <span className=" text-primary text-[14px] font-bold underline underline-offset-[14px] decoration-2">
                  対する固定費の割合
                </span>
              </div>
              <div>
                <span className="text-[70px] font-bold leading-normal">
                  {percents}
                  <span className="text-[40px] ml-[8px]">%</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Form>
      <div className="flex items-center justify-center mt-[80px] mb-[200px] print:hidden">
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

export default React.memo(ContentHouseholds);
