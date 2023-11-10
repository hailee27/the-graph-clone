import React from 'react';
import TemplateCard from '../common/TemplateCard';
import { dataImprovement } from './data';
import ProblemsAndRisks from './ProblemsAndRisks';

function Improved() {
  return (
    <>
      <div className="rounded-r-[16px] rounded-bl-[16px] bg-[#ffffff]  w-full px-[48px] py-[80px] ">
        <div className="font-bold text-[28px] text-center mb-[64px]">
          賃貸住宅と比較してマイホームで改善できる問題について
        </div>
        <div className="flex flex-col space-y-[16px] ">
          <TemplateCard
            content={dataImprovement.householdBudget.content}
            image={dataImprovement.householdBudget.image}
            title={dataImprovement.householdBudget.title}
            type="secondary"
          />
          <TemplateCard
            content={dataImprovement.livingEnvironmentProblem.content}
            image={dataImprovement.livingEnvironmentProblem.image}
            title={dataImprovement.livingEnvironmentProblem.title}
            type="secondary"
          />
        </div>
        <div className="font-bold text-[28px] text-center my-[64px]">
          マイホームと比較した賃貸住宅での、人生4大リスクの対策について
        </div>
        <div className="flex flex-col space-y-[16px]">
          <TemplateCard
            content={dataImprovement.justInCaseRisk.content}
            image={dataImprovement.justInCaseRisk.image}
            title={dataImprovement.justInCaseRisk.title}
            type="secondary"
          />
          <TemplateCard
            content={dataImprovement.oldAgeRisk.content}
            image={dataImprovement.oldAgeRisk.image}
            title={dataImprovement.oldAgeRisk.title}
            type="secondary"
          />
          <TemplateCard
            content={dataImprovement.disasterRisk.content}
            image={dataImprovement.disasterRisk.image}
            title={dataImprovement.disasterRisk.title}
            type="secondary"
          />
          <TemplateCard
            content={dataImprovement.sickRisk.content}
            image={dataImprovement.sickRisk.image}
            title={dataImprovement.sickRisk.title}
            type="secondary"
          />
          <TemplateCard
            content={dataImprovement.other.content}
            image={dataImprovement.other.image}
            title={dataImprovement.other.title}
            type="secondary"
          />
        </div>
      </div>
      <div className="mt-[24px]">
        <ProblemsAndRisks />
        <div className="pb-[200px] pt-[100px] flex items-center flex-col space-y-[48px]">
          <span className="tracking-[2.24px] text-[28px] font-bold">これがこれからの新常識！</span>
          <svg fill="none" height="49" viewBox="0 0 66 49" width="66" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M39.4285 45.3216C36.2303 49.6392 29.7697 49.6392 26.5715 45.3216L2.4532 12.7618C-1.45771 7.48209 2.31121 8.93605e-07 8.88166 1.52418e-06L57.1183 6.15349e-06C63.6888 6.78406e-06 67.4577 7.4821 63.5468 12.7618L39.4285 45.3216Z"
              fill="#888888"
            />
          </svg>
          <p className="tracking-[3.04px] text-[38px]  font-bold text-center leading-[62px] text-secondary">
            {/* eslint-disable-next-line no-irregular-whitespace */}
            「最新の住宅ローン」で「最新のマイホーム」を購入すれば 
            <br />
            「オールインワン」で解消出来ます！
          </p>
          <span className="tracking-[2.24px] font-bold text-[28px]">その根拠をお伝えします！</span>
        </div>
      </div>
    </>
  );
}

export default Improved;
