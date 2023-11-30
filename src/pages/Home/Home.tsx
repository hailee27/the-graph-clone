import React, { useState } from 'react';
import { Radio } from 'antd';
import { useNavigate } from 'react-router-dom';
import BasicButton from '../../components/common/BasicButton';
import BasicRadio from '../../components/common/BasicRadio';

function Home() {
  const [value, setValue] = useState<string | undefined>(undefined);

  const navigate = useNavigate();

  return (
    <div className="min-h-full flex items-center  ">
      <div className="w-[800px] h-[491px] flex flex-col space-y-[80px] items-center justify-between">
        <div className="bg-[#FFFFFF] rounded-[16px] flex-1 w-full flex items-center justify-center">
          <Radio.Group defaultValue={value} onChange={(e) => setValue(e.target.value)}>
            <div className="flex space-x-[64px]">
              <BasicRadio typeRadio="primary" value="single">
                <span className="text-[18px] font-bold text-primary">単身世帯の方</span>
              </BasicRadio>
              <BasicRadio typeRadio="primary" value="multiple">
                <span className="text-[18px] font-bold text-primary">複数世帯（2人）以上</span>
              </BasicRadio>
            </div>
          </Radio.Group>
        </div>
        <BasicButton
          className="h-[77px] w-[400px]"
          onClick={() => value && navigate(`/house-holds/${value}`)}
          type="secondary"
        >
          <div className="flex items-center justify-center space-x-[10px]">
            <span className="text-[18px] font-bold text-[#ffffff]">次へ</span>
            <svg fill="none" height="8" viewBox="0 0 6 8" width="6" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.8764 3.18912C5.42946 3.58825 5.42946 4.41175 4.87641 4.81088L1.58521 7.1861C0.923842 7.6634 9.76746e-08 7.19083 8.79486e-08 6.37522L3.13002e-08 1.62478C2.15742e-08 0.809174 0.923841 0.336598 1.58521 0.813896L4.8764 3.18912Z"
                fill="white"
              />
            </svg>
          </div>
        </BasicButton>
      </div>
    </div>
  );
}

export default Home;
