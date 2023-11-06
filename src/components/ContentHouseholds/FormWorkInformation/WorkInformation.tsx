/* eslint-disable max-lines */
/* eslint-disable max-lines-per-function */
import React from 'react';
import { Form, Radio } from 'antd';
import BasicInput from '../../common/BasicInput';
import BasicRadio from '../../common/BasicRadio';
import BasicTextArea from '../../common/BasicTextArea';

interface Props {
  disabledLabel?: boolean;
  type?: 'husband' | 'wife' | string;
}
function WorkInformation(props: Props) {
  const { disabledLabel, type } = props;
  return (
    <div className="h-full w-full text-primary-text">
      {(type === 'husband' || type === 'wife') && (
        <div className="flex w-full h-full">
          {!disabledLabel && <div className="w-[176px]"></div>}
          <div
            className={`w-[528px] ${type === 'husband' && 'bg-primary-light '} ${
              type === 'wife' && 'bg-secondary-thin '
            } bg-primary-light rounded-t-[16px] h-[66px] relative`}
          >
            <span
              className={`font-bold text-[16px]  absolute -top-3 left-[50%] -translate-x-[50%]  ${
                type === 'husband' && 'text-primary '
              } ${type === 'wife' && 'text-secondary '} `}
            >
              {type === 'husband' && '夫記入欄'}
              {type === 'wife' && '妻記入欄'}
            </span>
          </div>
        </div>
      )}
      {/* PlaceOfWork 1*/}
      <div className="flex w-full h-full  items-start">
        {!disabledLabel && <div className="w-[176px] text-[14px] font-bold pt-[18px]">勤務先</div>}
        <div
          className={`
            ${type === 'husband' || type === 'wife' ? 'w-[528px] px-[48px] ' : 'w-full pl-[48px]'} 
            ${type === 'husband' && 'bg-primary-light '} 
            ${type === 'wife' && 'bg-secondary-thin '} 
            flex flex-col space-y-[8px] `}
        >
          <div className="flex items-center justify-center space-x-[32px] w-full">
            <span className="text-[14px] font-bold max-w-[60px] w-full">会社名</span>
            <Form.Item className=" flex-1 !mb-0" name={[`${type}`, 'workInfor', 'placeOfWork', 'companyName']}>
              <BasicInput
                className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
                placeholder="日本リアライズ株式会社"
              />
            </Form.Item>
          </div>
          <div className="flex w-full items-center space-x-[8px]">
            <div className="flex items-center justify-center space-x-[32px] w-full">
              <span className="text-[14px] font-bold max-w-[60px] w-full">資本金</span>
              <Form.Item className=" flex-1 !mb-0" name={[`${type}`, 'workInfor', 'placeOfWork', 'capital']}>
                <BasicInput
                  className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
                  placeholder="100000000"
                  type="number"
                />
              </Form.Item>
            </div>
            <span className="text-[14px] font-bold">円</span>
          </div>
          <div className="flex w-full items-center space-x-[8px]">
            <div className="flex items-center justify-center space-x-[32px] w-full">
              <span className="text-[14px] font-bold max-w-[60px] w-full">社員数</span>
              <Form.Item className=" flex-1 !mb-0" name={[`${type}`, 'workInfor', 'placeOfWork', 'numberOfEmployees']}>
                <BasicInput
                  className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
                  placeholder="50"
                  type="number"
                />
              </Form.Item>
            </div>
            <span className="text-[14px] font-bold">人</span>
          </div>
        </div>
      </div>
      {/* Salary */}
      <div className="flex w-full h-full  items-start">
        {!disabledLabel && <div className="w-[176px] text-[14px] font-bold  pt-[68px]">給与</div>}
        <div
          className={`
          ${type === 'husband' || type === 'wife' ? 'w-[528px] px-[48px] ' : 'w-full pl-[48px]'} 
          ${type === 'husband' && 'bg-primary-light '} 
          ${type === 'wife' && 'bg-secondary-thin '}
          flex  flex-col space-y-[8px] pt-[48px]`}
        >
          <div className="flex w-full items-center space-x-[8px]">
            <div className="flex items-center justify-center space-x-[32px] flex-1 w-full">
              <span className="text-[14px] font-bold max-w-[60px] w-full">年収</span>
              <Form.Item className=" flex-1 !mb-0" name={[`${type}`, 'workInfor', 'salary', 'annualIncome']}>
                <BasicInput
                  className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
                  placeholder="300"
                  type="number"
                />
              </Form.Item>
            </div>
            <span className="text-[14px] font-bold">万円</span>
          </div>
          <div className="flex w-full items-center space-x-[8px]">
            <div className="flex items-center justify-center space-x-[32px] flex-1 w-full">
              <span className="text-[14px] font-bold max-w-[60px] w-full">月手取り</span>
              <Form.Item className=" flex-1 !mb-0" name={[`${type}`, 'workInfor', 'salary', 'monthlytakehomePay']}>
                <BasicInput
                  className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
                  placeholder="20"
                  type="number"
                />
              </Form.Item>
            </div>
            <span className="text-[14px] font-bold">万円</span>
          </div>
        </div>
      </div>
      {/* duty station */}
      <div className="flex w-full h-full  items-center">
        {!disabledLabel && <div className="w-[176px] text-[14px] font-bold  pt-[48px]">生年月日</div>}
        <div
          className={`
            ${type === 'husband' || type === 'wife' ? 'w-[528px] px-[48px] ' : 'w-full pl-[48px]'} 
            ${type === 'husband' && 'bg-primary-light '} 
            ${type === 'wife' && 'bg-secondary-thin '}         
            flex  items-center  pt-[48px]`}
        >
          <Form.Item className="!mb-0 !w-full" name={[`${type}`, 'workInfor', 'dutyStation']}>
            <BasicInput
              className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
              placeholder="新宿区新宿"
            />
          </Form.Item>
        </div>
      </div>
      {/* Length of service */}
      <div className="flex w-full h-full  items-center">
        {!disabledLabel && <div className="w-[176px] text-[14px] font-bold  pt-[48px]">勤続年数</div>}
        <div
          className={`
            ${type === 'husband' || type === 'wife' ? 'w-[528px] px-[48px] ' : 'w-full pl-[48px]'} 
            ${type === 'husband' && 'bg-primary-light '} 
            ${type === 'wife' && 'bg-secondary-thin '}
            flex space-x-[8px] items-center  pt-[48px]`}
        >
          <Form.Item className="!mb-0 !w-full flex-1" name={[`${type}`, 'workInfor', 'lengthOfService']}>
            <BasicInput
              className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
              placeholder="5"
              type="number"
            />
          </Form.Item>
          <span className="text-[14px] font-bold">年</span>
        </div>
      </div>

      {/* transfer */}
      <div className="flex w-full h-full  items-start">
        {!disabledLabel && <div className="w-[176px] text-[14px] font-bold pt-[48px]">転勤</div>}
        <div
          className={`
            ${type === 'husband' || type === 'wife' ? 'w-[528px] px-[48px] ' : 'w-full pl-[48px]'} 
            ${type === 'husband' && 'bg-primary-light '} 
            ${type === 'wife' && 'bg-secondary-thin '}
            pt-[42px]`}
        >
          <Form.Item className="!mb-0 !w-full" name={[`${type}`, 'workInfor', 'transfer']}>
            <Radio.Group className="!w-full ">
              <div className="flex space-x-[24px]">
                <BasicRadio value="single">
                  <span className="text-[14px] font-bold ">有</span>
                </BasicRadio>
                <BasicRadio value="multiple">
                  <span className="text-[14pxs] font-bold ">無</span>
                </BasicRadio>
              </div>
            </Radio.Group>
          </Form.Item>
        </div>
      </div>
      {/* Desire to change jobs */}
      <div className="flex w-full h-full  items-start">
        {!disabledLabel && <div className="w-[176px] text-[14px] font-bold pt-[48px]">転職希望</div>}
        <div
          className={`
            ${type === 'husband' || type === 'wife' ? 'w-[528px] px-[48px] ' : 'w-full pl-[48px]'} 
            ${type === 'husband' && 'bg-primary-light '} 
            ${type === 'wife' && 'bg-secondary-thin '}
            px-[48px] pt-[42px]`}
        >
          <Form.Item className="!mb-0 !w-full" name={[`${type}`, 'workInfor', 'desireToChangeJobs']}>
            <Radio.Group className="!w-full">
              <div className="flex space-x-[24px]">
                <BasicRadio value="single">
                  <span className="text-[14px] font-bold ">有</span>
                </BasicRadio>
                <BasicRadio value="multiple">
                  <span className="text-[14pxs] font-bold ">無</span>
                </BasicRadio>
              </div>
            </Radio.Group>
          </Form.Item>
        </div>
      </div>
      {/* Commuting method/time*/}
      <div className="flex w-full h-full  items-start ">
        {!disabledLabel && <div className="w-[176px] text-[14px] pt-[48px] font-bold">通勤方法・時間</div>}
        <div
          className={`
            ${type === 'husband' || type === 'wife' ? 'w-[528px] px-[48px] ' : 'w-full pl-[48px]'} 
            ${type === 'husband' && 'bg-primary-light '} 
            ${type === 'wife' && 'bg-secondary-thin '}
            flex flex-col space-y-[24px] pt-[42px] pb-[48px] `}
        >
          <Form.Item className="!mb-0 !w-full" name={[`${type}`, 'workInfor', 'commutingTime', 'type']}>
            <Radio.Group className="!w-full">
              <div className="flex space-x-[20px]">
                <BasicRadio value="0">
                  <span className="text-[14px] font-bold ">徒歩</span>
                </BasicRadio>
                <BasicRadio value="1">
                  <span className="text-[14pxs] font-bold ">自転車</span>
                </BasicRadio>
                <BasicRadio value="2">
                  <span className="text-[14pxs] font-bold ">バス</span>
                </BasicRadio>
                <BasicRadio value="3">
                  <span className="text-[14pxs] font-bold ">電車</span>
                </BasicRadio>
                <BasicRadio value="4">
                  <span className="text-[14pxs] font-bold ">車</span>
                </BasicRadio>
                <BasicRadio value="5">
                  <span className="text-[14pxs] font-bold ">その他</span>
                </BasicRadio>
              </div>
            </Radio.Group>
          </Form.Item>
          <div className="flex items-center space-x-[8px]">
            <Form.Item className="!mb-0 !w-full flex-1" name={[`${type}`, 'workInfor', 'commutingTime', 'time']}>
              <BasicInput
                className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
                placeholder="20"
                type="number"
              />
            </Form.Item>
            <span className="text-[14pxs] font-bold ">分</span>
          </div>
        </div>
      </div>

      {/* MEMO */}
      <div className="flex w-full h-full  items-start ">
        {!disabledLabel && <div className="w-[176px] text-[14px] font-bold">メモ</div>}
        <div
          className={`
            ${type === 'husband' || type === 'wife' ? 'w-[528px] px-[48px] ' : 'w-full pl-[48px]'} 
            ${type === 'husband' && 'bg-primary-light '} 
            ${type === 'wife' && 'bg-secondary-thin '}
            flex flex-col space-y-[24px] pb-[66px] rounded-b-[16px] `}
        >
          <Form.Item className="!mb-0 !w-full" name={[`${type}`, 'workInfor', 'memo']}>
            <BasicTextArea
              className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
              placeholder="ご自由に記入ください"
              style={{ height: '136px', resize: 'none' }}
            />
          </Form.Item>
        </div>
      </div>
    </div>
  );
}

export default WorkInformation;
