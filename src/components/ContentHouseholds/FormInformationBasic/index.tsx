import React from 'react';
import InformationBasic from './InformationBasic';

function FormInformationBasic({ typeContent }: { typeContent: 'single' | 'multiple' | string }) {
  return (
    <>
      <div className="bg-primary px-[24px] py-[20px] text-[#ffffff] text-[20px] font-bold leading-5 rounded-[4px] mb-[54px] ">
        基本情報
      </div>
      {typeContent === 'multiple' && (
        <div className="flex space-x-[16px] justify-between ">
          <InformationBasic type="husband" />
          <InformationBasic disabledLabel type="wife" />
        </div>
      )}
      {typeContent === 'single' && <InformationBasic type="people" />}
    </>
  );
}

export default FormInformationBasic;
