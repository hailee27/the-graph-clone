import React from 'react';
import InputRuler from '../common/InputRuler';

function ProblemsAndRisks() {
  return (
    <div className="bg-[#ffffff] rounded-[16px] py-[106px] flex items-center justify-center flex-col ">
      <div className="text-[28px] font-bold">
        <span>人生100年にとっての問題・リスクを</span>
        <span className="text-[32px]">合計</span>
        <span className="text-[44px]">27</span>
        <span>/27 抱えている！</span>
      </div>
      <span className="text-[18px] font-medium mt-[72px] pb-[24px]">
        住宅ローンが使えるのに賃貸を選んだ場合の問題・リスクを可視化
      </span>
      <div className="flex w-[999px] h-[261px] rounded-[8px]">
        <div className="bg-tertiary w-[160px] rounded-[8px]">trai</div>

        <div
          className="flex-1 px-[56px] flex items-center flex-col justify-center space-y-[40px]"
          style={{ background: 'linear-gradient(270deg, #DFEEDF 15.68%, rgba(223, 238, 223, 0.00) 87.43%)' }}
        >
          <span className="text-[24px] font-bold text-primary">賃貸では解消出来ず大きくなっていく</span>
          <div className="w-full">
            <InputRuler defaultValue={27} />
          </div>
        </div>
        <div className="bg-[#2C8D27] w-[160px] rounded-[8px]">phai</div>
      </div>
    </div>
  );
}

export default ProblemsAndRisks;
