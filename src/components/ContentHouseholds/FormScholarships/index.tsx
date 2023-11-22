import React from 'react';
import InformationOnExistingBorrowing from './InformationOnExistingBorrowing';

function FormScholarships() {
  return (
    <>
      <div className="bg-primary px-[24px] py-[20px] text-[#ffffff] text-[20px] font-bold leading-5 rounded-[4px] mb-[50px]">
        既存借入・ローン・奨学金等情報
      </div>
      <InformationOnExistingBorrowing />
    </>
  );
}

export default React.memo(FormScholarships);
