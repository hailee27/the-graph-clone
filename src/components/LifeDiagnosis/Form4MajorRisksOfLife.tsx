/* eslint-disable max-lines */
/* eslint-disable max-lines-per-function */
import { Form } from 'antd';
import React from 'react';
import SelectButton from '../common/SelectButton';

function Form4MajorRisksOfLife() {
  return (
    <div className="text-primary-text">
      <div className="bg-primary px-[24px] py-[20px] text-[#ffffff] text-[20px] font-bold leading-5 rounded-[4px] mb-[54px]">
        「マイホーム」と比較した「賃貸住宅」での、「人生4大リスク」の対策について
      </div>
      <div className="flex flex-col space-y-[40px]">
        {/* Regarding measures in case of emergency */}
        <div className="flex flex-col">
          <span className="text-primary font-bold text-[18px] leading-normal">万が一対策について</span>
          <div className="border-t-[3px] border-primary mt-[20px] grid grid-cols-3 gap-y-2 gap-x-[100px] pt-[24px]">
            <div className="flex justify-between items-center">
              <span className="text-[14px] font-bold ">
                無駄な支払い、
                <br />
                必要保障
              </span>
              <Form.Item
                className="w-[120px] !mb-0"
                initialValue={'no'}
                name={['regardingMeasures', 'necessarySecurity']}
              >
                <SelectButton
                  className="text-[24px]"
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
              <span className="text-[14px] font-bold ">遺族の住居確保</span>
              <Form.Item
                className="w-[120px] !mb-0"
                initialValue={'no'}
                name={['regardingMeasures', 'survivingFamily']}
              >
                <SelectButton
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

        {/* About retirement measures */}

        <div className="flex flex-col">
          <span className="text-primary font-bold text-[18px] leading-normal">老後対策について</span>
          <div className="border-t-[3px] border-primary mt-[20px] grid grid-cols-3 gap-y-2 gap-x-[100px] pt-[24px]">
            <div className="flex justify-between items-center">
              <span className="text-[14px] font-bold ">老後貯蓄の有無</span>
              <Form.Item
                className="w-[120px] !mb-0"
                initialValue={'no'}
                name={['retirementMeasures', 'retirementSaving']}
              >
                <SelectButton
                  className="text-[24px]"
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
              <span className="text-[14px] font-bold ">iDeCo等の運用資金</span>
              <Form.Item
                className="w-[120px] !mb-0"
                initialValue={'no'}
                name={['retirementMeasures', 'operationalFunds']}
              >
                <SelectButton
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
              <span className="text-[14px] font-bold ">資産形成</span>
              <Form.Item
                className="w-[120px] !mb-0"
                initialValue={'no'}
                name={['retirementMeasures', 'assetFormation']}
              >
                <SelectButton
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
                老後の経費削減（家賃、
                <br />
                建て直し費、光熱費、医療費）
              </span>
              <Form.Item
                className="w-[120px] !mb-0"
                initialValue={'no'}
                name={['retirementMeasures', 'reducingExpensesInRetirement']}
              >
                <SelectButton
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
              <span className="text-[14px] font-bold ">老後の住居確保</span>
              <Form.Item
                className="w-[120px] !mb-0"
                initialValue={'no'}
                name={['retirementMeasures', 'securingHousingForRetirement']}
              >
                <SelectButton
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
          <div className="border-tertiary border py-[24px] text-center text-[14px] font-bold mt-[24px]">
            <div className="flex items-center justify-center max-h-[24px]">
              <span className="pr-[63px]">老後貯蓄はいくら出来ますか？</span>
              <span className="pr-[24px] flex items-center">
                今出来る月々の最大貯蓄額
                <span className="pl-[16px] text-[30px]">0,000円</span>
              </span>
              <hr />
              <span className="border-r h-6 border-tertiary"> </span>
              <span className="pl-[24px]  flex items-center">
                60歳までの貯蓄額
                <span className="pl-[16px] text-[30px]">0,000万円</span>
              </span>
            </div>
          </div>
        </div>
        {/* About disaster countermeasures */}
        <div className="flex flex-col">
          <span className="text-primary font-bold text-[18px] leading-normal">災害対策について</span>
          <div className="border-t-[3px] border-primary mt-[20px] grid grid-cols-3 gap-y-2 gap-x-[100px] pt-[24px]">
            <div className="flex justify-between items-center">
              <span className="text-[14px] font-bold ">地震、火災、台風</span>
              <Form.Item
                className="w-[120px] !mb-0"
                initialValue={'no'}
                name={['disasterCountermeasures', 'earthquakeFireTyphoon']}
              >
                <SelectButton
                  className="text-[24px]"
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
                ライフラインの確保 <br />
                （電気、ガス、水道）
              </span>
              <Form.Item
                className="w-[120px] !mb-0"
                initialValue={'no'}
                name={['disasterCountermeasures', 'securingaLifeline']}
              >
                <SelectButton
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
                食料備蓄と防災用品の
                <br />
                準備（保管スペース）
              </span>
              <Form.Item
                className="w-[120px] !mb-0"
                initialValue={'no'}
                name={['disasterCountermeasures', 'foodStockpilingAndDisasterPrevention']}
              >
                <SelectButton
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
                資金確保 <br />
                （避難費用、新しい住居費用、
                <br />
                社会復帰までの生活費等）
              </span>
              <Form.Item
                className="w-[120px] !mb-0"
                initialValue={'no'}
                name={['disasterCountermeasures', 'securingFunds']}
              >
                <SelectButton
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
        {/* About health measures */}
        <div className="flex flex-col">
          <span className="text-primary font-bold text-[18px] leading-normal">健康対策について</span>
          <div className="border-t-[3px] border-primary mt-[20px] grid grid-cols-3 gap-y-2 gap-x-[100px] pt-[24px]">
            <div className="flex justify-between items-center">
              <span className="text-[14px] font-bold ">
                自炊環境 <br />
                （健康維持のための食生活）
              </span>
              <Form.Item
                className="w-[120px] !mb-0"
                initialValue={'no'}
                name={['healthMeasures', 'selfCateringEnvironment']}
              >
                <SelectButton
                  className="text-[24px]"
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
                免疫力UP環境
                <br />
                （高気密高断熱住宅、
                <br />
                リフレッシュ、温浴）
              </span>
              <Form.Item
                className="w-[120px] !mb-0"
                initialValue={'no'}
                name={['healthMeasures', 'immunityUpEnvironment']}
              >
                <SelectButton
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
    </div>
  );
}

export default Form4MajorRisksOfLife;
