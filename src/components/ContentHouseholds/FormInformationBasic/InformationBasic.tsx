import { Form } from 'antd';
import React from 'react';
import BasicInput from '../../common/BasicInput';
import SelectButton from '../../common/SelectButton';
import DatePickerWithType from '../../common/DatePickerWithType';

function InformationBasic() {
  return (
    <div>
      <div className="flex w-full h-full">
        <div className="w-[176px]"></div>
        <div className="w-[528px] bg-primary-light rounded-t-[16px] h-[66px] relative">
          <span className="font-bold text-[16px] text-primary absolute -top-3 left-[50%] -translate-x-[50%] ">
            夫記入欄
          </span>
        </div>
      </div>
      {/* NAME 1*/}
      <div className="flex w-full h-full  items-center">
        <div className="w-[176px] text-[14px] font-bold">お名前</div>
        <div className="w-[528px] bg-primary-light flex px-[48px] space-x-[8px] items-center">
          <Form.Item className="!mb-0" name={['name', 'firstName']}>
            <BasicInput placeholder="山田" />
          </Form.Item>
          <Form.Item className="!mb-0" name={['name', 'lastName']}>
            <BasicInput placeholder="太郎" />
          </Form.Item>
          <span className="text-[14px] font-bold">様</span>
        </div>
      </div>
      {/* NAME 2*/}
      <div className="flex w-full h-full  items-center">
        <div className="w-[176px] text-[14px] font-bold  pt-[48px]">お名前（フリガナ）</div>
        <div className="w-[528px] bg-primary-light flex px-[48px] space-x-[8px] items-center pt-[48px]">
          <Form.Item className="!mb-0" name={['name1', 'firstName']}>
            <BasicInput placeholder="ヤマダ" />
          </Form.Item>
          <Form.Item className="!mb-0" name={['name1', 'lastName']}>
            <BasicInput placeholder="タロウ" />
          </Form.Item>
          <span className="text-[14px] font-bold">様</span>
        </div>
      </div>
      {/* BIRTH DATE */}
      <div className="flex w-full h-full  items-center">
        <div className="w-[176px] text-[14px] font-bold  pt-[48px]">生年月日</div>
        <div className="w-[528px] bg-primary-light flex px-[48px] space-x-[8px] items-center justify-between pt-[48px]">
          <Form.Item className="!mb-0" name={['birthDay', 'year']}>
            <DatePickerWithType className="!w-[92px]" format={'YYYY'} picker="year" />
          </Form.Item>
          <span className="text-[14px] font-bold">年</span>
          <Form.Item className="!mb-0" name={['birthDay', 'month']}>
            <DatePickerWithType className="!w-[80px]" format={'MM'} picker="month" />
          </Form.Item>
          <span className="text-[14px] font-bold">月</span>
          <Form.Item className="!mb-0" name={['birthDay', 'day']}>
            <DatePickerWithType className="!w-[80px]" format={'DD'} picker="date" />
          </Form.Item>
          <span className="text-[14px] font-bold">日</span>

          <span className="text-[14px] font-bold">（00歳）</span>
        </div>
      </div>
    </div>
  );
}

export default InformationBasic;
