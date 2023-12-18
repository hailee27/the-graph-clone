/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import TemplateCard from '../common/TemplateCard';
import { dataBeforeImprovement } from './data';
import ProblemsAndRisks from './ProblemsAndRisks';
import { Form, Input } from 'antd';
import { TypeDataSets } from '../Improved/type';

function BeforeImprovement() {
  const [form] = Form.useForm();
  const [dataSets, setDataSets] = useState<TypeDataSets[] | undefined>(undefined);

  useEffect(() => {
    const { riskValue, ...totalRisk } = form.getFieldsValue();
    setDataSets(
      Object.entries(totalRisk).map(([key, value]) => ({
        // scaleTitles: key === 'householdBudget' ? '家計' : 'alo',
        scaleValues: Object.values(value ?? {}).filter((e) => e === '2').length,
        scaleTicksCount: Object.values(value ?? {}).map((e) => e).length,
      }))
    );
    form.setFieldValue(
      'riskValue',
      Object.values(totalRisk)
        ?.flatMap((t) => Object.values(t as string))
        ?.filter((c) => c === '1')?.length
    );
  }, [form]);

  return (
    <Form
      form={form}
      onValuesChange={(_, values) => {
        const { riskValue, ...totalRisk } = values;
        setDataSets(
          Object.entries(totalRisk).map(([key, value]) => ({
            // scaleTitles: key === 'householdBudget' ? '家計' : 'alo',
            scaleValues: Object.values(value ?? {}).filter((e) => e === '2').length,
            scaleTicksCount: Object.values(value ?? {}).map((e) => e).length,
          }))
        );
        form.setFieldValue(
          'riskValue',
          Object.values(totalRisk)
            ?.flatMap((t) => Object.values(t as string))
            ?.filter((c) => c === '1')?.length
        );
      }}
    >
      <Form.Item className="!hidden" name="riskValue">
        <Input />
      </Form.Item>
      <div className="rounded-r-[16px] rounded-bl-[16px] bg-[#ffffff]  w-full px-[48px] py-[80px] ">
        <div className="font-bold text-[28px] text-center mb-[64px]">
          マイホームと比較した賃貸住宅で起こりやすい問題について
        </div>
        <div className="flex flex-col space-y-[16px] ">
          <Form.Item name={['householdBudget']}>
            <TemplateCard
              content={dataBeforeImprovement.householdBudget.content}
              image={dataBeforeImprovement.householdBudget.image}
              name="householdBudget"
              title={dataBeforeImprovement.householdBudget.title}
            />
          </Form.Item>
          <Form.Item name={['livingEnvironmentProblem']}>
            <TemplateCard
              content={dataBeforeImprovement.livingEnvironmentProblem.content}
              image={dataBeforeImprovement.livingEnvironmentProblem.image}
              name="livingEnvironmentProblem"
              title={dataBeforeImprovement.livingEnvironmentProblem.title}
            />
          </Form.Item>
        </div>
        <div className="font-bold text-[28px] text-center my-[64px]">
          マイホームと比較した賃貸住宅での、人生4大リスクの対策について
        </div>
        <div className="flex flex-col space-y-[16px]">
          <Form.Item name={['justInCaseRisk']}>
            <TemplateCard
              content={dataBeforeImprovement.justInCaseRisk.content}
              image={dataBeforeImprovement.justInCaseRisk.image}
              name="justInCaseRisk"
              title={dataBeforeImprovement.justInCaseRisk.title}
            />
          </Form.Item>
          <Form.Item name={['oldAgeRisk']}>
            <TemplateCard
              content={dataBeforeImprovement.oldAgeRisk.content}
              image={dataBeforeImprovement.oldAgeRisk.image}
              name="oldAgeRisk"
              title={dataBeforeImprovement.oldAgeRisk.title}
            />
          </Form.Item>
          <Form.Item name={['disasterRisk']}>
            <TemplateCard
              content={dataBeforeImprovement.disasterRisk.content}
              image={dataBeforeImprovement.disasterRisk.image}
              name="disasterRisk"
              title={dataBeforeImprovement.disasterRisk.title}
            />
          </Form.Item>
          <Form.Item name={['sickRisk']}>
            <TemplateCard
              content={dataBeforeImprovement.sickRisk.content}
              image={dataBeforeImprovement.sickRisk.image}
              name="sickRisk"
              title={dataBeforeImprovement.sickRisk.title}
            />
          </Form.Item>
          <Form.Item name={['other']}>
            <TemplateCard
              content={dataBeforeImprovement.other.content}
              image={dataBeforeImprovement.other.image}
              name="other"
              title={dataBeforeImprovement.other.title}
            />
          </Form.Item>
        </div>
      </div>
      <div className="mt-[24px]">
        <ProblemsAndRisks dataSets={dataSets} />
        <div className="pb-[200px] pt-[100px] flex items-center flex-col space-y-[48px]">
          <span className="tracking-[2.24px] text-[28px] font-bold">
            これが常識だと思われているので、全ての準備・対策に気付けない！
          </span>
          <svg fill="none" height="49" viewBox="0 0 66 49" width="66" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M39.4285 45.3216C36.2303 49.6392 29.7697 49.6392 26.5715 45.3216L2.4532 12.7618C-1.45771 7.48209 2.31121 8.93605e-07 8.88166 1.52418e-06L57.1183 6.15349e-06C63.6888 6.78406e-06 67.4577 7.4821 63.5468 12.7618L39.4285 45.3216Z"
              fill="#888888"
            />
          </svg>
          <p className="tracking-[3.04px] text-[38px]  font-bold text-center leading-[62px] text-primary">
            「最新の住宅ローン」で「最新のマイホーム」を購入すれば <br />
            「オールインワン」で解消出来ます！
          </p>
          <span className="tracking-[2.24px] font-bold text-[28px]">改善後を見てみましょう！</span>
        </div>
      </div>
    </Form>
  );
}

export default BeforeImprovement;
