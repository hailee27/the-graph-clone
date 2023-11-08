import React from 'react';
import NewHouseInformation from './NewHouseInformation';

function FormNewHouseInformation() {
  return (
    <>
      <div className="bg-primary px-[24px] py-[20px] text-[#ffffff] text-[20px] font-bold leading-5 rounded-[4px] mb-[50px]">
        新居情報
      </div>
      <NewHouseInformation />
    </>
  );
}

export default FormNewHouseInformation;