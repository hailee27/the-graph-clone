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
  const RegexKatakanaHalfWidth = /^[ｧ-ﾝﾞﾟ]|[0-9]+$/;
  return (
    <div className="h-full w-full text-primary-text">
      {(type === 'husband' || type === 'wife') && (
        <div className="flex w-full h-full">
          {!disabledLabel && <div className="w-[176px] print:w-[70px]"></div>}
          <div
            className={`w-[528px] print:w-[350px] print:px-[24px] ${type === 'husband' && 'bg-primary-light '} ${
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
        {!disabledLabel && (
          <div className="w-[176px] print:w-[70px] text-[14px] print:text-[10px] font-bold pt-[18px]">勤務先</div>
        )}
        <div
          className={`
            ${
              type === 'husband' || type === 'wife'
                ? 'w-[528px] print:w-[350px] print:px-[24px] px-[48px] '
                : 'w-full pl-[48px]'
            } 
            ${type === 'husband' && 'bg-primary-light '} 
            ${type === 'wife' && 'bg-secondary-thin '} 
            flex flex-col space-y-[8px] `}
        >
          <div className="flex items-center justify-center space-x-[32px] w-full">
            <span className="text-[14px] print:text-[10px] font-bold max-w-[60px] w-full">会社名</span>
            <Form.Item
              className=" flex-1 !mb-0"
              name={[`${type}`, 'workInfor', 'placeOfWork', 'companyName']}
              rules={[{ max: 30, message: '30文字以内' }]}
            >
              <BasicInput
                className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
                placeholder="日本リアライズ株式会社"
              />
            </Form.Item>
          </div>
          <div className="flex w-full items-center space-x-[8px]">
            <div className="flex items-center justify-center space-x-[32px] w-full">
              <span className="text-[14px] print:text-[10px] font-bold max-w-[60px] w-full">資本金</span>
              <Form.Item
                className=" flex-1 !mb-0"
                name={[`${type}`, 'workInfor', 'placeOfWork', 'capital']}
                rules={[
                  { max: 12, message: '半角数字、12文字以内' },
                  {
                    validator: (_, value) => {
                      if (value) {
                        if (RegexKatakanaHalfWidth.test(value)) {
                          return Promise.resolve();
                        }
                        return Promise.reject('半角数字、12文字以内');
                      }
                      return Promise.resolve();
                    },
                  },
                ]}
              >
                <BasicInput
                  className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
                  placeholder="100000000"
                  type="number"
                />
              </Form.Item>
            </div>
            <span className="text-[14px] print:text-[10px] font-bold">円</span>
          </div>
          <div className="flex w-full items-center space-x-[8px]">
            <div className="flex items-center justify-center space-x-[32px] w-full">
              <span className="text-[14px] print:text-[10px] font-bold max-w-[60px] w-full">社員数</span>
              <Form.Item
                className=" flex-1 !mb-0"
                name={[`${type}`, 'workInfor', 'placeOfWork', 'numberOfEmployees']}
                rules={[
                  { max: 10, message: '半角数字、10文字以内' },
                  {
                    validator: (_, value) => {
                      if (value) {
                        if (RegexKatakanaHalfWidth.test(value)) {
                          return Promise.resolve();
                        }
                        return Promise.reject('半角数字、10文字以内');
                      }
                      return Promise.resolve();
                    },
                  },
                ]}
              >
                <BasicInput
                  className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
                  placeholder="50"
                  type="number"
                />
              </Form.Item>
            </div>
            <span className="text-[14px] print:text-[10px] font-bold">人</span>
          </div>
        </div>
      </div>
      {/* Salary */}
      <div className="flex w-full h-full  items-start">
        {!disabledLabel && (
          <div className="w-[176px] print:w-[70px] text-[14px] print:text-[10px] font-bold  pt-[68px]">給与</div>
        )}
        <div
          className={`
          ${
            type === 'husband' || type === 'wife'
              ? 'w-[528px] print:w-[350px] print:px-[24px] px-[48px] '
              : 'w-full pl-[48px]'
          } 
          ${type === 'husband' && 'bg-primary-light '} 
          ${type === 'wife' && 'bg-secondary-thin '}
          flex  flex-col space-y-[8px] pt-[48px]`}
        >
          <div className="flex w-full items-center space-x-[8px]">
            <div className="flex items-center justify-center space-x-[32px] flex-1 w-full">
              <span className="text-[14px] print:text-[10px] font-bold max-w-[60px] w-full">年収</span>
              <Form.Item
                className=" flex-1 !mb-0"
                name={[`${type}`, 'workInfor', 'salary', 'annualIncome']}
                rules={[
                  { max: 10, message: '半角数字、10文字以内' },
                  {
                    validator: (_, value) => {
                      if (value) {
                        if (RegexKatakanaHalfWidth.test(value)) {
                          return Promise.resolve();
                        }
                        return Promise.reject('半角数字、10文字以内');
                      }
                      return Promise.resolve();
                    },
                  },
                ]}
              >
                <BasicInput
                  className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
                  placeholder="300"
                  // type="number"
                />
              </Form.Item>
            </div>
            <span className="text-[14px] print:text-[10px] font-bold">万円</span>
          </div>
          <div className="flex w-full items-center space-x-[8px]">
            <div className="flex items-center justify-center space-x-[32px] flex-1 w-full">
              <span className="text-[14px] print:text-[10px] font-bold max-w-[60px] w-full">月手取り</span>
              <Form.Item
                className=" flex-1 !mb-0"
                name={[`${type}`, 'workInfor', 'salary', 'monthlytakehomePay']}
                rules={[
                  { max: 10, message: '半角数字、10文字以内' },
                  {
                    validator: (_, value) => {
                      if (RegexKatakanaHalfWidth.test(value)) {
                        return Promise.resolve();
                      }
                      return Promise.reject('半角数字、10文字以内');
                    },
                  },
                ]}
              >
                <BasicInput
                  className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
                  placeholder="20"
                  type="number"
                />
              </Form.Item>
            </div>
            <span className="text-[14px] print:text-[10px] font-bold">万円</span>
          </div>
        </div>
      </div>
      {/* duty station */}
      <div className="flex w-full h-full  items-center">
        {!disabledLabel && (
          <div className="w-[176px] print:w-[70px] text-[14px] print:text-[10px] font-bold  pt-[48px]">勤務地</div>
        )}
        <div
          className={`
            ${
              type === 'husband' || type === 'wife'
                ? 'w-[528px] print:w-[350px] print:px-[24px] px-[48px] '
                : 'w-full pl-[48px]'
            } 
            ${type === 'husband' && 'bg-primary-light '} 
            ${type === 'wife' && 'bg-secondary-thin '}         
            flex  items-center  pt-[48px]`}
        >
          <Form.Item
            className="!mb-0 !w-full"
            name={[`${type}`, 'workInfor', 'dutyStation']}
            rules={[{ required: true, message: '10文字以内' }]}
          >
            <BasicInput
              className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
              placeholder="新宿区新宿"
            />
          </Form.Item>
        </div>
      </div>
      {/* Length of service */}
      <div className="flex w-full h-full  items-center">
        {!disabledLabel && (
          <div className="w-[176px] print:w-[70px] text-[14px] print:text-[10px] font-bold  pt-[48px]">勤続年数</div>
        )}
        <div
          className={`
            ${
              type === 'husband' || type === 'wife'
                ? 'w-[528px] print:w-[350px] print:px-[24px] px-[48px] '
                : 'w-full pl-[48px]'
            } 
            ${type === 'husband' && 'bg-primary-light '} 
            ${type === 'wife' && 'bg-secondary-thin '}
            flex space-x-[8px] items-center  pt-[48px]`}
        >
          <Form.Item
            className="!mb-0 !w-full flex-1"
            name={[`${type}`, 'workInfor', 'lengthOfService']}
            rules={[
              // { max: 2, message: '半角数字、2文字以内' },
              {
                validator: (_, value) => {
                  if (value?.length <= 2 && RegexKatakanaHalfWidth.test(value)) {
                    return Promise.resolve();
                  }
                  return Promise.reject('半角数字、2文字以内');
                },
              },
            ]}
          >
            <BasicInput
              className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
              placeholder="5"
              type="number"
            />
          </Form.Item>
          <span className="text-[14px] print:text-[10px] font-bold">年</span>
        </div>
      </div>

      {/* transfer */}
      <div className="flex w-full h-full  items-start">
        {!disabledLabel && (
          <div className="w-[176px] print:w-[70px] text-[14px] print:text-[10px] font-bold pt-[48px]">転勤</div>
        )}
        <div
          className={`
            ${
              type === 'husband' || type === 'wife'
                ? 'w-[528px] print:w-[350px] print:px-[24px] px-[48px] '
                : 'w-full pl-[48px]'
            } 
            ${type === 'husband' && 'bg-primary-light '} 
            ${type === 'wife' && 'bg-secondary-thin '}
            pt-[42px]`}
        >
          <Form.Item className="!mb-0 !w-full" name={[`${type}`, 'workInfor', 'transfer']}>
            <Radio.Group className="!w-full ">
              <div className="flex space-x-[24px]">
                <BasicRadio value="single">
                  <span className="text-[14px] print:text-[10px] font-bold ">有</span>
                </BasicRadio>
                <BasicRadio value="multiple">
                  <span className="text-[14px] print:text-[10px] font-bold ">無</span>
                </BasicRadio>
              </div>
            </Radio.Group>
          </Form.Item>
        </div>
      </div>
      {/* Desire to change jobs */}
      <div className="flex w-full h-full  items-start">
        {!disabledLabel && (
          <div className="w-[176px] print:w-[70px] text-[14px] print:text-[10px] font-bold pt-[48px]">転職希望</div>
        )}
        <div
          className={`
            ${
              type === 'husband' || type === 'wife'
                ? 'w-[528px] print:w-[350px] print:px-[24px] px-[48px] '
                : 'w-full pl-[48px]'
            } 
            ${type === 'husband' && 'bg-primary-light '} 
            ${type === 'wife' && 'bg-secondary-thin '}
            px-[48px] pt-[42px]`}
        >
          <Form.Item className="!mb-0 !w-full" name={[`${type}`, 'workInfor', 'desireToChangeJobs']}>
            <Radio.Group className="!w-full">
              <div className="flex space-x-[24px]">
                <BasicRadio value="single">
                  <span className="text-[14px] print:text-[10px] font-bold ">有</span>
                </BasicRadio>
                <BasicRadio value="multiple">
                  <span className="text-[14px] print:text-[10px] font-bold ">無</span>
                </BasicRadio>
              </div>
            </Radio.Group>
          </Form.Item>
        </div>
      </div>
      {/* Commuting method/time*/}
      <div className="flex w-full h-full  items-start ">
        {!disabledLabel && (
          <div className="w-[176px] print:w-[70px] text-[14px] print:text-[10px] pt-[48px] font-bold">
            通勤方法・時間
          </div>
        )}
        <div
          className={`
            ${
              type === 'husband' || type === 'wife'
                ? 'w-[528px] print:w-[350px] print:px-[24px] px-[48px] '
                : 'w-full pl-[48px]'
            } 
            ${type === 'husband' && 'bg-primary-light '} 
            ${type === 'wife' && 'bg-secondary-thin '}
            flex flex-col space-y-[24px] pt-[42px] pb-[48px] `}
        >
          <Form.Item className="!mb-0 !w-full" name={[`${type}`, 'workInfor', 'commutingTime', 'type']}>
            <Radio.Group className="!w-full">
              <div className="flex space-x-[20px] print:space-x-0 ">
                <BasicRadio value="0">
                  <span className="text-[14px] print:text-[10px] font-bold ">徒歩</span>
                </BasicRadio>
                <BasicRadio value="1">
                  <span className="text-[14px] print:text-[10px] font-bold ">自転車</span>
                </BasicRadio>
                <BasicRadio value="2">
                  <span className="text-[14px] print:text-[10px] font-bold ">バス</span>
                </BasicRadio>
                <BasicRadio value="3">
                  <span className="text-[14px] print:text-[10px] font-bold ">電車</span>
                </BasicRadio>
                <BasicRadio value="4">
                  <span className="text-[14px] print:text-[10px] font-bold ">車</span>
                </BasicRadio>
                <BasicRadio value="5">
                  <span className="text-[14px] print:text-[10px] font-bold ">その他</span>
                </BasicRadio>
              </div>
            </Radio.Group>
          </Form.Item>
          <div className="flex items-center space-x-[8px]">
            <Form.Item
              className="!mb-0 !w-full flex-1"
              name={[`${type}`, 'workInfor', 'commutingTime', 'time']}
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
              <BasicInput
                className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
                placeholder="20"
                type="number"
              />
            </Form.Item>
            <span className="text-[14px] print:text-[10px] font-bold ">分</span>
          </div>
        </div>
      </div>

      {/* MEMO */}
      <div className="flex w-full h-full  items-start   ">
        {!disabledLabel && (
          <div className="w-[176px] print:w-[70px] text-[14px] print:text-[10px] font-bold pt-[14px]">メモ</div>
        )}
        <div
          className={`
            ${
              type === 'husband' || type === 'wife'
                ? 'w-[528px] print:w-[350px] print:px-[24px] px-[48px] print:break-before-page'
                : 'w-full pl-[48px]'
            } 
            ${type === 'husband' && 'bg-primary-light '} 
            ${type === 'wife' && 'bg-secondary-thin '}
            flex flex-col space-y-[24px] pb-[66px] rounded-b-[16px] print:pt-[24px]  `}
        >
          <Form.Item
            className="!mb-0 !w-full"
            name={[`${type}`, 'workInfor', 'memo']}
            rules={[{ max: 60, message: '60文字以内' }]}
          >
            <BasicTextArea
              className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
              maxLength={60}
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
