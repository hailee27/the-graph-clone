/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import TemplateCard from '../common/TemplateCard';
import { dataImprovement } from './data';
import ProblemsAndRisks from './ProblemsAndRisks';
import { Form, Input } from 'antd';
import { TypeDataSets } from './type';

function Improved() {
  const [form] = Form.useForm();
  const [dataSets, setDataSets] = useState<TypeDataSets[] | undefined>(undefined);
  useEffect(() => {
    const { riskValue, ...totalRisk } = form.getFieldsValue();
    setDataSets(
      Object.entries(totalRisk).map(([key, value]) => ({
        // scaleTitles: key === 'householdBudget' ? '家計' : 'alo',
        scaleValues: Object.values(value ?? {}).filter((e) => e === '1').length,
        scaleTicksCount: Object.values(value ?? {}).map((e) => e).length,
      }))
    );
    form.setFieldValue(
      'riskValue',
      Object.values(totalRisk)
        ?.flatMap((t) => Object.values(t as string))
        ?.filter((c) => c === '2')?.length
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
            scaleValues: Object.values(value ?? {}).filter((e) => e === '1').length,
            scaleTicksCount: Object.values(value ?? {}).map((e) => e).length,
          }))
        );

        form.setFieldValue(
          'riskValue',
          Object.values(totalRisk)
            ?.flatMap((t) => Object.values(t as string))
            ?.filter((c) => c === '2')?.length
        );
      }}
    >
      <Form.Item className="!hidden" name="riskValue">
        <Input />
      </Form.Item>
      <div className="rounded-r-[16px] rounded-bl-[16px] bg-[#ffffff]  w-full px-[48px] py-[80px] ">
        <div className="font-bold text-[28px] text-center mb-[64px]">
          賃貸住宅と比較してマイホームで改善できる問題について
        </div>
        <div className="flex flex-col space-y-[16px] ">
          <Form.Item name={['householdBudget']}>
            <TemplateCard
              content={dataImprovement.householdBudget.content}
              image={dataImprovement.householdBudget.image}
              name="householdBudget"
              title={dataImprovement.householdBudget.title}
              type="secondary"
            />
          </Form.Item>
          <Form.Item name={['livingEnvironmentProblem']}>
            <TemplateCard
              content={dataImprovement.livingEnvironmentProblem.content}
              image={dataImprovement.livingEnvironmentProblem.image}
              name="livingEnvironmentProblem"
              title={dataImprovement.livingEnvironmentProblem.title}
              type="secondary"
            />
          </Form.Item>
        </div>
        <div className="font-bold text-[28px] text-center my-[64px]">
          マイホームと比較した賃貸住宅での、人生4大リスクの対策について
        </div>
        <div className="flex flex-col space-y-[16px]">
          <Form.Item name={['justInCaseRisk']}>
            <TemplateCard
              content={dataImprovement.justInCaseRisk.content}
              image={dataImprovement.justInCaseRisk.image}
              name="justInCaseRisk"
              title={dataImprovement.justInCaseRisk.title}
              type="secondary"
            />
          </Form.Item>
          <Form.Item name={['oldAgeRisk']}>
            <TemplateCard
              content={dataImprovement.oldAgeRisk.content}
              image={dataImprovement.oldAgeRisk.image}
              name="oldAgeRisk"
              title={dataImprovement.oldAgeRisk.title}
              type="secondary"
            />
          </Form.Item>
          <Form.Item name={['disasterRisk']}>
            <TemplateCard
              content={dataImprovement.disasterRisk.content}
              image={dataImprovement.disasterRisk.image}
              name="disasterRisk"
              title={dataImprovement.disasterRisk.title}
              type="secondary"
            />
          </Form.Item>
          <Form.Item name={['sickRisk']}>
            <TemplateCard
              content={dataImprovement.sickRisk.content}
              image={dataImprovement.sickRisk.image}
              name="sickRisk"
              title={dataImprovement.sickRisk.title}
              type="secondary"
            />
          </Form.Item>
          <Form.Item name={['other']}>
            <TemplateCard
              content={dataImprovement.other.content}
              image={dataImprovement.other.image}
              name="other"
              title={dataImprovement.other.title}
              type="secondary"
            />
          </Form.Item>
        </div>
      </div>
      <div className="mt-[24px]">
        <ProblemsAndRisks dataSets={dataSets} />
        <div className="pb-[200px] pt-[100px] flex items-center flex-col space-y-[48px]">
          <span className="tracking-[2.24px] text-[28px] font-bold">これがこれからの新常識！</span>
          <svg fill="none" height="49" viewBox="0 0 66 49" width="66" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M39.4285 45.3216C36.2303 49.6392 29.7697 49.6392 26.5715 45.3216L2.4532 12.7618C-1.45771 7.48209 2.31121 8.93605e-07 8.88166 1.52418e-06L57.1183 6.15349e-06C63.6888 6.78406e-06 67.4577 7.4821 63.5468 12.7618L39.4285 45.3216Z"
              fill="#888888"
            />
          </svg>

          <span className="tracking-[2.24px] font-bold text-[28px]">その根拠をお伝えします！</span>
        </div>
      </div>
    </Form>
  );
}

export default Improved;
