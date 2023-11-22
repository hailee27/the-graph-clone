import React from 'react';
import { TypeTemplate } from './type';
import SelectButton from '../SelectButton';
import { Form, Image } from 'antd';

function TemplateCard(props: TypeTemplate & { type?: 'primary' | 'secondary' }) {
  const { title, content, image, type, name } = props;
  return (
    <div
      className={'pl-[72px]  rounded-[16px] h-full relative'}
      style={{
        background:
          type === 'primary'
            ? 'linear-gradient(0deg, rgba(44, 141, 39, 0.15) 0%, rgba(44, 141, 39, 0.15) 100%), #FFF'
            : 'linear-gradient(0deg, rgba(255, 119, 21, 0.15) 0%, rgba(255, 119, 21, 0.15) 100%), #FFF',
      }}
    >
      <div className=" py-[72px]  flex flex-col space-y-[48px]">
        <span className="font-bold text-[40px] leading-[60px]">{title}</span>
        <div className="flex flex-col space-y-[16px]">
          {content?.map((e) => (
            <div className="flex items-center space-x-[16px]" key={e.id}>
              <Form.Item initialValue={'1'} name={[`${name}`, `${name}${e.id}`]} noStyle>
                <SelectButton
                  className="!w-[48px] !h-[32px]"
                  // defaultValue={'1'}
                  dropdownStyle={{ padding: '0' }}
                  options={e.items}
                  size="small"
                  suffixIcon={
                    <svg fill="none" height="4" viewBox="0 0 6 4" width="6" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3.4932 3.28813C3.25459 3.63254 2.74541 3.63254 2.5068 3.28813L1.05435 1.1917C0.778663 0.793775 1.06346 0.25 1.54755 0.25L4.45245 0.25C4.93654 0.25 5.22134 0.793776 4.94565 1.1917L3.4932 3.28813Z"
                        fill="#888888"
                      />
                    </svg>
                  }
                />
              </Form.Item>
              <div className="text-[18px] font-bold whitespace-nowrap ">{e.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[508px] h-full absolute top-0  right-0 pt-[32px] bo  rounded-tl-[80px] rounded-br-[16px] ">
        <Image height="100%" preview={false} src={image} width="100%" />
      </div>
    </div>
  );
}
TemplateCard.defaultProps = {
  type: 'primary',
};
export default TemplateCard;
