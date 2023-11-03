/* eslint-disable max-lines-per-function */
import React from 'react';
import { Form, Radio } from 'antd';
import BasicInput from '../../common/BasicInput';
import BasicRadio from '../../common/BasicRadio';
import BasicTextArea from '../../common/BasicTextArea';
import BasicButton from '../../common/BasicButton';
import SelectButton from '../../common/SelectButton';

interface Props {
  disabledLabel?: boolean;
  type?: 'husband' | 'wife';
}
function FamilyInformation(props: Props) {
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
      {/* place of birth*/}
      <div className="flex w-full h-full  items-center">
        {!disabledLabel && <div className="w-[176px] text-[14px] font-bold">出身地</div>}
        <div
          className={`w-[528px]  ${type === 'husband' && 'bg-primary-light '} ${
            type === 'wife' && 'bg-secondary-thin '
          } flex flex-col px-[48px] space-y-[8px] `}
        >
          <Form.Item className=" flex-1 !mb-0" name={[`${type}`, 'familyInfor', 'placeOfBirth']}>
            <BasicInput placeholder="北海道旭市" />
          </Form.Item>
        </div>
      </div>

      {/* family home */}
      <div className="flex w-full h-full  items-start">
        {!disabledLabel && <div className="w-[176px] text-[14px] font-bold pt-[48px]">ご実家の住まい</div>}
        <div
          className={`w-[528px]  ${type === 'husband' && 'bg-primary-light '} ${
            type === 'wife' && 'bg-secondary-thin '
          } flex px-[48px] space-x-[8px] items-center pt-[42px]`}
        >
          <div className="w-full">
            <Form.Item className="!mb-0 !w-full" name={[`${type}`, 'familyInfor', 'familyHome', 'type']}>
              <Radio.Group className="!w-full">
                <div className="flex justify-between">
                  <BasicRadio value="single">
                    <span className="text-[14px] font-bold ">持ち家</span>
                  </BasicRadio>
                  <BasicRadio value="multiple">
                    <span className="text-[14pxs] font-bold ">借家</span>
                  </BasicRadio>
                  <BasicRadio value="multiple1">
                    <span className="text-[14px] font-bold ">一戸建て</span>
                  </BasicRadio>
                  <BasicRadio value="multiple1">
                    <span className="text-[14px] font-bold ">マンション</span>
                  </BasicRadio>
                  <BasicRadio value="multiple1">
                    <span className="text-[14px] font-bold ">無</span>
                  </BasicRadio>
                </div>
              </Radio.Group>
            </Form.Item>
            <div className="flex items-center flex-1 w-full  mt-[20px]">
              <span className="text-[14px] font-bold max-w-[60px] w-full mr-[32px]">築年数</span>
              <Form.Item className="!mb-0 flex-1" name={[`${type}`, 'familyInfor', 'familyHome', 'age']}>
                <BasicInput placeholder="20" />
              </Form.Item>
              <span className="text-[14px] font-bold ml-[8px] ">年</span>
            </div>
            <BasicButton className="h-[58px] mt-[14px]" type="default">
              <span className="text-[14px] text-secondary-text">+ 追加する</span>
            </BasicButton>
          </div>
        </div>
      </div>

      {/* Brothers */}
      <div className="flex w-full h-full  items-center">
        {!disabledLabel && <div className="w-[176px] text-[14px] font-bold pt-[48px] ">ご兄弟</div>}
        <div
          className={`w-[528px]  ${type === 'husband' && 'bg-primary-light '} ${
            type === 'wife' && 'bg-secondary-thin '
          } flex px-[48px] flex-col space-y-[8px] pt-[48px]`}
        >
          <Form.Item className="!mb-0 !w-full" name={[`${type}`, 'familyInfor', 'brothers']}>
            <Radio.Group className="!w-full">
              <div className="flex space-x-[24px]">
                <BasicRadio value="single">
                  <span className="text-[14px] font-bold ">一人っ子</span>
                </BasicRadio>
                <BasicRadio value="multiple">
                  <span className="text-[14pxs] font-bold ">兄</span>
                </BasicRadio>
                <BasicRadio value="multiple1">
                  <span className="text-[14px] font-bold ">弟</span>
                </BasicRadio>
                <BasicRadio value="multiple1">
                  <span className="text-[14px] font-bold ">弟</span>
                </BasicRadio>
                <BasicRadio value="multiple1">
                  <span className="text-[14px] font-bold ">妹</span>
                </BasicRadio>
              </div>
            </Radio.Group>
          </Form.Item>
        </div>
      </div>

      {/* Those who live at home */}
      <div className="flex w-full h-full  items-start">
        {!disabledLabel && <div className="w-[176px] text-[14px] font-bold  pt-[48px]">ご実家にお住まいの方</div>}
        <div
          className={`w-[528px]  ${type === 'husband' && 'bg-primary-light '} ${
            type === 'wife' && 'bg-secondary-thin '
          } flex px-[48px] flex-col   pt-[48px]`}
        >
          <div className="flex items-center flex-1 w-full ">
            <span className="text-[14px] font-bold max-w-[60px] w-full mr-[32px]">続柄</span>
            <Form.Item
              className="!mb-0 flex-1"
              name={[`${type}`, 'familyInfor', 'thoseWholiveAtHome ', 'relationship']}
            >
              <SelectButton
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                  { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
                placeholder="選択してください"
              />
            </Form.Item>
          </div>
          <div>
            <div className="flex items-center flex-1 w-full  mt-[20px]">
              <span className="text-[14px] font-bold max-w-[60px] w-full mr-[32px]">年齢</span>
              <Form.Item className="!mb-0 flex-1" name={[`${type}`, 'familyInfor', 'thoseWholiveAtHome', 'age']}>
                <BasicInput placeholder="50" />
              </Form.Item>
              <span className="text-[14px] font-bold ml-[8px] ">歳</span>
            </div>
            <BasicButton className="h-[58px] mt-[14px]" type="default">
              <span className="text-[14px] text-secondary-text">+ 追加する</span>
            </BasicButton>
          </div>
        </div>
      </div>

      {/* inheritance */}
      <div className="flex w-full h-full  items-start">
        {!disabledLabel && <div className="w-[176px] text-[14px] font-bold pt-[48px]">相続</div>}
        <div
          className={`w-[528px]  ${type === 'husband' && 'bg-primary-light '} ${
            type === 'wife' && 'bg-secondary-thin '
          }  px-[48px]  pt-[42px]`}
        >
          <Form.Item className="!mb-0 !w-full" name={[`${type}`, 'familyInfor', 'inheritance']}>
            <Radio.Group className="!w-full">
              <div className="flex space-x-[24px]">
                <BasicRadio value="single">
                  <span className="text-[14px] font-bold ">相続</span>
                </BasicRadio>
                <BasicRadio value="multiple">
                  <span className="text-[14pxs] font-bold ">相続済</span>
                </BasicRadio>
                <BasicRadio value="multiple2">
                  <span className="text-[14pxs] font-bold ">相談なし</span>
                </BasicRadio>
              </div>
            </Radio.Group>
          </Form.Item>
        </div>
      </div>

      {/* nursing care*/}
      <div className="flex w-full h-full  items-start ">
        {!disabledLabel && <div className="w-[176px] text-[14px] pt-[48px] font-bold">介護</div>}
        <div
          className={`w-[528px]  ${type === 'husband' && 'bg-primary-light '} ${
            type === 'wife' && 'bg-secondary-thin '
          } flex flex-col px-[48px] space-y-[24px] pt-[42px] pb-[48px] `}
        >
          <Form.Item className="!mb-0 !w-full" name={[`${type}`, 'familyInfor', 'nursingCare']}>
            <Radio.Group className="!w-full">
              <div className="flex space-x-[24px]">
                <BasicRadio value="0">
                  <span className="text-[14px] font-bold ">有</span>
                </BasicRadio>
                <BasicRadio value="1">
                  <span className="text-[14pxs] font-bold ">無</span>
                </BasicRadio>
              </div>
            </Radio.Group>
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
          <Form.Item className="!mb-0 !w-full" name={[`${type}`, 'familyInfor', 'memo']}>
            <BasicTextArea placeholder="ご自由に記入ください" style={{ height: '136px', resize: 'none' }} />
          </Form.Item>
        </div>
      </div>
    </div>
  );
}

export default FamilyInformation;
