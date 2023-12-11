/* eslint-disable max-lines */
/* eslint-disable max-lines-per-function */
import React, { useEffect, useMemo, useState } from 'react';
import InputRuler from '../common/InputRuler';
import { Form } from 'antd';
import RadarChart from '../RadarChart';
import { TypeDataSets } from './type';
import CardFix from '../ContentHouseholds/CardFix';
import { formatNumber } from '../../utils/formatNumber';
import BasicInput from '../common/BasicInput';
import Currency from '../common/Currency';
import { useSearchParams } from 'react-router-dom';

function ProblemsAndRisks({ dataSets }: { dataSets: TypeDataSets[] | undefined }) {
  const [total, setToal] = useState<number>(27);
  const [salesAmount, setSalesAmount] = useState<number | string>(-8000);
  const form = Form.useFormInstance();
  const { riskValue, ...totalRisk } = form.getFieldsValue();
  const value = Form.useWatch('riskValue', form);
  const [formCost] = Form.useForm();
  const [searchParams] = useSearchParams();
  const queryParam = useMemo(() => {
    if (searchParams.get('query')) {
      return JSON.parse(searchParams.get('query') ?? '');
    }
    return undefined;
  }, [searchParams.get('query')]);

  useEffect(() => {
    const length = Object.values(totalRisk)?.flatMap((e) => Object.values(e as string))?.length;
    setToal(length);
  }, [form]);

  const lifeInsurance = useMemo<{ name: string; monthlyPremium: number }[]>(() => {
    return queryParam.lifeInsurances.flatMap((e: { name: string; monthlyPremium: number }) => e);
  }, [queryParam]);
  const monthlyRepaymentAmount = Form.useWatch('monthlyRepaymentAmount', formCost);

  return (
    <div className="bg-[#ffffff] rounded-[16px] py-[106px] flex items-center justify-center flex-col ">
      <div className="text-[28px] font-bold">
        <span className="tracking-[2.24px]">人生100年にとっての問題・リスクを</span>
        <span className="text-[32px] tracking-[2.56px]">合計</span>
        <span className="text-[44px] tracking-[3.52px]">{value}</span>
        <span className="tracking-[2.24px]">/{total} 抱えている！</span>
      </div>
      <span className="text-[18px] font-medium mt-[72px] pb-[24px] tracking-[1.44px]">
        マイホームを選んだ場合の改善効果を可視化
      </span>
      <div className="flex items-center">
        <div className="flex w-[709px] h-[261px] rounded-[8px]">
          <div className="bg-secondary w-[112px] rounded-[8px] flex flex-col items-center justify-center space-y-[8px]">
            <button className=" bg-[#ffffff] w-[64px] rounded-[4px] py-[4px] px-[10px]">
              <span className="text-secondary text-[18px] font-bold max-h-[13px] leading-normal tracking-[1.44px]">
                安心
              </span>
            </button>
            <button className=" bg-[#ffffff] w-[64px] rounded-[4px] py-[4px] px-[10px]">
              <span className="text-secondary text-[18px] font-bold max-h-[13px] leading-normal tracking-[1.44px]">
                安全
              </span>
            </button>
            <button className=" bg-[#ffffff] w-[64px] rounded-[4px] py-[4px] px-[10px]">
              <span className="text-secondary text-[18px] font-bold max-h-[13px] leading-normal tracking-[1.44px]">
                満足
              </span>
            </button>
            <button className=" bg-[#ffffff] w-[64px] rounded-[4px] py-[4px] px-[10px]">
              <span className="text-secondary text-[18px] font-bold max-h-[13px] leading-normal tracking-[1.44px]">
                幸福
              </span>
            </button>
            <button className=" bg-[#ffffff] w-[64px] rounded-[4px] py-[4px] px-[10px]">
              <span className="text-secondary text-[18px] font-bold max-h-[13px] leading-normal tracking-[1.44px]">
                希望
              </span>
            </button>
          </div>

          <div
            className="flex-1 px-[56px] flex items-center flex-col justify-center space-y-[40px]"
            style={{ background: 'linear-gradient(270deg, rgba(255, 235, 220, 0.00) 15.68%, #FFEBDC 87.43%)' }}
          >
            <div className="text-[24px] font-bold text-secondary text-center">
              マイホームでは全て
              <br />
              オールインワンで解消出来る！
            </div>
            <div className="w-full">
              <InputRuler type="secondary" value={value} />
            </div>
          </div>
          <div className="bg-tertiary w-[112px] rounded-[8px] flex flex-col items-center justify-center space-y-[8px]">
            <button className=" bg-[#ffffff] w-[64px] rounded-[4px] py-[4px] px-[10px]">
              <span className="text-tertiary text-opacity-80 text-[18px] font-bold max-h-[13px] leading-normal tracking-[1.44px]">
                不安
              </span>
            </button>
            <button className=" bg-[#ffffff] w-[64px] rounded-[4px] py-[4px] px-[10px]">
              <span className="text-tertiary text-opacity-80 text-[18px] font-bold max-h-[13px] leading-normal tracking-[1.44px]">
                危険
              </span>
            </button>
            <button className=" bg-[#ffffff] w-[64px] rounded-[4px] py-[4px] px-[10px]">
              <span className="text-tertiary text-opacity-80 text-[18px] font-bold max-h-[13px] leading-normal tracking-[1.44px]">
                不満
              </span>
            </button>
            <button className=" bg-[#ffffff] w-[64px] rounded-[4px] py-[4px] px-[10px]">
              <span className="text-tertiary text-opacity-80 text-[18px] font-bold max-h-[13px] leading-normal tracking-[1.44px]">
                不幸
              </span>
            </button>
            <button className=" bg-[#ffffff] w-[64px] rounded-[4px] py-[4px] px-[10px]">
              <span className="text-tertiary text-opacity-80 text-[18px] font-bold max-h-[13px] leading-normal tracking-[1.44px]">
                絶望
              </span>
            </button>
          </div>
        </div>
        {/* radar chart */}
        <div className="ml-[40px]">
          <RadarChart
            coverBg="rgba(255, 119, 21, 0.2)"
            dataSets={{
              scaleTicksCount: dataSets?.map((e) => e.scaleTicksCount) ?? [],
              scaleValues: dataSets?.map((e) => e.scaleValues) ?? [],
              scaleTitles: ['家計', '住環境', '万が一', '老後', '災害', '病気', 'その他'],
            }}
            image="images/like.svg"
            mainColor="#FF7715"
          />
        </div>
      </div>
      <div className="mt-[80px] font-bold w-full px-[48px]">
        <div>
          <span className="font-bold text-[20px]">■マイホームにかかる費用</span>
          <Form
            form={formCost}
            // initialValues={}
            onValuesChange={(_, values) => {
              const P = Number(values.propertyPrice * 10000);
              const r = Number(Number(Number(values.interestRate) / (100 * 12)).toFixed(10));
              const n = Number(values.repaymentPeriod) * 12;
              const pmt = Math.floor(P * ((r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)));
              formCost.setFieldValue('monthlyRepaymentAmount', pmt);
            }}
          >
            <div className="flex space-x-[8px] mt-[24px]">
              <CardFix
                content={
                  <div className="!px-[24px] flex items-center space-x-[8px]">
                    <Form.Item className="!mb-0 flex-1" name="propertyPrice">
                      <BasicInput className="bg-secondary-thin " placeholder="3,500" type="number" />
                    </Form.Item>
                    <span className="w-[30px]">万円</span>
                  </div>
                }
                title="物件価格"
                type={1}
              />
              <CardFix
                content={
                  <div className="!px-[24px] flex items-center space-x-[8px]">
                    <Form.Item className="!mb-0 flex-1" name="repaymentPeriod">
                      <BasicInput className="bg-secondary-thin " placeholder="35" type="number" />
                    </Form.Item>
                    <span className="w-[30px]">年</span>
                  </div>
                }
                title="返済期間"
                type={1}
              />
              <CardFix
                content={
                  <div className="!px-[24px] flex items-center space-x-[8px]">
                    <Form.Item className="!mb-0 flex-1" name="interestRate">
                      <BasicInput className="bg-secondary-thin " placeholder="0.625 " type="number" />
                    </Form.Item>
                    <span className="w-[30px]">%</span>
                  </div>
                }
                title="金利"
                type={1}
              />
              <CardFix
                content={
                  <Form.Item name="monthlyRepaymentAmount" noStyle>
                    <Currency />
                  </Form.Item>
                }
                title="毎月の返済額"
                type={1}
              />
            </div>
          </Form>
        </div>
        <div className="mt-[32px]">
          <span className="font-bold text-[20px]">■生命保険</span>
          <div className="flex space-x-[8px] mt-[24px]">
            <CardFix
              content={
                <span className="font-bold text-[40px]">
                  {formatNumber(
                    lifeInsurance
                      .filter((e) => e.name === '死亡')
                      .map((e) => e.monthlyPremium)
                      .reduce((prev, cur) => prev + cur, 0)
                  ) ?? 0}
                </span>
              }
              title="死亡"
              type={1}
            />
            <CardFix
              content={
                <span className="font-bold text-[40px]">
                  {' '}
                  {formatNumber(
                    lifeInsurance
                      .filter((e) => e.name === '医療')
                      .map((e) => e.monthlyPremium)
                      .reduce((prev, cur) => prev + cur, 0)
                  ) ?? 0}
                </span>
              }
              title="医療"
              type={1}
            />
            <CardFix
              content={
                <span className="font-bold text-[40px]">
                  {' '}
                  {formatNumber(
                    lifeInsurance
                      .filter((e) => e.name === 'がん')
                      .map((e) => e.monthlyPremium)
                      .reduce((prev, cur) => prev + cur, 0)
                  ) ?? 0}
                </span>
              }
              title="がん"
              type={1}
            />
            <CardFix
              content={
                <span className="font-bold text-[40px]">
                  {' '}
                  {formatNumber(
                    lifeInsurance
                      .filter((e) => e.name === '養老')
                      .map((e) => e.monthlyPremium)
                      .reduce((prev, cur) => prev + cur, 0)
                  ) ?? 0}
                </span>
              }
              title="養老"
              type={1}
            />
            <CardFix
              content={
                <span className="font-bold text-[40px]">
                  {' '}
                  {formatNumber(
                    lifeInsurance
                      .filter((e) => e.name === 'その他')
                      .map((e) => e.monthlyPremium)
                      .reduce((prev, cur) => prev + cur, 0)
                  ) ?? 0}
                </span>
              }
              title="その他"
              type={1}
            />
          </div>
        </div>
        <div className="flex items-center justify-center text-[20px] mt-[48px] space-x-[40px] text-secondary ">
          <span className="text-[20px] font-bold underline underline-offset-[14px]">毎月の返済額</span>

          <span className="text-primary-text text-[56px]">{formatNumber(monthlyRepaymentAmount ?? 0)}</span>

          <span className="text-[20px] font-bold underline underline-offset-[14px]">売電金額</span>
          <div className=" w-[154px] flex items-center space-x-[8px]">
            <BasicInput
              className="bg-secondary-thin text-[14px] font-bold"
              defaultValue={5}
              onChange={(e) => setSalesAmount(e.target.value)}
              type="number"
              value={salesAmount}
            />
            <span>円</span>
          </div>
          <span className="text-[20px] font-bold underline underline-offset-[14px]">生命保険</span>

          <span className="text-[56px] text-primary-text">
            {formatNumber(lifeInsurance.map((e) => e.monthlyPremium).reduce((prev, cur) => prev + cur, 0)) ?? 0}
          </span>
        </div>
        <div className="flex items-center justify-center bg-secondary-thin py-[33px] space-x-[32px] mt-[80px]">
          <span className="text-[28px]">毎月の固定費は</span>
          <div className="h-[40px]">
            <span className="text-[64px] leading-[40px]">
              {Number(lifeInsurance.map((e) => e.monthlyPremium).reduce((prev, cur) => prev + cur, 0)) +
                Number(monthlyRepaymentAmount || 0) -
                Number(salesAmount)}
            </span>
            <span className="text-[40px]">円!</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProblemsAndRisks;
