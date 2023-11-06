import React from 'react';
import FamilyInformation from './FamilyInformation';

function FormFamilyInformation({ typeContent }: { typeContent: 'single' | 'multiple' | string }) {
  return (
    <>
      <div className="bg-primary px-[24px] py-[20px] text-[#ffffff] text-[20px] font-bold leading-5 rounded-[4px] mb-[54px]">
        ご実家情報
      </div>
      {typeContent === 'single' && (
        <div className="flex space-x-[16px]">
          <FamilyInformation type="husband" />
          <FamilyInformation disabledLabel type="wife" />
        </div>
      )}
      {typeContent === 'multiple' && <FamilyInformation type="people" />}
    </>
  );
}

export default FormFamilyInformation;
