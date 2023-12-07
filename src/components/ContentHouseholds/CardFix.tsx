import React from 'react';

interface Props {
  title: string | JSX.Element;
  content: JSX.Element | string;
  type?: number;
}

function CardFix(props: Props) {
  const { title, content, type } = props;
  if (type === 1) {
    return (
      <div className="w-[224px] flex flex-col h-[143px] border-2 border-[#888] rounded-[8px]">
        <div className="h-[48px] bg-[#888]  text-[18px] font-bold flex items-center justify-center">
          <span className="text-[#ffffff]">{title}</span>
        </div>
        <div className="flex items-center justify-center flex-1  ">{content}</div>
      </div>
    );
  }
  return (
    <div className="w-[224px] flex flex-col h-[161px] border-2 border-primary rounded-[8px]">
      <div className="h-[63px] bg-primary  text-[20px] font-bold flex items-center justify-center">
        <span className="text-[#ffffff]">{title}</span>
      </div>
      <div className="flex items-center justify-center flex-1  ">{content}</div>
    </div>
  );
}
CardFix.defaultProps = {
  type: undefined,
};
export default CardFix;
