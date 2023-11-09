import React from 'react';

function Diagnosis() {
  return (
    <div className="w-full  mt-[40px]">
      <div className="flex justify-between">
        <div className="flex flex-col justify-between space-y-[40px]">
          <div className="w-[182px] border-b-2 text-primary-text text-[20px] font-bold flex justify-between pb-[6px]">
            <span>山田</span>
            <span>様</span>
          </div>
          <span className="font-medium text-[18px] leading-snug">
            賃貸の家計、住環境がもたらす問題・リスクとは？問題・リスクの数値化をしましょう！
          </span>
        </div>
        <button className="bg-[#ffffff] w-[240px] py-[24px] h-[58px] rounded-[70px] flex items-center justify-center space-x-3">
          <svg fill="none" height="8" viewBox="0 0 6 8" width="6" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.1236 3.18912C0.570536 3.58825 0.570536 4.41175 1.12359 4.81088L4.41479 7.1861C5.07616 7.6634 6 7.19083 6 6.37522L6 1.62478C6 0.809174 5.07616 0.336598 4.41479 0.813896L1.1236 3.18912Z"
              fill="#888888"
            />
          </svg>
          <span className="font-bold text-[14px] text-tertiary">カルテを開く</span>
        </button>
      </div>
    </div>
  );
}

export default Diagnosis;