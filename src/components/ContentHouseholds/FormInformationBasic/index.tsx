import React from 'react';
import InformationBasic from './InformationBasic';

function FormInformationBasic() {
  return (
    <>
      <div className="bg-primary px-[24px] py-[20px] text-[#ffffff] text-[20px] font-bold leading-5 rounded-[4px] mb-[54px]">
        基本情報
      </div>
      <div className="flex space-x-[16px]">
        <InformationBasic type="husband" />
        <InformationBasic disabledLabel type="wife" />
      </div>
    </>
  );
}

export default FormInformationBasic;
