import React from 'react';

interface Props {
  title: string | JSX.Element;
  content: JSX.Element | string;
}

function CardFix(props: Props) {
  const { title, content } = props;
  return (
    <div className="w-[224px] flex flex-col h-[161px] border-2 border-primary rounded-[8px]">
      <div className="h-[63px] bg-primary  text-[20px] font-bold flex items-center justify-center">
        <span className="text-[#ffffff]">{title}</span>
      </div>
      <div className="flex items-center justify-center flex-1  ">{content}</div>
    </div>
  );
}

export default CardFix;
