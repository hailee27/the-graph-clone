import React from 'react';
import WorkInformation from './WorkInformation';

function FormWorkInformation({ typeContent }: { typeContent: 'single' | 'multiple' | string }) {
  return (
    <>
      <div className="bg-primary px-[24px] py-[20px] text-[#ffffff] text-[20px] font-bold leading-5 rounded-[4px] mb-[54px]">
        勤務先情報
      </div>
      {typeContent === 'single' && (
        <div className="flex space-x-[16px]">
          <WorkInformation type="husband" />
          <WorkInformation disabledLabel type="wife" />
        </div>
      )}
      {typeContent === 'multiple' && <WorkInformation type="people" />}
    </>
  );
}

export default FormWorkInformation;
