import { Form, Radio } from 'antd';
import React from 'react';
import BasicRadio from '../common/BasicRadio';
import BasicTextArea from '../common/BasicTextArea';
import BasicInput from '../common/BasicInput';

function FormFutureHome() {
  return (
    <div className="text-primary-text flex flex-col space-y-[48px]">
      <div className="flex">
        <span className="w-[224px] text-[14px] font-bold">老後の住まいは？</span>
        <Form.Item className="!m-0" name="liveInRetirement">
          <Radio.Group className="!w-full ">
            <div className="flex space-x-[24px]">
              <BasicRadio value="single">
                <span className="text-[14px] font-bold ">実家</span>
              </BasicRadio>
              <BasicRadio value="multiple">
                <span className="text-[14pxs] font-bold ">賃貸</span>
              </BasicRadio>
              <BasicRadio value="multiple1">
                <span className="text-[14pxs] font-bold ">マイホーム購入</span>
              </BasicRadio>
            </div>
          </Radio.Group>
        </Form.Item>
      </div>

      <div className="flex">
        <span className="w-[224px] text-[14px] font-bold">
          マイホーム購入以外の方
          <br />
          具体的な理由は？
        </span>
        <Form.Item className="!m-0 flex-1" name="reasonPurchasingHome">
          <BasicTextArea
            className="bg-primary-light"
            placeholder="自由にご記入ください"
            style={{ height: '136px', resize: 'none' }}
          />
        </Form.Item>
      </div>
      <div className="flex">
        <span className="w-[224px] text-[14px] font-bold">
          マイホーム購入は何歳・
          <br />
          何年後に考えていますか？
        </span>
        <div className="flex-1 flex space-y-[8px] flex-col">
          <div className="flex items-center space-x-[8px]">
            <Form.Item className="!m-0 w-[120px]" name={['buyHome', 'age']}>
              <BasicInput className="bg-primary-light" placeholder="30" type="number" />
            </Form.Item>
            <div className="flex items-center space-x-[40px]">
              <span className="text-[14px] font-bold ">歳</span>
              <span className="text-[30px] font-bold">
                00 <span className="text-[14px]">年後</span>
              </span>
            </div>
          </div>
          <Form.Item className="!mb-0 " name={['buyHome', 'note']}>
            <BasicTextArea
              className="bg-primary-light"
              placeholder="Ex）先にする理由は、頭金が貯まってから。　子供が生まれてからでいいかな。　"
              style={{ height: '136px', resize: 'none' }}
            />
          </Form.Item>
        </div>
      </div>
      <div className="flex">
        <span className="w-[224px] text-[14px] font-bold">
          今、マイホームを持つと
          <br />
          不都合はありますか？
        </span>
        <div className="flex-1 flex space-y-[8px] flex-col">
          <div className="flex items-center space-x-[8px] w-full">
            <Form.Item className="!m-0" name={['ownHome', 'have']}>
              <Radio.Group className="!w-full ">
                <div className="flex space-x-[24px]">
                  <BasicRadio value="yes">
                    <span className="text-[14px] font-bold ">有</span>
                  </BasicRadio>
                  <BasicRadio value="no">
                    <span className="text-[14pxs] font-bold ">無</span>
                  </BasicRadio>
                </div>
              </Radio.Group>
            </Form.Item>
          </div>
          <Form.Item className="!mb-0 " name={['ownHome', 'note']}>
            <BasicTextArea
              className="bg-primary-light"
              placeholder="Ex）先にする理由は、頭金が貯まってから。　子供が生まれてからでいいかな。　"
              style={{ height: '136px', resize: 'none' }}
            />
          </Form.Item>
        </div>
      </div>
      <div className="flex">
        <span className="w-[224px] text-[14px] font-bold">
          老後貯蓄は
          <br />
          いくら出来ますか？
        </span>
        <div className="flex-1 flex space-y-[8px] flex-col">
          <div className="flex space-x-[40px] items-center">
            <span className="font-bold text-[14px]">今出来る月々の最大貯蓄額</span>
            <div className="flex flex-1 items-center space-x-[8px] w-full">
              <Form.Item className="!m-0" name="retirementSaving">
                <BasicInput className="bg-primary-light" placeholder="50000" type="number" />
              </Form.Item>
              <span className="text-[14px] font-bold">円</span>
            </div>
          </div>
          <div className="font-bold text-[14px]">
            <span>
              60歳まで
              <span className="text-[30px]">00</span>
              年間の貯蓄額は、
              <span className="text-[28px]">0,000 万円</span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex">
        <span className="w-[224px] text-[14px] font-bold">
          その他、要望やこだわりは <br />
          ありますか？
        </span>
        <Form.Item className="!m-0 flex-1" name="other">
          <BasicTextArea
            className="bg-primary-light"
            placeholder="自由にご記入ください"
            style={{ height: '136px', resize: 'none' }}
          />
        </Form.Item>
      </div>
    </div>
  );
}

export default FormFutureHome;
