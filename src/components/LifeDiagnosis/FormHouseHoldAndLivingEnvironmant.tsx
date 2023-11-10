/* eslint-disable max-lines-per-function */
import { Form } from 'antd';
import React from 'react';
import SelectButton from '../common/SelectButton';

function FormHouseHoldAndLivingEnvironmant() {
  return (
    <div className="text-primary-text">
      <div className="bg-primary px-[24px] py-[20px] text-[#ffffff] text-[20px] font-bold leading-5 rounded-[4px] mb-[54px]">
        「マイホーム」と比較した「賃貸住宅」で起こりやすい「家計」と「住環境」の問題について
      </div>
      {/* Household finance problems */}
      <div className="flex flex-col ">
        <span className="text-primary font-bold text-[18px] leading-normal">家計の問題</span>
        <div className="border-t-[3px] border-primary mt-[20px] grid grid-cols-3 gap-y-2 gap-x-[100px] pt-[24px]">
          <div className="flex justify-between items-center">
            <span className="text-[14px] font-bold ">現在の貯蓄状況</span>
            <Form.Item className="w-[120px] !mb-0" initialValue={'no'} name={['householdFinance', 'savingStatus']}>
              <SelectButton
                className="text-[24px] !h-[66px]"
                options={[
                  { value: 'no', label: <span className="text-[24px] font-bold leading-normal">×</span> },
                  {
                    value: 'yes',
                    label: <span className="text-[24px] font-bold ">o</span>,
                  },
                ]}
                type="primary"
              />
            </Form.Item>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[14px] font-bold ">無駄な固定費</span>
            <Form.Item
              className="w-[120px] !mb-0"
              initialValue={'no'}
              name={['householdFinance', 'wastefulFixedCosts']}
            >
              <SelectButton
                className="text-[24px] !h-[66px]"
                options={[
                  { value: 'no', label: <span className="text-[24px] font-bold leading-normal">×</span> },
                  {
                    value: 'yes',
                    label: <span className="text-[24px] font-bold ">o</span>,
                  },
                ]}
                type="primary"
              />
            </Form.Item>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[14px] font-bold ">家計削減環境「変動費」</span>
            <Form.Item className="w-[120px] !mb-0" initialValue={'no'} name={['householdFinance', 'variableCosts']}>
              <SelectButton
                className="text-[24px] !h-[66px]"
                options={[
                  { value: 'no', label: <span className="text-[24px] font-bold leading-normal">×</span> },
                  {
                    value: 'yes',
                    label: <span className="text-[24px] font-bold ">o</span>,
                  },
                ]}
                type="primary"
              />
            </Form.Item>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[14px] font-bold ">ローン、借金</span>
            <Form.Item className="w-[120px] !mb-0" initialValue={'no'} name={['householdFinance', 'loanDebt']}>
              <SelectButton
                className="text-[24px] !h-[66px]"
                options={[
                  { value: 'no', label: <span className="text-[24px] font-bold leading-normal">×</span> },
                  {
                    value: 'yes',
                    label: <span className="text-[24px] font-bold ">o</span>,
                  },
                ]}
                type="primary"
              />
            </Form.Item>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[14px] font-bold ">出産と育児の準備</span>
            <Form.Item
              className="w-[120px] !mb-0"
              initialValue={'no'}
              name={['householdFinance', 'childbirthAndChildcare']}
            >
              <SelectButton
                className="text-[24px] !h-[66px]"
                options={[
                  { value: 'no', label: <span className="text-[24px] font-bold leading-normal">×</span> },
                  {
                    value: 'yes',
                    label: <span className="text-[24px] font-bold ">o</span>,
                  },
                ]}
                type="primary"
              />
            </Form.Item>
          </div>
        </div>
      </div>

      {/* Living environment problems */}
      <div className="flex flex-col mt-[40px]">
        <span className="text-primary font-bold text-[18px] leading-normal">住環境の問題</span>
        <div className="border-t-[3px] border-primary mt-[20px] grid grid-cols-3 gap-y-2 gap-x-[100px] pt-[24px]">
          <div className="flex justify-between items-center">
            <span className="text-[14px] font-bold ">
              快適性（音問題、
              <br /> プライバシー、ストレス）
            </span>
            <Form.Item className="w-[120px] !mb-0" initialValue={'no'} name={['livingEnvironment', 'comfort']}>
              <SelectButton
                className="text-[24px] !h-[66px]"
                options={[
                  { value: 'no', label: <span className="text-[24px] font-bold leading-normal">×</span> },
                  {
                    value: 'yes',
                    label: <span className="text-[24px] font-bold ">o</span>,
                  },
                ]}
                type="primary"
              />
            </Form.Item>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[14px] font-bold ">
              家事の効率性（間取り、
              <br />
              設備、掃除、時間）
            </span>
            <Form.Item className="w-[120px] !mb-0" initialValue={'no'} name={['livingEnvironment', 'housework']}>
              <SelectButton
                className="text-[24px] !h-[66px]"
                options={[
                  { value: 'no', label: <span className="text-[24px] font-bold leading-normal">×</span> },
                  {
                    value: 'yes',
                    label: <span className="text-[24px] font-bold ">o</span>,
                  },
                ]}
                type="primary"
              />
            </Form.Item>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[14px] font-bold ">広さ、収納量</span>
            <Form.Item
              className="w-[120px] !mb-0"
              initialValue={'no'}
              name={['livingEnvironment', 'spaceStorageCapacity']}
            >
              <SelectButton
                className="text-[24px] !h-[66px]"
                options={[
                  { value: 'no', label: <span className="text-[24px] font-bold leading-normal">×</span> },
                  {
                    value: 'yes',
                    label: <span className="text-[24px] font-bold ">o</span>,
                  },
                ]}
                type="primary"
              />
            </Form.Item>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[14px] font-bold ">
              プライベートの充実度
              <br />
              （趣味、交友関係）
            </span>
            <Form.Item
              className="w-[120px] !mb-0"
              initialValue={'no'}
              name={['livingEnvironment', 'fulfillmentofPrivateLife']}
            >
              <SelectButton
                className="text-[24px] !h-[66px]"
                options={[
                  { value: 'no', label: <span className="text-[24px] font-bold leading-normal">×</span> },
                  {
                    value: 'yes',
                    label: <span className="text-[24px] font-bold ">o</span>,
                  },
                ]}
                type="primary"
              />
            </Form.Item>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[14px] font-bold ">
              健康への配慮・
              <br />
              休息環境
            </span>
            <Form.Item
              className="w-[120px] !mb-0"
              initialValue={'no'}
              name={['livingEnvironment', 'healthConsiderations']}
            >
              <SelectButton
                className="text-[24px] !h-[66px]"
                options={[
                  { value: 'no', label: <span className="text-[24px] font-bold leading-normal">×</span> },
                  {
                    value: 'yes',
                    label: <span className="text-[24px] font-bold ">o</span>,
                  },
                ]}
                type="primary"
              />
            </Form.Item>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[14px] font-bold ">出産と育児の準備</span>
            <Form.Item className="w-[120px] !mb-0" name={['livingEnvironment', 'childbirthAndChildcare']}>
              <SelectButton
                className="text-[24px] !h-[66px]"
                options={[
                  { value: 'no', label: <span className="text-[24px] font-bold leading-normal">×</span> },
                  {
                    value: 'yes',
                    label: <span className="text-[24px] font-bold ">o</span>,
                  },
                ]}
                type="primary"
              />
            </Form.Item>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormHouseHoldAndLivingEnvironmant;
