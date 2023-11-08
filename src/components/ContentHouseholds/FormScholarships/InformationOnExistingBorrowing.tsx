import { Form, Radio } from 'antd';
import React from 'react';
import BasicButton from '../../common/BasicButton';
import BasicInput from '../../common/BasicInput';
import BasicRadio from '../../common/BasicRadio';
import BasicTextArea from '../../common/BasicTextArea';
import SelectButton from '../../common/SelectButton';

interface Props {
  type: string;
}

function InformationOnExistingBorrowing(props: Props) {
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
          <div className="flex justify-between space-x-[60px]">
            <div className="flex-1 flex-col space-y-[8px]">
              <div className="flex items-center  w-full ">
                <span className="text-[14px] font-bold max-w-[60px] w-full mr-[32px]">続柄</span>
                <Form.Item className="!mb-0 flex-1" name={[`${type}`, 'scholarships', 'borrowing', 'kinds']}>
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
              <div className="flex items-center w-full ">
                <span className="text-[14px] font-bold max-w-[60px] w-full mr-[32px]">ボーナス</span>
                <Form.Item className="!mb-0 flex-1" name={[`${type}`, 'scholarships', 'borrowing', 'remainingDebt']}>
                  <BasicInput className="bg-primary-light" placeholder="ここに記入してください" />
                </Form.Item>
                <span className="text-[14px] font-bold pl-[8px]">万円</span>
              </div>
              <div className="flex items-center w-full ">
                <span className="text-[14px] font-bold max-w-[60px] w-full mr-[32px]">ボーナス</span>
                <Form.Item className="!mb-0 flex-1" name={[`${type}`, 'scholarships', 'borrowing', 'monthly']}>
                  <BasicInput className="bg-primary-light" placeholder="ここに記入してください" />
                </Form.Item>
                <span className="text-[14px] font-bold pl-[8px]">円</span>
              </div>
              <div className="flex items-center w-full ">
                <span className="text-[14px] font-bold max-w-[60px] w-full mr-[32px]">保証人</span>
                <Form.Item className="!mb-0 flex-1" name={[`${type}`, 'scholarships', 'borrowing', 'delay']}>
                  <Radio.Group className="!w-full ">
                    <div className="flex space-x-[24px]">
                      <BasicRadio value="1">
                        <span className="text-[14px] font-bold ">有</span>
                      </BasicRadio>
                      <BasicRadio value="2">
                        <span className="text-[14pxs] font-bold ">無</span>
                      </BasicRadio>
                    </div>
                  </Radio.Group>
                </Form.Item>
              </div>
            </div>
            <div className="flex-1 flex flex-col space-y-[8px]">
              <div className="flex items-center w-full ">
                <span className="text-[14px] font-bold max-w-[60px] w-full mr-[32px]">借入先</span>
                <Form.Item className="!mb-0 flex-1" name={[`${type}`, 'scholarships', 'borrowing', 'borrower']}>
                  <BasicInput className="bg-primary-light" placeholder="ここに記入してください" />
                </Form.Item>
                <span className="text-[14px] font-bold pl-[8px]">種類</span>
              </div>
              <div className="flex items-center w-full ">
                <span className="text-[14px] font-bold max-w-[60px] w-full mr-[32px]">残年数</span>
                <Form.Item
                  className="!mb-0 flex-1"
                  name={[`${type}`, 'scholarships', 'borrowing', 'numberOfYearsLeft']}
                >
                  <BasicInput className="bg-primary-light" placeholder="ここに記入してください" />
                </Form.Item>
                <span className="text-[14px] font-bold pl-[8px]">年</span>
              </div>
              <div className="flex items-center w-full ">
                <span className="text-[14px] font-bold max-w-[60px] w-full mr-[32px]">ボーナス</span>
                <Form.Item className="!mb-0 flex-1" name={[`${type}`, 'scholarships', 'borrowing', 'bonus']}>
                  <BasicInput className="bg-primary-light" placeholder="ここに記入してください" />
                </Form.Item>
                <span className="text-[14px] font-bold pl-[8px]">年</span>
              </div>
              <div className="flex items-center w-full ">
                <span className="text-[14px] font-bold max-w-[60px] w-full mr-[32px]">保証人</span>
                <Form.Item className="!mb-0 flex-1" name={[`${type}`, 'scholarships', 'borrowing', 'guarantor']}>
                  <Radio.Group className="!w-full ">
                    <div className="flex space-x-[24px]">
                      <BasicRadio value="1">
                        <span className="text-[14px] font-bold ">有</span>
                      </BasicRadio>
                      <BasicRadio value="2">
                        <span className="text-[14pxs] font-bold ">無</span>
                      </BasicRadio>
                    </div>
                  </Radio.Group>
                </Form.Item>
              </div>
            </div>
          </div>

          <BasicButton className="h-[58px] mt-[14px]" type="default">
            <span className="text-[14px] text-secondary-text">+ 追加する</span>
          </BasicButton>
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
          <Form.Item className="!mb-0 !w-full" name={[`${type}`, 'scholarships', 'memo']}>
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
InformationOnExistingBorrowing.defaultProps = {
  type: 'common',
};
export default InformationOnExistingBorrowing;