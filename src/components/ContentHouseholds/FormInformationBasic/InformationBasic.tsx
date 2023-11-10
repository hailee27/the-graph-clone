/* eslint-disable max-lines */
/* eslint-disable max-lines-per-function */
import { Form, Radio } from 'antd';
import React, { useMemo } from 'react';
import BasicInput from '../../common/BasicInput';
import SelectButton from '../../common/SelectButton';
import DatePickerWithType from '../../common/DatePickerWithType';
import BasicRadio from '../../common/BasicRadio';
import BasicButton from '../../common/BasicButton';
import BasicTextArea from '../../common/BasicTextArea';
import moment from 'moment';

interface Props {
  disabledLabel?: boolean;
  type?: 'husband' | 'wife' | string;
}

function InformationBasic(props: Props) {
  const { disabledLabel, type } = props;
  const form = Form.useFormInstance();
  const year = Form.useWatch([`${type}`, 'inforBasic', 'birthDay', 'year'], form)?.format('YYYY');
  const month = Form.useWatch([`${type}`, 'inforBasic', 'birthDay', 'month'], form)?.format('MM');
  const day = Form.useWatch([`${type}`, 'inforBasic', 'birthDay', 'day'], form)?.format('DD');
  const savingMonth = Form.useWatch([`${type}`, 'inforBasic', 'saving', 'monthly']);
  const savingTotalAmount = Form.useWatch([`${type}`, 'inforBasic', 'saving', 'totalAmount']);
  const savingRate = useMemo(() => {
    if (savingMonth && savingTotalAmount) {
      return Math.round((Number(savingMonth) / Number(savingTotalAmount)) * 100);
    }
    return '00';
  }, [savingMonth, savingTotalAmount]);
  // const years = (back: number) => {
  //   const y = new Date().getFullYear();
  //   return Array.from({ length: back }, (v, i) => y - back + i + 1);
  // };

  // console.log(years(100));

  return (
    <div className="h-full w-full text-primary-text">
      {(type === 'husband' || type === 'wife') && (
        <div className="flex w-full h-full">
          {!disabledLabel && <div className="w-[176px] print:w-[105px]"></div>}
          <div
            className={`
              ${type === 'husband' || type === 'wife' ? 'w-[528px] print:w-[315px] print:px-[20px]' : 'w-full'} 
              ${type === 'husband' && 'bg-primary-light '} 
              ${type === 'wife' && 'bg-secondary-thin '}
              bg-primary-light rounded-t-[16px] h-[66px] relative`}
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
      {/* NAME 1*/}
      <div className="flex w-full h-full  items-center">
        {!disabledLabel && <div className="w-[176px] print:w-[105px] text-[14px] font-bold">お名前</div>}
        <div
          className={`
            ${
              type === 'husband' || type === 'wife'
                ? 'w-[528px] print:w-[315px] print:px-[20px] px-[48px] '
                : 'w-full pl-[48px]'
            } 
            ${type === 'husband' && 'bg-primary-light '} 
            ${type === 'wife' && 'bg-secondary-thin '}
            flex space-x-[8px] items-center`}
        >
          <Form.Item className="!mb-0 w-full" name={[`${type}`, 'inforBasic', 'name', 'firstName']}>
            <BasicInput
              className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
              placeholder="山田"
            />
          </Form.Item>
          <Form.Item className="!mb-0 w-full" name={[`${type}`, 'inforBasic', 'name', 'lastName']}>
            <BasicInput
              className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
              placeholder="太郎"
            />
          </Form.Item>
          <span className="text-[14px] font-bold">様</span>
        </div>
      </div>
      {/* NAME 2*/}
      <div className="flex w-full h-full  items-center">
        {!disabledLabel && (
          <div className="w-[176px] print:w-[105px] text-[14px] font-bold  pt-[48px]">お名前（フリガナ）</div>
        )}
        <div
          className={`${
            type === 'husband' || type === 'wife'
              ? 'w-[528px] print:w-[315px] print:px-[20px] px-[48px]'
              : 'w-full pl-[48px]'
          }   ${type === 'husband' && 'bg-primary-light '} ${
            type === 'wife' && 'bg-secondary-thin '
          } flex  space-x-[8px] items-center pt-[48px]`}
        >
          <Form.Item className="!mb-0 w-full" name={[`${type}`, 'inforBasic', 'name1', 'firstName']}>
            <BasicInput
              className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
              placeholder="ヤマダ"
            />
          </Form.Item>
          <Form.Item className="!mb-0 w-full" name={[`${type}`, 'inforBasic', 'name1', 'lastName']}>
            <BasicInput
              className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
              placeholder="タロウ"
            />
          </Form.Item>
          <span className="text-[14px] font-bold">様</span>
        </div>
      </div>
      {/* Gender */}
      {type === 'husband' || type === 'wife' ? null : (
        <div className="flex w-full h-full  items-center">
          {!disabledLabel && <div className="w-[176px] print:w-[105px] text-[14px] font-bold  pt-[48px]">性別</div>}
          <div
            className={`${
              type === 'husband' || type === 'wife'
                ? 'w-[528px] print:w-[315px] print:px-[20px] px-[48px]'
                : 'w-full pl-[48px]'
            }   ${type === 'husband' && 'bg-primary-light '} ${
              type === 'wife' && 'bg-secondary-thin '
            } flex  space-x-[8px] items-center pt-[48px]`}
          >
            <Form.Item className="!mb-0 w-full" name={[`${type}`, 'inforBasic', 'gender']}>
              <Radio.Group>
                <div className="flex space-x-[24px]">
                  <BasicRadio value="single">
                    <span className="text-[14px] font-bold ">男性</span>
                  </BasicRadio>
                  <BasicRadio value="multiple">
                    <span className="text-[14pxs] font-bold ">女性</span>
                  </BasicRadio>
                </div>
              </Radio.Group>
            </Form.Item>
          </div>
        </div>
      )}

      {/* BIRTH DATE */}
      <div className="flex w-full h-full  items-center">
        {!disabledLabel && <div className="w-[176px] print:w-[105px] text-[14px] font-bold  pt-[48px]">生年月日</div>}
        <div
          className={` 
            ${
              type === 'husband' || type === 'wife'
                ? 'w-[528px] print:w-[315px] print:px-[20px] px-[48px]'
                : 'w-full pl-[48px]'
            } 
            ${type === 'husband' && 'bg-primary-light '}
            ${type === 'wife' && 'bg-secondary-thin '} 
            flex  items-center  pt-[48px]`}
        >
          <div className="flex items-center justify-between space-x-[8px]">
            <Form.Item className="!mb-0" name={[`${type}`, 'inforBasic', 'birthDay', 'year']}>
              <DatePickerWithType
                className={`${
                  type === 'husband' || type === 'wife' ? '!w-[92px] print:!w-[80px]' : 'bg-primary-light !w-[120px]'
                } `}
                // disabledDate={(currentDay) => currentDay > moment() || currentDay < moment().subtract(3, 'day')}
                format={'YYYY'}
                picker="year"
              />
            </Form.Item>
            <span className="text-[14px] font-bold">年</span>
            <Form.Item className="!mb-0" name={[`${type}`, 'inforBasic', 'birthDay', 'month']}>
              <DatePickerWithType
                className={`${
                  type === 'husband' || type === 'wife' ? '!w-[80px] print:!w-[40px]' : 'bg-primary-light !w-[120px]'
                } `}
                format={'MM'}
                picker="month"
              />
            </Form.Item>
            <span className="text-[14px] font-bold">月</span>
            <Form.Item className="!mb-0" name={[`${type}`, 'inforBasic', 'birthDay', 'day']}>
              <DatePickerWithType
                className={`${
                  type === 'husband' || type === 'wife' ? '!w-[80px] print:!w-[40px]' : 'bg-primary-light !w-[120px]'
                } `}
                format={'DD'}
                picker="date"
              />
            </Form.Item>
            <span className="text-[14px] font-bold">日</span>
          </div>

          <div
            className={`text-[14px] text-right font-bold ${
              type === 'husband' || type === 'wife' ? 'flex-1 ' : ' pl-[26px]'
            } `}
          >
            {'('}
            {moment().diff(moment(`${year}-${month}-${day}`), 'year') || '00'}歳{')'}
          </div>
        </div>
      </div>
      {/* ADDRESS */}
      <div className="flex w-full h-full  items-start">
        {!disabledLabel && <div className="w-[176px] print:w-[105px] text-[14px] font-bold  pt-[48px]">現在の住所</div>}
        <div
          className={`
            ${
              type === 'husband' || type === 'wife'
                ? 'w-[528px] print:w-[315px] print:px-[20px] px-[48px]'
                : 'w-full pl-[48px]'
            } 
            ${type === 'husband' && 'bg-primary-light '} 
            ${type === 'wife' && 'bg-secondary-thin '}
            flex space-x-[8px] items-center pt-[42px]`}
        >
          <div className="w-full">
            <Form.Item name={[`${type}`, 'inforBasic', 'address', 'name']}>
              <Radio.Group>
                <div className="flex space-x-[24px]">
                  <BasicRadio value="single">
                    <span className="text-[14px] font-bold ">実家</span>
                  </BasicRadio>
                  <BasicRadio value="multiple">
                    <span className="text-[14pxs] font-bold ">賃貸</span>
                  </BasicRadio>
                  <BasicRadio value="multiple1">
                    <span className="text-[14px] font-bold ">社宅</span>
                  </BasicRadio>
                </div>
              </Radio.Group>
            </Form.Item>
            <div className="w-full flex flex-col space-y-[8px]">
              <div className="flex items-center  space-x-[32px] ">
                <span className="text-[14px] font-bold max-w-[60px] w-full">郵便番号</span>
                <div className="flex items-center space-x-[16px]">
                  <Form.Item
                    className=" flex-1 !mb-0"
                    name={[`${type}`, 'inforBasic', 'address', 'code']}
                    rules={[{ required: true, message: '郵便番号入力してください' }]}
                  >
                    <BasicInput
                      className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light max-w-[400px] w-full'}
                      placeholder="111111"
                      type="number"
                    />
                  </Form.Item>
                  <BasicButton className="h-[34px] w-[108px]" type="default">
                    <span className="text-[12px]">郵便番号検索</span>
                  </BasicButton>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-[32px] ">
                <span className="text-[14px] font-bold max-w-[60px] w-full">都道府県</span>
                <Form.Item className=" flex-1 !mb-0" name={[`${type}`, 'inforBasic', 'address', 'prefectures']}>
                  <SelectButton
                    options={[
                      { value: 'jack', label: 'Jack' },
                      { value: 'lucy', label: 'Lucy' },
                      { value: 'Yiminghe', label: 'yiminghe' },
                      { value: 'disabled', label: 'Disabled', disabled: true },
                    ]}
                    placeholder="東京都"
                    type={type === 'husband' || type === 'wife' ? 'default' : 'primary'}
                  />
                </Form.Item>
              </div>
              <div className="flex items-center justify-center space-x-[32px] ">
                <span className="text-[14px] font-bold max-w-[60px] w-full">市区町村</span>
                <Form.Item className=" flex-1 !mb-0" name={[`${type}`, 'inforBasic', 'address', 'municipalities']}>
                  <BasicInput
                    className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
                    placeholder="新宿区新宿1丁目"
                  />
                </Form.Item>
              </div>
              <div className="flex items-center justify-center space-x-[32px] ">
                <span className="text-[14px] font-bold max-w-[60px] w-full">
                  番地・ <br /> ビル名
                </span>
                <Form.Item className=" flex-1 !mb-0" name={[`${type}`, 'inforBasic', 'address', 'street']}>
                  <BasicInput
                    className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
                    placeholder="36-7　新宿内野ビルII 3F"
                  />
                </Form.Item>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* lifeInsurance */}
      <div className="flex w-full h-full  items-start">
        {!disabledLabel && <div className="w-[176px] print:w-[105px] text-[14px] font-bold pt-[48px]">生命保険</div>}
        <div
          className={`
            ${
              type === 'husband' || type === 'wife'
                ? 'w-[528px] print:w-[315px] print:px-[20px] px-[48px]'
                : 'w-full pl-[48px]'
            }
            ${type === 'husband' && 'bg-primary-light '}
            ${type === 'wife' && 'bg-secondary-thin '}
            flex  space-x-[8px] items-center pt-[42px]`}
        >
          <div className="w-full flex flex-col space-y-[24px]">
            {[0].map((item) => (
              <div key={item}>
                <Form.Item
                  className={`!mb-0 ${type === 'husband' || type === 'wife' ? 'w-full' : 'w-[416px]'} `}
                  name={[`${type}`, 'inforBasic', 'lifeInsurance', 'type']}
                >
                  <Radio.Group className="!w-full">
                    <div className="flex justify-between">
                      <BasicRadio value="1">
                        <span className="text-[14px] font-bold ">定期</span>
                      </BasicRadio>
                      <BasicRadio value="2">
                        <span className="text-[14pxs] font-bold ">終身</span>
                      </BasicRadio>
                      <BasicRadio value="3">
                        <span className="text-[14px] font-bold ">養老</span>
                      </BasicRadio>
                      <BasicRadio value="4">
                        <span className="text-[14px] font-bold ">医療</span>
                      </BasicRadio>
                      <BasicRadio value="5">
                        <span className="text-[14px] font-bold ">ガン</span>
                      </BasicRadio>
                      <BasicRadio value="6">
                        <span className="text-[14px] font-bold ">無</span>
                      </BasicRadio>
                    </div>
                  </Radio.Group>
                </Form.Item>
                <div className="flex items-center flex-1 w-full  mt-[20px]">
                  <span className="text-[14px] font-bold max-w-[60px] w-full mr-[32px]">
                    月額
                    <br /> 保険料
                  </span>
                  <Form.Item className="!mb-0 flex-1" name={[`${type}`, 'inforBasic', 'lifeInsurance', 'fee']}>
                    <BasicInput
                      className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
                      placeholder="15000"
                      type="number"
                    />
                  </Form.Item>
                  <span className="text-[14px] font-bold ml-[8px] ">円</span>
                </div>
              </div>
            ))}
            {/* eslint-disable-next-line no-console */}
            <BasicButton className="h-[58px] mt-[14px]" onClick={() => console.log('aloo')} type="default">
              <span className="text-[14px] text-primary-text">+ 追加する</span>
            </BasicButton>
          </div>
        </div>
      </div>
      {/* Household account book */}
      <div className="flex w-full h-full  items-center ">
        {!disabledLabel && <div className="w-[176px] print:w-[105px] text-[14px] font-bold">家計簿</div>}
        <div
          className={`
            ${
              type === 'husband' || type === 'wife'
                ? 'w-[528px] print:w-[315px] print:px-[20px] px-[48px]'
                : 'w-full pl-[48px]'
            }
            ${type === 'husband' && 'bg-primary-light '}
            ${type === 'wife' && 'bg-secondary-thin '}
            flex  space-x-[8px] pt-[42px] pb-[48px] items-center`}
        >
          <Form.Item className="!mb-0 !w-full" name={[`${type}`, 'inforBasic', 'household']}>
            <Radio.Group className="!w-full">
              <div className="flex space-x-[24px]">
                <BasicRadio value="1">
                  <span className="text-[14px] font-bold ">付けている</span>
                </BasicRadio>
                <BasicRadio value="2">
                  <span className="text-[14pxs] font-bold ">付けていない</span>
                </BasicRadio>
              </div>
            </Radio.Group>
          </Form.Item>
        </div>
      </div>
      {/* Saving */}
      <div className="flex w-full h-full  items-start ">
        {!disabledLabel && <div className="w-[176px] print:w-[105px] text-[14px] font-bold pt-[19px] ">貯金</div>}
        <div
          className={`
            ${
              type === 'husband' || type === 'wife'
                ? 'w-[528px] print:w-[315px] print:px-[20px] px-[48px]'
                : 'w-full pl-[48px]'
            } 
            ${type === 'husband' && 'bg-primary-light '} 
            ${type === 'wife' && 'bg-secondary-thin '}
            flex flex-col space-y-[8px]   pb-[48px] items-center`}
        >
          <div className="flex items-center flex-1 w-full">
            <span className="text-[14px] font-bold max-w-[60px] w-full mr-[32px]">毎月</span>
            <Form.Item className="!mb-0 flex-1" name={[`${type}`, 'inforBasic', 'saving', 'monthly']}>
              <BasicInput
                className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
                placeholder="30000"
                type="number"
              />
            </Form.Item>
            <span className="text-[14px] font-bold ml-[8px] ">円</span>
          </div>
          <div className="flex items-center flex-1 w-full">
            <span className="text-[14px] font-bold max-w-[60px] w-full mr-[32px]">総額</span>
            <Form.Item className="!mb-0 flex-1" name={[`${type}`, 'inforBasic', 'saving', 'totalAmount']}>
              <BasicInput
                className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
                placeholder="600000"
                type="number"
              />
            </Form.Item>
            <span className="text-[14px] font-bold ml-[8px] ">円</span>
          </div>
          <div className="flex items-center flex-1 w-full pt-[16px]">
            <span className="text-[14px] font-bold max-w-[60px] w-full mr-[52px]">貯蓄率</span>
            <span className="text-[16px] font-bold">{savingRate} %</span>
          </div>
        </div>
      </div>
      {/* gambling */}
      <div className="flex w-full h-full  items-start ">
        {!disabledLabel && <div className="w-[176px] print:w-[105px] text-[14px] pt-[8px] font-bold">お名前</div>}
        <div
          className={`
            ${
              type === 'husband' || type === 'wife'
                ? 'w-[528px] print:w-[315px] print:px-[20px] px-[48px]'
                : 'w-full pl-[48px]'
            }
            ${type === 'husband' && 'bg-primary-light '} 
            ${type === 'wife' && 'bg-secondary-thin '}
            flex flex-col space-y-[24px] pb-[48px] `}
        >
          <Form.Item className="!mb-0 !w-full" name={[`${type}`, 'inforBasic', 'gambling', 'type']}>
            <Radio.Group className="!w-full">
              <div className="flex space-x-[24px]">
                <BasicRadio value="1">
                  <span className="text-[14px] font-bold ">無</span>
                </BasicRadio>
                <BasicRadio value="2">
                  <span className="text-[14pxs] font-bold ">パチンコ</span>
                </BasicRadio>
                <BasicRadio value="3">
                  <span className="text-[14pxs] font-bold ">公営ギャンブル</span>
                </BasicRadio>
              </div>
            </Radio.Group>
          </Form.Item>
          <Form.Item className="!mb-0 !w-full" name={[`${type}`, 'inforBasic', 'gambling', 'content']}>
            <BasicTextArea
              className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
              placeholder="自由にご記入ください"
              style={{ height: '100px', resize: 'none' }}
            />
          </Form.Item>
        </div>
      </div>
      {/* Hobbies/Entertainment */}
      <div className="flex w-full h-full  items-start ">
        {!disabledLabel && <div className="w-[176px] print:w-[105px] text-[14px] font-bold pt-[14px]">趣味・娯楽</div>}
        <div
          className={`
            ${
              type === 'husband' || type === 'wife'
                ? 'w-[528px] print:w-[315px] print:px-[20px] px-[48px]'
                : 'w-full pl-[48px]'
            }
            ${type === 'husband' && 'bg-primary-light '}
            ${type === 'wife' && 'bg-secondary-thin '}
            flex flex-col  space-y-[24px] pb-[48px] `}
        >
          <Form.Item className="!mb-0 !w-full" name={[`${type}`, 'inforBasic', 'hobbies']}>
            <BasicTextArea
              className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
              placeholder="自由にご記入ください"
              style={{ height: '100px', resize: 'none' }}
            />
          </Form.Item>
        </div>
      </div>
      {/* MEMO */}
      <div className="flex w-full h-full  items-start ">
        {!disabledLabel && <div className="w-[176px] print:w-[105px] text-[14px] font-bold pt-[14px]">メモ</div>}
        <div
          className={`
            ${
              type === 'husband' || type === 'wife'
                ? 'w-[528px] print:w-[315px] print:px-[20px] px-[48px]'
                : 'w-full pl-[48px]'
            }   
            ${type === 'husband' && 'bg-primary-light '} 
            ${type === 'wife' && 'bg-secondary-thin '} 
            flex flex-col space-y-[24px] pb-[66px] rounded-b-[16px] `}
        >
          <Form.Item className="!mb-0 !w-full" name={[`${type}`, 'inforBasic', 'memo']}>
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
InformationBasic.defaultProps = {
  disabledLabel: false,
  type: 'husband',
};
export default InformationBasic;
