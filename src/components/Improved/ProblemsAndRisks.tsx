import React, { useEffect, useState } from 'react';
import InputRuler from '../common/InputRuler';
import { Form } from 'antd';

function ProblemsAndRisks() {
  const [total, setToal] = useState<number>(27);
  const form = Form.useFormInstance();
  const value = Form.useWatch('riskValue', form);
  useEffect(() => {
    const { riskValue, ...totalRisk } = form.getFieldsValue();
    const length = Object.values(totalRisk)?.flatMap((e) => Object.values(e as string))?.length;
    setToal(length);
  }, [form]);
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
      <div className="flex w-[999px] h-[261px] rounded-[8px]">
        <div className="bg-secondary w-[160px] rounded-[8px] flex flex-col items-center justify-center space-y-[8px]">
          <button className=" bg-[#ffffff] w-[98px] rounded-[4px] py-[5.5px] px-[10px]">
            <span className="text-secondary text-[18px] font-bold max-h-[13px] leading-normal tracking-[1.44px]">
              安心
            </span>
          </button>
          <button className=" bg-[#ffffff] w-[98px] rounded-[4px] py-[5.5px] px-[10px]">
            <span className="text-secondary text-[18px] font-bold max-h-[13px] leading-normal tracking-[1.44px]">
              安全
            </span>
          </button>
          <button className=" bg-[#ffffff] w-[98px] rounded-[4px] py-[5.5px] px-[10px]">
            <span className="text-secondary text-[18px] font-bold max-h-[13px] leading-normal tracking-[1.44px]">
              満足
            </span>
          </button>
          <button className=" bg-[#ffffff] w-[98px] rounded-[4px] py-[5.5px] px-[10px]">
            <span className="text-secondary text-[18px] font-bold max-h-[13px] leading-normal tracking-[1.44px]">
              幸福
            </span>
          </button>
          <button className=" bg-[#ffffff] w-[98px] rounded-[4px] py-[5.5px] px-[10px]">
            <span className="text-secondary text-[18px] font-bold max-h-[13px] leading-normal tracking-[1.44px]">
              希望
            </span>
          </button>
        </div>

        <div
          className="flex-1 px-[56px] flex items-center flex-col justify-center space-y-[40px]"
          style={{ background: 'linear-gradient(270deg, rgba(255, 235, 220, 0.00) 15.68%, #FFEBDC 87.43%)' }}
        >
          <span className="text-[24px] font-bold text-secondary">マイホームでは全てオールインワンで解消出来る！</span>
          <div className="w-full">
            <InputRuler reverse={true} type="secondary" value={value} />
          </div>
        </div>
        <div className="bg-tertiary w-[160px] rounded-[8px] flex flex-col items-center justify-center space-y-[8px]">
          <button className=" bg-[#ffffff] w-[98px] rounded-[4px] py-[5.5px] px-[10px]">
            <span className="text-tertiary text-opacity-80 text-[18px] font-bold max-h-[13px] leading-normal tracking-[1.44px]">
              不安
            </span>
          </button>
          <button className=" bg-[#ffffff] w-[98px] rounded-[4px] py-[5.5px] px-[10px]">
            <span className="text-tertiary text-opacity-80 text-[18px] font-bold max-h-[13px] leading-normal tracking-[1.44px]">
              危険
            </span>
          </button>
          <button className=" bg-[#ffffff] w-[98px] rounded-[4px] py-[5.5px] px-[10px]">
            <span className="text-tertiary text-opacity-80 text-[18px] font-bold max-h-[13px] leading-normal tracking-[1.44px]">
              不満
            </span>
          </button>
          <button className=" bg-[#ffffff] w-[98px] rounded-[4px] py-[5.5px] px-[10px]">
            <span className="text-tertiary text-opacity-80 text-[18px] font-bold max-h-[13px] leading-normal tracking-[1.44px]">
              不幸
            </span>
          </button>
          <button className=" bg-[#ffffff] w-[98px] rounded-[4px] py-[5.5px] px-[10px]">
            <span className="text-tertiary text-opacity-80 text-[18px] font-bold max-h-[13px] leading-normal tracking-[1.44px]">
              絶望
            </span>
          </button>
        </div>
      </div>
      <div className="mt-[80px] font-bold ">
        <span className="tracking-[1.44px] text-[18px] ">上記に対し、初期費用</span>
        <span className="tracking-[3.52px] text-[44px]">00</span>
        <span className="tracking-[2.24px] text-[28px] ">万円と、毎月の固定費</span>
        <span className="tracking-[3.52px] text-[44px]">000,000</span>
        <span className="tracking-[2.56px] text-[32px]">円払う予定</span>
      </div>
    </div>
  );
}

export default ProblemsAndRisks;
