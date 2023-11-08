/* eslint-disable max-lines-per-function */
import { Form, Radio } from 'antd';
import React from 'react';
import BasicRadio from '../../common/BasicRadio';
import BasicButton from '../../common/BasicButton';
import BasicInput from '../../common/BasicInput';
import SelectButton from '../../common/SelectButton';
import BasicTextArea from '../../common/BasicTextArea';

interface Props {
  type?: string;
}

function NewHouseInformation(props: Props) {
  const { type } = props;
  return (
    <div className="h-full w-full text-primary-text flex flex-col space-y-[48px]">
      {/* Planned new home */}
      <div className="flex w-full h-full  items-start">
        {<div className="w-[176px] text-[14px] font-bold pt-[18px]">ご実家にお住まいの方</div>}
        <div
          className={`w-full  ${type === 'husband' && 'bg-primary-light '} ${
            type === 'wife' && 'bg-secondary-thin '
          } flex pl-[48px] flex-col `}
        >
          <div className="flex items-center flex-1 w-full ">
            <span className="text-[14px] font-bold max-w-[60px] w-full mr-[32px]">続柄</span>
            <Form.Item className="!mb-0 flex-1" name={[`${type}`, 'newHouseInfor', 'plannedNewHome', 'relationship']}>
              <SelectButton
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                  { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
                placeholder="選択してください"
                type="primary"
              />
            </Form.Item>
          </div>
          <div>
            <div className="flex items-center flex-1 w-full  mt-[20px]">
              <span className="text-[14px] font-bold max-w-[60px] w-full mr-[32px]">年齢</span>
              <Form.Item className="!mb-0 flex-1" name={[`${type}`, 'newHouseInfor', 'plannedNewHome', 'age']}>
                <BasicInput className="bg-primary-light" placeholder="30" type="number" />
              </Form.Item>
              <span className="text-[14px] font-bold ml-[8px] ">歳</span>
            </div>
            <BasicButton className="h-[58px] mt-[14px]" type="default">
              <span className="text-[14px] text-secondary-text">+ 追加する</span>
            </BasicButton>
          </div>
        </div>
      </div>
      {/* Budget amount for new house expenses*/}
      <div className="flex w-full h-full  items-start">
        {<div className="w-[176px] text-[14px] font-bold pt-[18px]">新居費用の予算額</div>}
        <div
          className={`w-full  ${type === 'husband' && 'bg-primary-light '} ${
            type === 'wife' && 'bg-secondary-thin '
          } flex flex-col pl-[48px] space-y-[8px] `}
        >
          <Form.Item className=" flex-1 !mb-0" name={[`${type}`, 'newHouseInfor', 'budget', 'type']}>
            <SelectButton
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true },
              ]}
              placeholder="選択してください"
              type="primary"
            />
          </Form.Item>
          <div className="flex items-center flex-1 w-full min-h-[58px]">
            <span className="text-[14px] font-bold max-w-[60px] w-full mr-[32px]">内訳</span>
            <Form.Item className="!mb-0 flex-1" name={[`${type}`, 'newHouseInfor', 'budget', 'breakdown']}>
              <Radio.Group className="!w-full ">
                <div className="flex space-x-[24px]">
                  <BasicRadio value="1">
                    <span className="text-[14px] font-bold ">預金</span>
                  </BasicRadio>
                  <BasicRadio value="2">
                    <span className="text-[14pxs] font-bold ">ローン</span>
                  </BasicRadio>
                  <BasicRadio value="3">
                    <span className="text-[14pxs] font-bold ">援助</span>
                  </BasicRadio>
                </div>
              </Radio.Group>
            </Form.Item>
          </div>
          <div className="flex items-center flex-1 w-full ">
            <span className="text-[14px] font-bold max-w-[60px] w-full mr-[32px]">
              初期費用
              <br />
              引越代金
            </span>
            <Form.Item className="!mb-0 flex-1" name={[`${type}`, 'newHouseInfor', 'budget', 'initialCostMovingFee']}>
              <SelectButton
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                  { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
                placeholder="選択してください"
                type="primary"
              />
            </Form.Item>
          </div>
          <div className="flex items-center flex-1 w-full ">
            <span className="text-[14px] font-bold max-w-[60px] w-full mr-[32px]">
              家事家電
              <br />
              費用
            </span>
            <Form.Item
              className="!mb-0 flex-1"
              name={[`${type}`, 'newHouseInfor', 'budget', 'householdAppliancesCost']}
            >
              <SelectButton
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                  { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
                placeholder="選択してください"
                type="primary"
              />
            </Form.Item>
          </div>
          <div className="flex items-center flex-1 w-full ">
            <span className="text-[14px] font-bold max-w-[60px] w-full mr-[32px]">その他</span>
            <Form.Item className="!mb-0 flex-1" name={[`${type}`, 'newHouseInfor', 'budget', 'others']}>
              <SelectButton
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                  { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
                placeholder="選択してください"
                type="primary"
              />
            </Form.Item>
          </div>
        </div>
      </div>

      {/* Desired rent */}
      <div className="flex w-full h-full  items-start">
        {<div className="w-[176px] text-[14px] font-bold pt-[18px]">新居費用の予算額</div>}
        <div
          className={`w-full  ${type === 'husband' && 'bg-primary-light '} ${
            type === 'wife' && 'bg-secondary-thin '
          } flex flex-col pl-[48px] space-y-[8px] `}
        >
          <Form.Item className=" flex-1 !mb-0" name={[`${type}`, 'newHouseInfor', 'desiredRent', 'type']}>
            <SelectButton
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true },
              ]}
              placeholder="選択してください"
              type="primary"
            />
          </Form.Item>

          <div className="flex items-center flex-1 w-full ">
            <span className="text-[14px] font-bold max-w-[60px] w-full mr-[32px]">
              自己
              <br />
              負担額
            </span>
            <Form.Item className="!mb-0 flex-1" name={[`${type}`, 'newHouseInfor', 'desiredRent', 'selfBurdenAmount']}>
              <SelectButton
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                  { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
                placeholder="選択してください"
                type="primary"
              />
            </Form.Item>
          </div>
          <div className="flex items-center flex-1 w-full ">
            <span className="text-[14px] font-bold max-w-[60px] w-full mr-[32px]">駐車場</span>
            <div className="flex w-full items-center">
              <Form.Item className="!mb-0 flex-1" name={[`${type}`, 'newHouseInfor', 'desiredRent', 'parking']}>
                <BasicInput className="bg-primary-light" placeholder="2" type="number" />
              </Form.Item>
              <span className="text-[14px] font-bold pl-[8px] pr-[40px]">台</span>
              <Form.Item className="!mb-0" name={[`${type}`, 'newHouseInfor', 'desiredRent', 'other']}>
                <Radio.Group className="!w-full ">
                  <div className="flex space-x-[24px]">
                    <BasicRadio value="1">
                      <span className="text-[14px] font-bold ">別</span>
                    </BasicRadio>
                    <BasicRadio value="2">
                      <span className="text-[14pxs] font-bold ">込</span>
                    </BasicRadio>
                  </div>
                </Radio.Group>
              </Form.Item>
            </div>
          </div>
        </div>
      </div>

      {/* desired floor plan */}
      <div className="flex w-full h-full  items-start">
        {<div className="w-[176px] text-[14px] font-bold pt-[18px]">ご希望の間取り</div>}
        <div
          className={`w-full  ${type === 'husband' && 'bg-primary-light '} ${
            type === 'wife' && 'bg-secondary-thin '
          } flex flex-col pl-[48px] space-y-[8px] `}
        >
          <div className="flex items-center flex-1 w-full ">
            <span className="text-[14px] font-bold max-w-[60px] w-full mr-[32px]">間取り</span>
            <Form.Item className="!mb-0 flex-1" name={[`${type}`, 'newHouseInfor', 'desiredFloorPlan', 'floorPlan']}>
              <SelectButton
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                  { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
                placeholder="選択してください"
                type="primary"
              />
            </Form.Item>
          </div>
          <div className="flex items-center flex-1 w-full ">
            <span className="text-[14px] font-bold max-w-[60px] w-full mr-[32px]">広さ</span>
            <Form.Item className="!mb-0 flex-1" name={[`${type}`, 'newHouseInfor', 'desiredFloorPlan', 'breadth']}>
              <SelectButton
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                  { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
                placeholder="選択してください"
                type="primary"
              />
            </Form.Item>
          </div>
        </div>
      </div>

      {/* Desired area/conditions */}
      <div className="flex w-full h-full  items-start ">
        {<div className="w-[176px] text-[14px] font-bold">ご希望エリア・条件</div>}
        <div
          className={`w-full  ${type === 'husband' && 'bg-primary-light '} ${
            type === 'wife' && 'bg-secondary-thin '
          } flex flex-col pl-[48px] space-y-[24px]  rounded-b-[16px] `}
        >
          <Form.Item className="!mb-0 !w-full" name={[`${type}`, 'newHouseInfor', 'desiredAreaConditions']}>
            <BasicTextArea
              className="bg-primary-light"
              placeholder="Ex）○○町周辺　初期費用抑えたい
理由は...二人の実家の中間なので"
              style={{ height: '136px', resize: 'none' }}
            />
          </Form.Item>
        </div>
      </div>

      {/* MEMO */}
      <div className="flex w-full h-full  items-start ">
        {<div className="w-[176px] text-[14px] font-bold">メモ</div>}
        <div
          className={`w-full  ${type === 'husband' && 'bg-primary-light '} ${
            type === 'wife' && 'bg-secondary-thin '
          } flex flex-col pl-[48px] space-y-[24px] pb-[66px] rounded-b-[16px] `}
        >
          <Form.Item className="!mb-0 !w-full" name={[`${type}`, 'newHouseInfor', 'memo']}>
            <BasicTextArea
              className="bg-primary-light"
              placeholder="自由にご記入ください"
              style={{ height: '136px', resize: 'none' }}
            />
          </Form.Item>
        </div>
      </div>
    </div>
  );
}
NewHouseInformation.defaultProps = {
  type: 'common',
};
export default NewHouseInformation;