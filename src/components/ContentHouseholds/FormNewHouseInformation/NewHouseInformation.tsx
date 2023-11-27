/* eslint-disable max-lines */
/* eslint-disable max-lines-per-function */
import { Form, Radio } from 'antd';
import React, { useState } from 'react';
import BasicRadio from '../../common/BasicRadio';
import BasicButton from '../../common/BasicButton';
import BasicInput from '../../common/BasicInput';
import SelectButton from '../../common/SelectButton';
import BasicTextArea from '../../common/BasicTextArea';
import { useHouseHoldsContext } from '../../context/HouseHoldsContext';

interface Props {
  type?: string;
}

function NewHouseInformation(props: Props) {
  const { type } = props;
  const {
    relationshipNewResident,
    budgetAmountForNewHouse,
    InitialCostMovingFee,
    householdApplianceCosts,
    others,
    desiredRent,
    selfPayAmount,
    desiredFloorPlan,
    breadth,
  } = useHouseHoldsContext();
  const form = Form.useFormInstance();
  const [plannedNewHome, setPlannedNewHome] = useState<{ id?: number; relationship?: string; age?: number }[]>([
    { id: 1, relationship: '', age: 0 },
  ]);

  const RegexKatakanaHalfWidth = /^[ｧ-ﾝﾞﾟ]|[0-9]+$/;
  return (
    <div className="h-full w-full text-primary-text flex flex-col space-y-[48px]">
      {/* Planned new home */}
      <div className="flex w-full h-full  items-start">
        {<div className="w-[176px] text-[14px] font-bold pt-[18px]">新居予定者</div>}
        <div
          className={`w-full  ${type === 'husband' && 'bg-primary-light '} ${
            type === 'wife' && 'bg-secondary-thin '
          } flex pl-[48px] space-y-[14px] flex-col `}
        >
          {plannedNewHome.map((item) => (
            <div key={item.id}>
              <div className="flex items-center flex-1 w-full ">
                <span className="text-[14px] font-bold max-w-[60px] w-full mr-[32px]">続柄</span>
                <Form.Item
                  className="!mb-0 flex-1"
                  name={[`${type}`, 'newHouseInfor', 'plannedNewHome', `plannedNewHome${item.id}`, 'relationship']}
                >
                  <SelectButton options={relationshipNewResident} placeholder="選択してください" type="primary" />
                </Form.Item>
              </div>
              <div className="flex items-center flex-1 w-full  mt-[20px]">
                <span className="text-[14px] font-bold max-w-[60px] w-full mr-[32px]">年齢</span>
                <Form.Item
                  className="!mb-0 flex-1"
                  name={[`${type}`, 'newHouseInfor', 'plannedNewHome', `plannedNewHome${item.id}`, 'age']}
                  rules={[
                    { max: 3, message: '半角数字、3文字以内' },
                    {
                      validator: (_, value) => {
                        if (value) {
                          if (RegexKatakanaHalfWidth.test(value)) {
                            return Promise.resolve();
                          }
                          return Promise.reject('半角数字、3文字以内');
                        }
                        return Promise.resolve();
                      },
                    },
                  ]}
                >
                  <BasicInput className="bg-primary-light" placeholder="30" type="number" />
                </Form.Item>
                <span className="text-[14px] font-bold ml-[8px] ">歳</span>
              </div>
            </div>
          ))}
          <div className="flex w-full justify-between space-x-[8px]">
            {plannedNewHome.length < 6 && (
              <BasicButton
                className="h-[58px]  flex-1"
                onClick={() =>
                  setPlannedNewHome((prev) => [
                    ...prev,
                    {
                      id: Number(prev?.[prev.length - 1]?.id) + 1,
                      age: 0,
                      type: '1',
                    },
                  ])
                }
                type="default"
              >
                <span className="text-[14px] print:text-[10px] text-primary-text">+ 追加する</span>
              </BasicButton>
            )}
            {plannedNewHome.length > 1 && (
              <BasicButton
                className="h-[58px]  flex-1"
                onClick={() => {
                  const lastIndex = plannedNewHome[plannedNewHome.length - 1];
                  setPlannedNewHome((prev) => prev.filter((e) => e !== lastIndex));
                  form.setFieldValue(
                    [`${type}`, 'familyInfor', 'plannedNewHome', `plannedNewHome${lastIndex.id}`, 'type'],
                    null
                  );
                  form.setFieldValue(
                    [`${type}`, 'familyInfor', 'plannedNewHome', `plannedNewHome${lastIndex.id}`, 'age'],
                    null
                  );
                }}
                type="default"
              >
                <span className="text-[14px] print:text-[10px] text-primary-text">− 削除する</span>
              </BasicButton>
            )}
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
            <SelectButton options={budgetAmountForNewHouse} placeholder="選択してください" type="primary" />
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
              <SelectButton options={InitialCostMovingFee} placeholder="選択してください" type="primary" />
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
              <SelectButton options={householdApplianceCosts} placeholder="選択してください" type="primary" />
            </Form.Item>
          </div>
          <div className="flex items-center flex-1 w-full ">
            <span className="text-[14px] font-bold max-w-[60px] w-full mr-[32px]">その他</span>
            <Form.Item className="!mb-0 flex-1" name={[`${type}`, 'newHouseInfor', 'budget', 'others']}>
              <SelectButton options={others} placeholder="選択してください" type="primary" />
            </Form.Item>
          </div>
        </div>
      </div>

      {/* Desired rent */}
      <div className="flex w-full h-full  items-start">
        {<div className="w-[176px] text-[14px] font-bold pt-[18px]">ご希望の家賃</div>}
        <div
          className={`w-full  ${type === 'husband' && 'bg-primary-light '} ${
            type === 'wife' && 'bg-secondary-thin '
          } flex flex-col pl-[48px] space-y-[8px] `}
        >
          <Form.Item
            className=" flex-1 !mb-0"
            name={[`${type}`, 'newHouseInfor', 'desiredRent', 'type']}
            rules={[{ required: true, message: '' }]}
          >
            <SelectButton options={desiredRent} placeholder="選択してください" type="primary" />
          </Form.Item>

          <div className="flex items-center flex-1 w-full ">
            <span className="text-[14px] font-bold max-w-[60px] w-full mr-[32px]">
              自己
              <br />
              負担額
            </span>
            <Form.Item className="!mb-0 flex-1" name={[`${type}`, 'newHouseInfor', 'desiredRent', 'selfBurdenAmount']}>
              <SelectButton options={selfPayAmount} placeholder="選択してください" type="primary" />
            </Form.Item>
          </div>
          <div className="flex items-center flex-1 w-full ">
            <span className="text-[14px] font-bold max-w-[60px] w-full mr-[32px]">駐車場</span>
            <div className="flex w-full items-center">
              <Form.Item
                className="!mb-0 flex-1"
                name={[`${type}`, 'newHouseInfor', 'desiredRent', 'parking']}
                rules={[
                  { max: 2, message: '半角数字、2文字以内' },
                  {
                    validator: (_, value) => {
                      if (value) {
                        if (!/^([ァ-ン０-９]|ー)+$/.test(value)) {
                          return Promise.resolve();
                        }
                        return Promise.reject('半角数字、2文字以内');
                      }
                      return Promise.resolve();
                    },
                  },
                ]}
              >
                <BasicInput className="bg-primary-light" placeholder="2" />
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
              <SelectButton options={desiredFloorPlan} placeholder="選択してください" type="primary" />
            </Form.Item>
          </div>
          <div className="flex items-center flex-1 w-full ">
            <span className="text-[14px] font-bold max-w-[60px] w-full mr-[32px]">広さ</span>
            <Form.Item className="!mb-0 flex-1" name={[`${type}`, 'newHouseInfor', 'desiredFloorPlan', 'breadth']}>
              <SelectButton options={breadth} placeholder="選択してください" type="primary" />
            </Form.Item>
          </div>
        </div>
      </div>

      {/* Desired area/conditions */}
      <div className="flex w-full h-full  items-start ">
        {<div className="w-[176px] text-[14px] font-bold pt-[16px]">ご希望エリア・条件</div>}
        <div
          className={`w-full  ${type === 'husband' && 'bg-primary-light '} ${
            type === 'wife' && 'bg-secondary-thin '
          } flex flex-col pl-[48px] space-y-[24px]  rounded-b-[16px] `}
        >
          <Form.Item
            className="!mb-0 !w-full"
            name={[`${type}`, 'newHouseInfor', 'desiredAreaConditions']}
            rules={[{ max: 60, message: '60文字以内' }]}
          >
            <BasicTextArea
              className="bg-primary-light"
              maxLength={60}
              placeholder="Ex）○○町周辺　初期費用抑えたい&#13;理由は...二人の実家の中間なので"
              style={{ height: '136px', resize: 'none' }}
            />
          </Form.Item>
        </div>
      </div>

      {/* MEMO */}
      <div className="flex w-full h-full  items-start ">
        {<div className="w-[176px] text-[14px] font-bold pt-[14px]">メモ</div>}
        <div
          className={`w-full  ${type === 'husband' && 'bg-primary-light '} ${
            type === 'wife' && 'bg-secondary-thin '
          } flex flex-col pl-[48px] space-y-[24px] pb-[66px] rounded-b-[16px] `}
        >
          <Form.Item
            className="!mb-0 !w-full"
            name={[`${type}`, 'newHouseInfor', 'memo']}
            rules={[{ max: 60, message: '60文字以内' }]}
          >
            <BasicTextArea
              className="bg-primary-light"
              maxLength={60}
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
