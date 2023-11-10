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
          <span className="tracking-[2.24px] font-bold text-[28px]">その根拠をお伝えします！</span>
        </div>
      </div>
    </>
  );
}

export default BeforeImprovement;
