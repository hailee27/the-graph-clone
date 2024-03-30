import React from 'react';

function CardHover({ children, title }: { children: JSX.Element | string; title: string }) {
  //   const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      className="group  cursor-pointer min-w-[160px] min-h-[160px] "
      //   onMouseEnter={() => {
      //     return setHover(true);
      //   }}
      //   onMouseLeave={() => {
      //     return setHover(false);
      //   }}
    >
      <div className="md:w-[136px] md:h-[136px] w-[160px] h-[160px] group-hover:shadow-[0px_0px_0px_8px_#333141] group-hover:border-[#333141] group-hover:bg-[#333141] border-colorsWhite16 rounded-[8px] p-[8px] border bg-colorsWhite8 transition-all">
        {children}
      </div>

      <div className="mt-[12px] text-center relative h-[21px]">
        <span className="text-[14px]">{title}</span>

        <span className="absolute top-[60%] translate-y-[-50%] group-hover:opacity-100 group-hover:pl-[8px] opacity-0 transition-all">
          <svg aria-hidden="true" className="w-[14px]" fill="#fff" focusable="false" viewBox="0 0 16 16">
            <path
              clipRule="evenodd"
              d="M12.3612 7.52782L7.42059 2.66776L8.09941 2L13.8594 7.66612C14.0469 7.85052 14.0469 8.14948 13.8594 8.33388L8.09941 14L7.42059 13.3322L12.3612 8.47218H2V7.52782H12.3612Z"
              fillRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default CardHover;
