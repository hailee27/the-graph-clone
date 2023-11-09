import React from 'react';
import TemplateCard from '../common/TemplateCard';
import { dataBeforeImprovement } from './data';
import ProblemsAndRisks from './ProblemsAndRisks';

function BeforeImprovement() {
  return (
    <>
      <div className="rounded-r-[16px] rounded-bl-[16px] bg-[#ffffff]  w-full px-[48px] py-[80px] ">
        <div className="font-bold text-[28px] text-center mb-[64px]">
          マイホームと比較した賃貸住宅で起こりやすい問題について
        </div>
        <div className="flex flex-col space-y-[16px] ">
          <TemplateCard
            content={dataBeforeImprovement.householdBudget.content}
            image={dataBeforeImprovement.householdBudget.image}
            title={dataBeforeImprovement.householdBudget.title}
          />
          <TemplateCard
            content={dataBeforeImprovement.livingEnvironmentProblem.content}
            image={dataBeforeImprovement.livingEnvironmentProblem.image}
            title={dataBeforeImprovement.livingEnvironmentProblem.title}
          />
        </div>
        <div className="font-bold text-[28px] text-center my-[64px]">
          マイホームと比較した賃貸住宅での、人生4大リスクの対策について
        </div>
        <div className="flex flex-col space-y-[16px]">
          <TemplateCard
            content={dataBeforeImprovement.justInCaseRisk.content}
            image={dataBeforeImprovement.justInCaseRisk.image}
            title={dataBeforeImprovement.justInCaseRisk.title}
          />
          <TemplateCard
            content={dataBeforeImprovement.oldAgeRisk.content}
            image={dataBeforeImprovement.oldAgeRisk.image}
            title={dataBeforeImprovement.oldAgeRisk.title}
          />
          <TemplateCard
            content={dataBeforeImprovement.disasterRisk.content}
            image={dataBeforeImprovement.disasterRisk.image}
            title={dataBeforeImprovement.disasterRisk.title}
          />
          <TemplateCard
            content={dataBeforeImprovement.sickRisk.content}
            image={dataBeforeImprovement.sickRisk.image}
            title={dataBeforeImprovement.sickRisk.title}
          />
          <TemplateCard
            content={dataBeforeImprovement.other.content}
            image={dataBeforeImprovement.other.image}
            title={dataBeforeImprovement.other.title}
          />
        </div>
      </div>
      <div className="mt-[24px]">
        <ProblemsAndRisks />
      </div>
    </>
  );
}

export default BeforeImprovement;
