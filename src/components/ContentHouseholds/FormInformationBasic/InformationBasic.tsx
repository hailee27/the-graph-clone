/* eslint-disable max-lines */
/* eslint-disable max-lines-per-function */
import { Form, Radio } from 'antd';
import React from 'react';
import BasicInput from '../../common/BasicInput';
import SelectButton from '../../common/SelectButton';
import DatePickerWithType from '../../common/DatePickerWithType';
import BasicRadio from '../../common/BasicRadio';
import BasicButton from '../../common/BasicButton';
import BasicTextArea from '../../common/BasicTextArea';

interface Props {
  disabledLabel?: boolean;
  type?: 'husband' | 'wife';
}

function InformationBasic(props: Props) {
  const { disabledLabel, type } = props;
  return (
    <div className="h-full w-full text-primary-text">
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
      {/* NAME 1*/}
      <div className="flex w-full h-full  items-center">
        {!disabledLabel && <div className="w-[176px] text-[14px] font-bold">お名前</div>}
        <div
          className={`w-[528px]  ${type === 'husband' && 'bg-primary-light '} ${
            type === 'wife' && 'bg-secondary-thin '
          } flex px-[48px] space-x-[8px] items-center`}
        >
          <Form.Item className="!mb-0" name={[`${type}`, 'inforBasic', 'name', 'firstName']}>
            <BasicInput placeholder="山田" />
          </Form.Item>
          <Form.Item className="!mb-0" name={[`${type}`, 'inforBasic', 'name', 'lastName']}>
            <BasicInput placeholder="太郎" />
          </Form.Item>
          <span className="text-[14px] font-bold">様</span>
        </div>
      </div>
      {/* NAME 2*/}
      <div className="flex w-full h-full  items-center">
        {!disabledLabel && <div className="w-[176px] text-[14px] font-bold  pt-[48px]">お名前（フリガナ）</div>}
        <div
          className={`w-[528px]  ${type === 'husband' && 'bg-primary-light '} ${
            type === 'wife' && 'bg-secondary-thin '
          } flex px-[48px] space-x-[8px] items-center pt-[48px]`}
        >
          <Form.Item className="!mb-0" name={[`${type}`, 'inforBasic', 'name1', 'firstName']}>
            <BasicInput placeholder="ヤマダ" />
          </Form.Item>
          <Form.Item className="!mb-0" name={[`${type}`, 'inforBasic', 'name1', 'lastName']}>
            <BasicInput placeholder="タロウ" />
          </Form.Item>
          <span className="text-[14px] font-bold">様</span>
        </div>
      </div>
      {/* BIRTH DATE */}
      <div className="flex w-full h-full  items-center">
        {!disabledLabel && <div className="w-[176px] text-[14px] font-bold  pt-[48px]">生年月日</div>}
        <div
          className={`w-[528px]  ${type === 'husband' && 'bg-primary-light '} ${
            type === 'wife' && 'bg-secondary-thin '
          } flex px-[48px]  items-center  pt-[48px]`}
        >
          <div className="flex items-center justify-between space-x-[8px]">
            <Form.Item className="!mb-0" name={[`${type}`, 'inforBasic', 'birthDay', 'year']}>
              <DatePickerWithType className="!w-[92px]" format={'YYYY'} picker="year" />
            </Form.Item>
            <span className="text-[14px] font-bold">年</span>
            <Form.Item className="!mb-0" name={[`${type}`, 'inforBasic', 'birthDay', 'month']}>
              <DatePickerWithType className="!w-[80px]" format={'MM'} picker="month" />
            </Form.Item>
            <span className="text-[14px] font-bold">月</span>
            <Form.Item className="!mb-0" name={[`${type}`, 'inforBasic', 'birthDay', 'day']}>
              <DatePickerWithType className="!w-[80px]" format={'DD'} picker="date" />
            </Form.Item>
            <span className="text-[14px] font-bold">日</span>
          </div>

          <div className="text-[14px] text-right font-bold flex-1">
            {'('}00歳{')'}
          </div>
        </div>
      </div>
      {/* ADDRESS */}
      <div className="flex w-full h-full  items-start">
        {!disabledLabel && <div className="w-[176px] text-[14px] font-bold  pt-[48px]">現在の住所</div>}
        <div
          className={`w-[528px]  ${type === 'husband' && 'bg-primary-light '} ${
            type === 'wife' && 'bg-secondary-thin '
          } flex px-[48px] space-x-[8px] items-center pt-[42px]`}
        >
          <div>
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
            <div className="flex flex-col space-y-[8px]">
              <div className="flex items-center justify-center">
                <span className="text-[14px] font-bold mr-[32px] max-w-[60px] w-full ">郵便番号</span>
                <Form.Item
                  className="!mb-0 pr-[16px]"
                  name={[`${type}`, 'inforBasic', 'address', 'code']}
                  rules={[{ required: true, message: 'aloo' }]}
                >
                  <BasicInput placeholder="111111" />
                </Form.Item>
                <BasicButton className="h-[34px] w-[108px]" type="default">
                  <span className="text-[12px]">郵便番号検索</span>
                </BasicButton>
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
                  />
                </Form.Item>
              </div>
              <div className="flex items-center justify-center space-x-[32px] ">
                <span className="text-[14px] font-bold max-w-[60px] w-full">市区町村</span>
                <Form.Item className=" flex-1 !mb-0" name={[`${type}`, 'inforBasic', 'address', 'municipalities']}>
                  <BasicInput placeholder="新宿区新宿1丁目" />
                </Form.Item>
              </div>
              <div className="flex items-center justify-center space-x-[32px] ">
                <span className="text-[14px] font-bold max-w-[60px] w-full">
                  番地・ <br /> ビル名
                </span>
                <Form.Item className=" flex-1 !mb-0" name={[`${type}`, 'inforBasic', 'address', 'street']}>
                  <BasicInput placeholder="36-7　新宿内野ビルII 3F" />
                </Form.Item>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* lifeInsurance */}
      <div className="flex w-full h-full  items-start">
        {!disabledLabel && <div className="w-[176px] text-[14px] font-bold pt-[48px]">生命保険</div>}
        <div
          className={`w-[528px]  ${type === 'husband' && 'bg-primary-light '} ${
            type === 'wife' && 'bg-secondary-thin '
          } flex px-[48px] space-x-[8px] items-center pt-[42px]`}
        >
          <div className="w-full">
            <Form.Item className="!mb-0 !w-full" name={[`${type}`, 'inforBasic', 'lifeInsurance', 'type']}>
              <Radio.Group className="!w-full">
                <div className="flex justify-between">
                  <BasicRadio value="single">
                    <span className="text-[14px] font-bold ">定期</span>
                  </BasicRadio>
                  <BasicRadio value="multiple">
                    <span className="text-[14pxs] font-bold ">終身</span>
                  </BasicRadio>
                  <BasicRadio value="multiple1">
                    <span className="text-[14px] font-bold ">養老</span>
                  </BasicRadio>
                  <BasicRadio value="multiple1">
                    <span className="text-[14px] font-bold ">医療</span>
                  </BasicRadio>
                  <BasicRadio value="multiple1">
                    <span className="text-[14px] font-bold ">ガン</span>
                  </BasicRadio>
                  <BasicRadio value="multiple1">
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
                <BasicInput placeholder="15000" />
              </Form.Item>
              <span className="text-[14px] font-bold ml-[8px] ">様</span>
            </div>
            <BasicButton className="h-[58px] mt-[14px]" type="default">
              <span className="text-[14px] text-primary-text">+ 追加する</span>
            </BasicButton>
          </div>
        </div>
      </div>
      {/* Household account book */}
      <div className="flex w-full h-full  items-center ">
        {!disabledLabel && <div className="w-[176px] text-[14px] font-bold">お名前</div>}
        <div
          className={`w-[528px]  ${type === 'husband' && 'bg-primary-light '} ${
            type === 'wife' && 'bg-secondary-thin '
          } flex px-[48px] space-x-[8px] pt-[42px] pb-[48px] items-center`}
        >
          <Form.Item className="!mb-0 !w-full" name={[`${type}`, 'inforBasic', 'household']}>
            <Radio.Group className="!w-full">
              <div className="flex space-x-[24px]">
                <BasicRadio value="single">
                  <span className="text-[14px] font-bold ">付けている</span>
                </BasicRadio>
                <BasicRadio value="multiple">
                  <span className="text-[14pxs] font-bold ">付けていない</span>
                </BasicRadio>
              </div>
            </Radio.Group>
          </Form.Item>
        </div>
      </div>
      {/* Saving */}
      <div className="flex w-full h-full  items-start ">
        {!disabledLabel && <div className="w-[176px] text-[14px] font-bold  ">貯金</div>}
        <div
          className={`w-[528px]  ${type === 'husband' && 'bg-primary-light '} ${
            type === 'wife' && 'bg-secondary-thin '
          } flex flex-col space-y-[8px] px-[48px]  pb-[48px] items-center`}
        >
          <div className="flex items-center flex-1 w-full">
            <span className="text-[14px] font-bold max-w-[60px] w-full mr-[32px]">毎月</span>
            <Form.Item className="!mb-0 flex-1" name={[`${type}`, 'inforBasic', 'saving', 'monthly']}>
              <BasicInput placeholder="15000" />
            </Form.Item>
            <span className="text-[14px] font-bold ml-[8px] ">円</span>
          </div>
          <div className="flex items-center flex-1 w-full">
            <span className="text-[14px] font-bold max-w-[60px] w-full mr-[32px]">総額</span>
            <Form.Item className="!mb-0 flex-1" name={[`${type}`, 'inforBasic', 'saving', 'totalAmount']}>
              <BasicInput placeholder="15000" />
            </Form.Item>
            <span className="text-[14px] font-bold ml-[8px] ">円</span>
          </div>
          <div className="flex items-center flex-1 w-full pt-[16px]">
            <span className="text-[14px] font-bold max-w-[60px] w-full mr-[52px]">総額</span>
            <span className="text-[16px] font-bold">00 %</span>
          </div>
        </div>
      </div>
      {/* gambling */}
      <div className="flex w-full h-full  items-start ">
        {!disabledLabel && <div className="w-[176px] text-[14px] pt-[8px] font-bold">お名前</div>}
        <div
          className={`w-[528px]  ${type === 'husband' && 'bg-primary-light '} ${
            type === 'wife' && 'bg-secondary-thin '
          } flex flex-col px-[48px] space-y-[24px] pb-[48px] `}
        >
          <Form.Item className="!mb-0 !w-full" name={[`${type}`, 'inforBasic', 'gambling', 'type']}>
            <Radio.Group className="!w-full">
              <div className="flex space-x-[24px]">
                <BasicRadio value="single">
                  <span className="text-[14px] font-bold ">無</span>
                </BasicRadio>
                <BasicRadio value="multiple">
                  <span className="text-[14pxs] font-bold ">パチンコ</span>
                </BasicRadio>
                <BasicRadio value="multiple">
                  <span className="text-[14pxs] font-bold ">公営ギャンブル</span>
                </BasicRadio>
              </div>
            </Radio.Group>
          </Form.Item>
          <Form.Item className="!mb-0 !w-full" name={[`${type}`, 'inforBasic', 'gambling', 'content']}>
            <BasicTextArea placeholder="自由にご記入ください" style={{ height: '100px', resize: 'none' }} />
          </Form.Item>
        </div>
      </div>
      {/* Hobbies/Entertainment */}
      <div className="flex w-full h-full  items-start ">
        {!disabledLabel && <div className="w-[176px] text-[14px] font-bold">趣味・娯楽</div>}
        <div
          className={`w-[528px]  ${type === 'husband' && 'bg-primary-light '} ${
            type === 'wife' && 'bg-secondary-thin '
          } flex flex-col px-[48px] space-y-[24px] pb-[48px] `}
        >
          <Form.Item className="!mb-0 !w-full" name={[`${type}`, 'inforBasic', 'hobbies']}>
            <BasicTextArea placeholder="自由にご記入ください" style={{ height: '100px', resize: 'none' }} />
          </Form.Item>
        </div>
      </div>
      {/* MEMO */}
      <div className="flex w-full h-full  items-start ">
        {!disabledLabel && <div className="w-[176px] text-[14px] font-bold">メモ</div>}
        <div
          className={`w-[528px]  ${type === 'husband' && 'bg-primary-light '} ${
            type === 'wife' && 'bg-secondary-thin '
          } flex flex-col px-[48px] space-y-[24px] pb-[66px] rounded-b-[16px] `}
        >
          <Form.Item className="!mb-0 !w-full" name={[`${type}`, 'inforBasic', 'memo']}>
            <BasicTextArea placeholder="ご自由に記入ください" style={{ height: '136px', resize: 'none' }} />
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
