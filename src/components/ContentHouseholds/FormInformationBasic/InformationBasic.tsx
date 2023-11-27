/* eslint-disable max-lines */
/* eslint-disable max-lines-per-function */
import { Form, Radio } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import BasicInput from '../../common/BasicInput';
import SelectButton from '../../common/SelectButton';
// import DatePickerWithType from '../../common/DatePickerWithType';
import BasicRadio from '../../common/BasicRadio';
import BasicButton from '../../common/BasicButton';
import BasicTextArea from '../../common/BasicTextArea';
import moment from 'moment';
import DatePicker from '../../common/DatePicker';
import { isKatakana, toKatakana } from 'wanakana';
import { useLazyGetMasterDataDistinctQuery } from '../../../redux/endpoints/masterData';
import { useHouseHoldsContext } from '../../context/HouseHoldsContext';
import { useNotificationContext } from '../../context/NotificationContext';

interface Props {
  disabledLabel?: boolean;
  type?: 'husband' | 'wife' | string;
}

function InformationBasic(props: Props) {
  const { disabledLabel, type } = props;
  const form = Form.useFormInstance();
  const [ruleBirthday, setRuleBirthday] = useState({
    year: false,
    month: false,
    day: false,
  });
  const [numberLifeInsurance, setNumberLifeInsurance] = useState<
    {
      id?: number;
      fee: number;
      type?: string;
    }[]
  >([
    {
      id: 1,
      fee: 0,
      type: '1',
    },
  ]);

  const [trigger, { data: dataAddress, isLoading, isSuccess }] = useLazyGetMasterDataDistinctQuery();
  const { currentAddressPrefecture } = useHouseHoldsContext();
  const { openNotification } = useNotificationContext();
  const year: string = Form.useWatch([`${type}`, 'inforBasic', 'birthDay', 'year'], form);
  const month: string = Form.useWatch([`${type}`, 'inforBasic', 'birthDay', 'month'], form);
  const day: string = Form.useWatch([`${type}`, 'inforBasic', 'birthDay', 'day'], form);

  const firstName = Form.useWatch([`${type}`, 'inforBasic', 'nameKanji', 'firstName']);
  const lastName = Form.useWatch([`${type}`, 'inforBasic', 'nameKanji', 'lastName']);

  const savingMonth = Form.useWatch([`${type}`, 'inforBasic', 'saving', 'monthly']);
  const savingTotalAmount = Form.useWatch([`${type}`, 'inforBasic', 'saving', 'totalAmount']);

  const savingRate = useMemo(() => {
    if (savingMonth && savingTotalAmount) {
      return ((Number(savingMonth) / Number(savingTotalAmount)) * 100).toFixed(1);
    }
    return '00';
  }, [savingMonth, savingTotalAmount]);
  const age = useMemo(() => {
    return moment().diff(moment(`${year}-${month}-${day}`), 'year') || '00';
  }, [year, month, day]);
  // const RegexKatakanaFullWidth = /^([ァ-ン]|ー)+$/;
  const RegexKatakanaHalfWidth = /^[ｧ-ﾝﾞﾟ]|[0-9]+$/;

  useEffect(() => {
    if (age) {
      form.setFieldValue([`${type}`, 'inforBasic', 'age'], age);
    }
  }, [age]);
  useEffect(() => {
    form.setFieldsValue({
      [`${type}`]: {
        inforBasic: {
          nameKatakana: {
            firstName: toKatakana(firstName, { upcaseKatakana: true }),
            lastName: toKatakana(lastName),
          },
        },
      },
    });
  }, [firstName, lastName]);

  useEffect(() => {
    form.setFieldsValue({
      [`${type}`]: {
        inforBasic: {
          address: {
            prefectures: dataAddress?.data?.[0]?.prefecture,
            municipalities:
              String(dataAddress?.data?.[0]?.city ?? '') + String(dataAddress?.data?.[0]?.neighborhood ?? ''),
          },
        },
      },
    });
  }, [dataAddress?.data?.[0]]);
  useEffect(() => {
    if (dataAddress?.data?.length === 0 && isSuccess) {
      openNotification.error({
        message: <div className="pr-[24px]">郵便番号が正しくないので、検索できません。 再度ご確認お願いします。</div>,
        placement: 'top',
        icon: (
          <svg
            aria-hidden="true"
            data-icon="close-circle"
            fill="currentColor"
            fillRule="evenodd"
            focusable="false"
            height="1em"
            viewBox="64 64 896 896"
            width="1em"
          >
            <path
              d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"
              fill="#ff4d4f"
            ></path>
          </svg>
        ),
      });
    }
  }, [dataAddress, isSuccess]);
  useEffect(() => {
    const sum = Number(
      numberLifeInsurance.map((e) => Number(e?.fee ?? 0)).reduce((prev, cur) => Number(prev) + Number(cur))
    );

    form.setFieldValue('lifeInsurancePremium', sum);
  }, [numberLifeInsurance]);

  return (
    <div className="h-full w-full text-primary-text">
      {/* lifeInsurancePremium */}
      {/* <Form.Item className="!hidden" name={[`${type}`, 'inforBasic', 'lifeInsurancePremium']}>
        <BasicInput />
      </Form.Item> */}
      <Form.Item className="!hidden" name={[`${type}`, 'inforBasic', 'age']}>
        <BasicInput />
      </Form.Item>
      {(type === 'husband' || type === 'wife') && (
        <div className="flex w-full h-full">
          {!disabledLabel && <div className="w-[176px] print:w-[70px]"></div>}
          <div
            className={`
              ${type === 'husband' || type === 'wife' ? 'w-[528px] print:w-[350px] print:px-[24px]' : 'w-full'} 
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
      {/* NAME Kanji*/}
      <div className="flex w-full h-full  items-center">
        {!disabledLabel && (
          <div className="w-[176px] print:w-[70px] text-[14px] print:text-[10px] font-bold">お名前</div>
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
            flex space-x-[8px] items-center`}
        >
          <Form.Item
            className="!mb-0 w-full"
            name={[`${type}`, 'inforBasic', 'nameKanji', 'firstName']}
            rules={[
              { required: true, message: '' },
              { max: 10, message: '10文字以内' },
            ]}
          >
            <BasicInput
              className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
              placeholder="山田"
            />
          </Form.Item>
          <Form.Item
            className="!mb-0 w-full"
            name={[`${type}`, 'inforBasic', 'nameKanji', 'lastName']}
            rules={[
              { required: true, message: '' },
              { max: 10, message: '10文字以内' },
            ]}
          >
            <BasicInput
              className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
              placeholder="太郎"
            />
          </Form.Item>
          <span className="text-[14px] print:text-[10px] font-bold">様</span>
        </div>
      </div>
      {/* NAME Katakana */}
      <div className="flex w-full h-full  items-center">
        {!disabledLabel && (
          <div className="w-[176px] print:w-[70px] text-[14px] print:text-[10px] font-bold  pt-[48px]">
            お名前（フリガナ）
          </div>
        )}
        <div
          className={`${
            type === 'husband' || type === 'wife'
              ? 'w-[528px] print:w-[350px] print:px-[24px] px-[48px]'
              : 'w-full pl-[48px]'
          }   ${type === 'husband' && 'bg-primary-light '} ${
            type === 'wife' && 'bg-secondary-thin '
          } flex  space-x-[8px] items-center pt-[48px]`}
        >
          <Form.Item
            className="!mb-0 w-full"
            name={[`${type}`, 'inforBasic', 'nameKatakana', 'firstName']}
            rules={[
              {
                validator: (_, value) => {
                  if (value) {
                    if (value?.length < 10 && isKatakana(value)) {
                      return Promise.resolve();
                    }

                    return Promise.reject('カタカナのみ、10文字以内');
                  }
                  return Promise.reject('');
                },
              },
            ]}
          >
            <BasicInput
              className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
              placeholder="ヤマダ"
            />
          </Form.Item>
          <Form.Item
            className="!mb-0 w-full"
            name={[`${type}`, 'inforBasic', 'nameKatakana', 'lastName']}
            rules={[
              {
                validator: (_, value) => {
                  if (value) {
                    if (value?.length < 10 && isKatakana(value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject('カタカナのみ、10文字以内');
                  }
                  return Promise.reject('');
                },
              },
            ]}
          >
            <BasicInput
              className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
              placeholder="タロウ"
            />
          </Form.Item>
          <span className="text-[14px] print:text-[10px] font-bold">様</span>
        </div>
      </div>
      {/* Gender */}
      {type === 'husband' || type === 'wife' ? null : (
        <div className="flex w-full h-full  items-center">
          {!disabledLabel && (
            <div className="w-[176px] print:w-[70px] text-[14px] print:text-[10px] font-bold  pt-[48px]">性別</div>
          )}
          <div
            className={`${
              type === 'husband' || type === 'wife'
                ? 'w-[528px] print:w-[350px] print:px-[24px] px-[48px]'
                : 'w-full pl-[48px]'
            }   ${type === 'husband' && 'bg-primary-light '} ${
              type === 'wife' && 'bg-secondary-thin '
            } flex  space-x-[8px] items-center pt-[48px]`}
          >
            <Form.Item className="!mb-0 w-full" name={[`${type}`, 'inforBasic', 'gender']}>
              <Radio.Group>
                <div className="flex space-x-[24px]">
                  <BasicRadio value="single">
                    <span className="text-[14px] print:text-[10px] font-bold ">男性</span>
                  </BasicRadio>
                  <BasicRadio value="multiple">
                    <span className="text-[14px] print:text-[10px] font-bold ">女性</span>
                  </BasicRadio>
                </div>
              </Radio.Group>
            </Form.Item>
          </div>
        </div>
      )}

      {/* BIRTH DATE */}
      <div className="flex w-full h-full  items-center">
        {!disabledLabel && (
          <div className="w-[176px] print:w-[70px] text-[14px] print:text-[10px] font-bold  pt-[48px]">生年月日</div>
        )}
        <div
          className={` 
            ${
              type === 'husband' || type === 'wife'
                ? 'w-[528px] print:w-[350px] print:px-[24px] px-[48px]'
                : 'w-full pl-[48px]'
            } 
            ${type === 'husband' && 'bg-primary-light '}
            ${type === 'wife' && 'bg-secondary-thin '} 
            flex  items-center  pt-[48px]`}
        >
          {/* <Form.Item
            className="!mb-0"
            name={[`${type}`, 'inforBasic', 'birthDay']}
            rules={[{ required: true, message: '' }]}
          > */}
          <div className="flex items-center justify-between space-x-[8px]">
            <Form.Item
              className="!mb-0"
              name={[`${type}`, 'inforBasic', 'birthDay', 'year']}
              rules={[{ required: !ruleBirthday.year, message: '半角数字' }]}
            >
              <DatePicker
                className={`${type === 'husband' || type === 'wife' ? '!w-[92px] print:!w-[70px] ' : ' !w-[120px]'} `}
                onSearch={(e) =>
                  setRuleBirthday((prev) => ({
                    ...prev,
                    year: RegexKatakanaHalfWidth.test(e),
                  }))
                }
                placeholder={moment().format('YYYY')}
                type={type === 'husband' || type === 'wife' ? 'default' : 'primary'}
                typePicker="year"
              />
            </Form.Item>
            <span className="text-[14px] print:text-[10px] font-bold">年</span>
            <Form.Item
              className="!mb-0"
              name={[`${type}`, 'inforBasic', 'birthDay', 'month']}
              rules={[{ required: !ruleBirthday.month, message: '半角数字' }]}
            >
              <DatePicker
                className={`${type === 'husband' || type === 'wife' ? '!w-[80px] print:!w-[57px] ' : ' !w-[120px]'} `}
                onSearch={(e) =>
                  setRuleBirthday((prev) => ({
                    ...prev,
                    month: RegexKatakanaHalfWidth.test(e),
                  }))
                }
                placeholder={moment().format('MM')}
                type={type === 'husband' || type === 'wife' ? 'default' : 'primary'}
                typePicker="month"
              />
            </Form.Item>
            <span className="text-[14px] print:text-[10px] font-bold">月</span>
            <Form.Item
              className="!mb-0"
              name={[`${type}`, 'inforBasic', 'birthDay', 'day']}
              rules={[{ required: !ruleBirthday.day, message: '半角数字' }]}
            >
              <DatePicker
                className={`${type === 'husband' || type === 'wife' ? '!w-[80px]  print:!w-[57px] ' : ' !w-[120px]'} `}
                monthInYear={month ?? moment().format('MM')}
                onSearch={(e) =>
                  setRuleBirthday((prev) => ({
                    ...prev,
                    day: RegexKatakanaHalfWidth.test(e),
                  }))
                }
                placeholder={moment().format('DD')}
                type={type === 'husband' || type === 'wife' ? 'default' : 'primary'}
                typePicker="day"
              />
            </Form.Item>
            <span className="text-[14px] print:text-[10px] font-bold">日</span>
          </div>
          {/* </Form.Item> */}
          <div
            className={`text-[14px] print:text-[10px] text-right font-bold ${
              type === 'husband' || type === 'wife' ? 'flex-1 ' : ' pl-[26px]'
            } `}
          >
            {'('}
            {age}歳{')'}
          </div>
        </div>
      </div>
      {/* ADDRESS */}
      <div className="flex w-full h-full  items-start">
        {!disabledLabel && (
          <div className="w-[176px] print:w-[70px] text-[14px] print:text-[10px] font-bold  pt-[48px]">現在の住所</div>
        )}
        <div
          className={`
            ${
              type === 'husband' || type === 'wife'
                ? 'w-[528px] print:w-[350px] print:px-[24px] px-[48px]'
                : 'w-full pl-[48px]'
            } 
            ${type === 'husband' && 'bg-primary-light '} 
            ${type === 'wife' && 'bg-secondary-thin '}
            flex space-x-[8px] items-center pt-[42px]`}
        >
          <div className="w-full">
            <Form.Item name={[`${type}`, 'inforBasic', 'address', 'name']} rules={[{ required: true, message: '' }]}>
              <Radio.Group>
                <div className="flex space-x-[24px]">
                  <BasicRadio value="single">
                    <span className="text-[14px] print:text-[10px] font-bold ">実家</span>
                  </BasicRadio>
                  <BasicRadio value="multiple">
                    <span className="text-[14px] print:text-[10px] font-bold ">賃貸</span>
                  </BasicRadio>
                  <BasicRadio value="multiple1">
                    <span className="text-[14px] print:text-[10px] font-bold ">社宅</span>
                  </BasicRadio>
                </div>
              </Radio.Group>
            </Form.Item>
            <div className="w-full flex flex-col space-y-[8px]">
              <div className="flex items-center  space-x-[32px] ">
                <span className="text-[14px] print:text-[10px] font-bold max-w-[60px] w-full">郵便番号</span>
                <div className="flex items-center space-x-[16px]">
                  <Form.Item
                    className=" flex-1 !mb-0"
                    name={[`${type}`, 'inforBasic', 'address', 'code']}
                    rules={[
                      { max: 7, message: '半角数字7桁,ハイフン（-）なし' },
                      {
                        validator: (_, value) => {
                          if (RegexKatakanaHalfWidth.test(value)) {
                            return Promise.resolve();
                          }
                          return Promise.reject('半角数字7桁,ハイフン（-）なし');
                        },
                      },
                    ]}
                  >
                    <BasicInput
                      className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light max-w-[400px] w-full'}
                      placeholder="111111"
                      type="number"
                    />
                  </Form.Item>
                  <BasicButton
                    className="h-[34px] min-w-[108px]"
                    loading={isLoading}
                    onClick={() =>
                      trigger({
                        code: Number(form.getFieldValue([`${type}`, 'inforBasic', 'address', 'code'])) || null,
                        distinct: 'code',
                      })
                    }
                    type="default"
                  >
                    <span className="text-[12px]">郵便番号検索</span>
                  </BasicButton>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-[32px] ">
                <span className="text-[14px] print:text-[10px] font-bold max-w-[60px] w-full">都道府県</span>
                <Form.Item
                  className=" flex-1 !mb-0"
                  name={[`${type}`, 'inforBasic', 'address', 'prefectures']}
                  rules={[{ required: true, message: '' }]}
                >
                  <SelectButton
                    options={currentAddressPrefecture}
                    placeholder="東京都"
                    type={type === 'husband' || type === 'wife' ? 'default' : 'primary'}
                  />
                </Form.Item>
              </div>
              <div className="flex items-center justify-center space-x-[32px] ">
                <span className="text-[14px] print:text-[10px] font-bold max-w-[60px] w-full">市区町村</span>
                <Form.Item
                  className=" flex-1 !mb-0"
                  name={[`${type}`, 'inforBasic', 'address', 'municipalities']}
                  rules={[
                    { required: true, message: '' },
                    { max: 15, message: '15文字以内' },
                  ]}
                >
                  <BasicInput
                    className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
                    placeholder="新宿区新宿1丁目"
                  />
                </Form.Item>
              </div>
              <div className="flex items-center justify-center space-x-[32px] ">
                <span className="text-[14px] print:text-[10px] font-bold max-w-[60px] w-full">
                  番地・ <br /> ビル名
                </span>
                <Form.Item
                  className=" flex-1 !mb-0"
                  name={[`${type}`, 'inforBasic', 'address', 'street']}
                  rules={[{ max: 15, message: '15文字以内' }]}
                >
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
        {!disabledLabel && (
          <div className="w-[176px] print:w-[70px] text-[14px] print:text-[10px] font-bold pt-[48px]">生命保険</div>
        )}
        <div
          className={`
            ${
              type === 'husband' || type === 'wife'
                ? 'w-[528px] print:w-[350px] print:px-[24px] px-[48px]'
                : 'w-full pl-[48px]'
            }
            ${type === 'husband' && 'bg-primary-light '}
            ${type === 'wife' && 'bg-secondary-thin '}
            flex  space-x-[8px] items-center pt-[42px]`}
        >
          <div className="w-full flex flex-col space-y-[24px]">
            {numberLifeInsurance.map((item, index) => (
              <div key={item.id}>
                <Form.Item
                  className={`!mb-0 ${type === 'husband' || type === 'wife' ? 'w-full' : 'w-[416px]'} `}
                  name={[`${type}`, 'inforBasic', 'lifeInsurance', `lifeInsurance${item.id}`, 'type']}
                >
                  <Radio.Group
                    className="!w-full"
                    onChange={(e) => {
                      numberLifeInsurance[index].type = e.target.value;
                      setNumberLifeInsurance((prev) => {
                        return [...prev];
                      });

                      // if (e.target.value === '1') {
                      //   const lifeInsuranceFee = form.getFieldValue([
                      //     `${type}`,
                      //     'inforBasic',
                      //     'lifeInsurance',
                      //     `lifeInsurance${item.id}`,
                      //     'fee',
                      //   ]);
                      //   numberLifeInsurance[index].fee = lifeInsuranceFee;
                      //   setNumberLifeInsurance((prev) => {
                      //     return [...prev];
                      //   });
                      // } else {
                      //   numberLifeInsurance[index].fee = 0;
                      //   setNumberLifeInsurance((prev) => {
                      //     return [...prev];
                      //   });
                      // }
                    }}
                  >
                    <div className="flex justify-between">
                      <BasicRadio value="1">
                        <span className="text-[14px] print:text-[10px] font-bold ">死亡</span>
                      </BasicRadio>
                      <BasicRadio value="2">
                        <span className="text-[14px] print:text-[10px] font-bold ">医療</span>
                      </BasicRadio>
                      <BasicRadio value="3">
                        <span className="text-[14px] print:text-[10px] font-bold ">がん</span>
                      </BasicRadio>
                      <BasicRadio value="4">
                        <span className="text-[14px] print:text-[10px] font-bold ">養老</span>
                      </BasicRadio>
                      <BasicRadio value="5">
                        <span className="text-[14px] print:text-[10px] font-bold ">その他</span>
                      </BasicRadio>
                      <BasicRadio value="6">
                        <span className="text-[14px] print:text-[10px] font-bold ">無し</span>
                      </BasicRadio>
                    </div>
                  </Radio.Group>
                </Form.Item>
                <div className="flex items-center flex-1 w-full  mt-[20px]">
                  <span className="text-[14px] print:text-[10px] font-bold max-w-[60px] w-full mr-[32px]">
                    月額
                    <br /> 保険料
                  </span>
                  <Form.Item
                    className="!mb-0 flex-1"
                    // initialValue={0}
                    name={
                      item.type === '6'
                        ? undefined
                        : [`${type}`, 'inforBasic', 'lifeInsurance', `lifeInsurance${item.id}`, 'fee']
                    }
                    rules={[
                      { required: true, message: '' },
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
                      disabled={item.type === '6'}
                      onChange={(e) => {
                        // const lifeInsuranceType = form.getFieldValue([
                        //   `${type}`,
                        //   'inforBasic',
                        //   'lifeInsurance',
                        //   `lifeInsurance${item.id}`,
                        //   'type',
                        // ]);

                        numberLifeInsurance[index].fee = Number(e.target.value);
                        setNumberLifeInsurance((prev) => {
                          return [...prev];
                        });

                        // form.setFieldValue([`${type}`, 'inforBasic', 'lifeInsurancePremium'], e.target.value);
                      }}
                      placeholder="15000"
                      type="number"
                    />
                  </Form.Item>
                  <span className="text-[14px] print:text-[10px] font-bold ml-[8px] ">円</span>
                </div>
              </div>
            ))}
            <div className="flex w-full justify-between space-x-[8px]">
              {numberLifeInsurance.length < 6 && (
                <BasicButton
                  className="h-[58px] mt-[14px] flex-1"
                  onClick={() =>
                    setNumberLifeInsurance((prev) => [
                      ...prev,
                      {
                        id: Number(prev?.[prev.length - 1]?.id) + 1,
                        fee: 0,
                        type: '1',
                      },
                    ])
                  }
                  type="default"
                >
                  <span className="text-[14px] print:text-[10px] text-primary-text">+ 追加する</span>
                </BasicButton>
              )}
              {numberLifeInsurance.length > 1 && (
                <BasicButton
                  className="h-[58px] mt-[14px] flex-1"
                  onClick={() => {
                    const lastIndex = numberLifeInsurance[numberLifeInsurance.length - 1];
                    setNumberLifeInsurance((prev) => prev.filter((e) => e !== lastIndex));
                    form.setFieldValue(
                      [`${type}`, 'inforBasic', 'lifeInsurance', `lifeInsurance${lastIndex.id}`, 'type'],
                      null
                    );
                    form.setFieldValue(
                      [`${type}`, 'inforBasic', 'lifeInsurance', `lifeInsurance${lastIndex.id}`, 'fee'],
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
      </div>
      {/* Household account book */}
      <div className="flex w-full h-full  items-center ">
        {!disabledLabel && (
          <div className="w-[176px] print:w-[70px] text-[14px] print:text-[10px] font-bold">家計簿</div>
        )}
        <div
          className={`
            ${
              type === 'husband' || type === 'wife'
                ? 'w-[528px] print:w-[350px] print:px-[24px] px-[48px]'
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
                  <span className="text-[14px] print:text-[10px] font-bold ">付けている</span>
                </BasicRadio>
                <BasicRadio value="2">
                  <span className="text-[14px] print:text-[10px] font-bold ">付けていない</span>
                </BasicRadio>
              </div>
            </Radio.Group>
          </Form.Item>
        </div>
      </div>
      {/* Saving */}
      <div className="flex w-full h-full  items-start ">
        {!disabledLabel && (
          <div className="w-[176px] print:w-[70px] text-[14px] print:text-[10px] font-bold pt-[19px] ">貯金</div>
        )}
        <div
          className={`
            ${
              type === 'husband' || type === 'wife'
                ? 'w-[528px] print:w-[350px] print:px-[24px] px-[48px]'
                : 'w-full pl-[48px]'
            } 
            ${type === 'husband' && 'bg-primary-light '} 
            ${type === 'wife' && 'bg-secondary-thin '}
            flex flex-col space-y-[8px]   pb-[48px] items-center`}
        >
          <div className="flex items-center flex-1 w-full">
            <span className="text-[14px] print:text-[10px] font-bold max-w-[60px] w-full mr-[32px]">毎月</span>
            <Form.Item
              className="!mb-0 flex-1"
              name={[`${type}`, 'inforBasic', 'saving', 'monthly']}
              rules={[
                { max: 10, message: '半角数字、10文字以内' },
                {
                  validator: (_, value) => {
                    if (value?.length <= 0 || RegexKatakanaHalfWidth.test(value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject('半角数字、10文字以内');
                  },
                },
              ]}
            >
              <BasicInput
                className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
                placeholder="30000"
                type="number"
              />
            </Form.Item>
            <span className="text-[14px] print:text-[10px] font-bold ml-[8px] ">円</span>
          </div>
          <div className="flex items-center flex-1 w-full">
            <span className="text-[14px] print:text-[10px] font-bold max-w-[60px] w-full mr-[32px]">総額</span>
            <Form.Item
              className="!mb-0 flex-1"
              name={[`${type}`, 'inforBasic', 'saving', 'totalAmount']}
              rules={[
                { max: 10, message: '半角数字、10文字以内' },
                {
                  validator: (_, value) => {
                    if (value?.length <= 0 || RegexKatakanaHalfWidth.test(value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject('半角数字、10文字以内');
                  },
                },
              ]}
            >
              <BasicInput
                className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
                placeholder="600000"
                type="number"
              />
            </Form.Item>
            <span className="text-[14px] print:text-[10px] font-bold ml-[8px] ">円</span>
          </div>
          <div className="flex items-center flex-1 w-full pt-[16px]">
            <span className="text-[14px] print:text-[10px] font-bold max-w-[60px] w-full mr-[52px]">貯蓄率</span>
            <span className="text-[16px] font-bold">{savingRate} %</span>
          </div>
        </div>
      </div>
      {/* gambling */}
      <div className="flex w-full h-full  items-start ">
        {!disabledLabel && (
          <div className="w-[176px] print:w-[70px] text-[14px] print:text-[10px] pt-[8px] font-bold">ギャンブル</div>
        )}
        <div
          className={`
            ${
              type === 'husband' || type === 'wife'
                ? 'w-[528px] print:w-[350px] print:px-[24px] px-[48px]'
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
                  <span className="text-[14px] print:text-[10px] font-bold ">無</span>
                </BasicRadio>
                <BasicRadio value="2">
                  <span className="text-[14px] print:text-[10px] font-bold ">パチンコ</span>
                </BasicRadio>
                <BasicRadio value="3">
                  <span className="text-[14px] print:text-[10px] font-bold ">公営ギャンブル</span>
                </BasicRadio>
              </div>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            className="!mb-0 !w-full"
            name={[`${type}`, 'inforBasic', 'gambling', 'content']}
            rules={[{ max: 60, message: '60文字以内' }]}
          >
            <BasicTextArea
              className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
              maxLength={60}
              placeholder="自由にご記入ください"
              style={{ height: '100px', resize: 'none' }}
            />
          </Form.Item>
        </div>
      </div>
      {/* Hobbies/Entertainment */}
      <div className="flex w-full h-full  items-start ">
        {!disabledLabel && (
          <div className="w-[176px] print:w-[70px] text-[14px] print:text-[10px] font-bold pt-[14px]">趣味・娯楽</div>
        )}
        <div
          className={`
            ${
              type === 'husband' || type === 'wife'
                ? 'w-[528px] print:w-[350px] print:px-[24px] px-[48px]'
                : 'w-full pl-[48px]'
            }
            ${type === 'husband' && 'bg-primary-light '}
            ${type === 'wife' && 'bg-secondary-thin '}
            flex flex-col  space-y-[24px] pb-[48px] `}
        >
          <Form.Item
            className="!mb-0 !w-full"
            name={[`${type}`, 'inforBasic', 'hobbies']}
            rules={[{ max: 60, message: '60文字以内' }]}
          >
            <BasicTextArea
              className={type === 'husband' || type === 'wife' ? '' : 'bg-primary-light'}
              maxLength={60}
              placeholder="自由にご記入ください"
              style={{ height: '100px', resize: 'none' }}
            />
          </Form.Item>
        </div>
      </div>
      {/* MEMO */}
      <div className="flex w-full h-full  items-start ">
        {!disabledLabel && (
          <div className="w-[176px] print:w-[70px] text-[14px] print:text-[10px] font-bold pt-[14px]">メモ</div>
        )}
        <div
          className={`
            ${
              type === 'husband' || type === 'wife'
                ? 'w-[528px] print:w-[350px] print:px-[24px] px-[48px]'
                : 'w-full pl-[48px]'
            }   
            ${type === 'husband' && 'bg-primary-light '} 
            ${type === 'wife' && 'bg-secondary-thin '} 
            flex flex-col space-y-[24px] pb-[66px] rounded-b-[16px] `}
        >
          <Form.Item
            className="!mb-0 !w-full"
            name={[`${type}`, 'inforBasic', 'memo']}
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
InformationBasic.defaultProps = {
  disabledLabel: false,
  type: 'husband',
};
export default InformationBasic;
