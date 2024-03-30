import React from 'react';

function HowToUseSubgraph() {
  return (
    <div className="w-full md:py-[192px] py-[96px] flex items-center justify-center text-white64">
      <div className="w-[1288px]">
        <div className="flex items-center flex-col md:px-[182px] px-[16px]">
          <h2 className="md:text-[64px] md:leading-[64px] text-[48px] leading-[48px] text-textBright font-semibold">
            How to use a subgraph
          </h2>
          <p className="md:text-[24px] text-[20px] md:text-center leading-[28px] mt-[32px]">
            With The Graph, it’s easy to access blockchain data using subgraphs and GraphQL queries. Join a growing
            number of trailblazers creating fast, responsive applications with data that loads in milliseconds.
          </p>
        </div>
        <div className="px-[32px]">
          <div className="w-full  flex md:flex-row flex-col shadow-[0px_0px_0px_16px_#333141] rounded-[8px] mt-[64px]">
            <div className="flex-1 flex md:block flex-col items-center justify-center group hover:bg-[#110f22] bg-[#0c0a1d] rounded-l-[16px] py-[64px] px-[32px] md:py-[96px] md:p-[96px_min(-46.9px_+_8.2vw,_48px)_96px_min(-46.9px_+_8.2vw,_64px)] cursor-pointer">
              <div className="flex flex-col md:items-start items-center">
                <span className="text-[12px] font-semibold">STEP&ensp;1</span>
                <span className="text-textBright my-[8px] text-[24px] font-semibold">Discover</span>
                <p className="text-[18px] md:text-left text-center font-medium tracking-tight">
                  Create a subgraph to organize smart contract data, or use an existing one.
                </p>
              </div>
              <img
                alt=""
                className="w-[232px] h-[232px] my-[32px]"
                src="https://thegraph.com/_next/static/media/how-subgraph.572dfc2e.png"
              />
              <div className="mt-[12px] relative h-[21px]">
                <span className="text-[16px] group-hover:text-textBright">View the subgraph</span>
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
            <div className="flex-1 flex md:block items-center flex-col group md:border-x-4 border-y-2 border-[#333141] hover:bg-[#110f22] bg-[#0c0a1d] py-[64px] px-[32px] md:py-[96px] md:p-[96px_min(-46.9px_+_8.2vw,_48px)_96px_min(-46.9px_+_8.2vw,_64px)] cursor-pointer">
              <div className="flex flex-col md:items-start items-center">
                <span className="text-[12px] font-semibold">STEP&ensp;2</span>
                <span className="text-textBright my-[8px] text-[24px] font-semibold">Query</span>
                <p className="text-[18px] font-medium md:text-left text-center tracking-tight">
                  Easily access organized data with simple GraphQL queries.
                </p>
              </div>
              <div className="w-[232px] h-[232px] my-[32px] !font-SpaceMono ">
                <span className="text-white">{'{'}</span>
                <div className="text-[#66d8ff]">
                  &emsp;&emsp;
                  <span className="text-white">
                    <span className="text-[#66d8ff]">pools&ensp;</span>
                    {'('}
                    <span className="text-[#4bca81] tracking-wide">first</span>:{' '}
                    <span className="text-[#A48DFF]">10</span>
                    {')'}&ensp;
                    {'{'}
                  </span>
                  <div className="pl-[52px]">
                    address <br /> annualPercentageReturn
                    <br /> utilizationRate
                    <br /> netSize
                    <br /> netSizeInUsd <br /> pairName
                  </div>
                  <div className="text-white"> &emsp;&emsp;{'}'}</div>
                  <div className="text-white">&emsp;{'}'}</div>
                </div>
              </div>

              <div className="mt-[12px] relative h-[21px]">
                <span className="text-[16px] group-hover:text-textBright">View the subgraph</span>
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
            <div className="flex-1 group hover:bg-[#110f22] bg-[#0c0a1d] rounded-l-[16px] py-[64px] px-[32px] md:py-[96px] md:p-[96px_min(-46.9px_+_8.2vw,_48px)_96px_min(-46.9px_+_8.2vw,_64px)] cursor-pointer">
              <div className="flex flex-col">
                <span className="text-[12px] font-semibold">STEP&ensp;3</span>
                <span className="text-textBright my-[8px] text-[24px] font-semibold">Discover</span>
                <p className="text-[18px] font-medium">
                  Create a subgraph to organize smart contract data, or use an existing one.
                </p>
              </div>
              <img
                alt=""
                className=" my-[32px]"
                src="https://thegraph.com/_next/static/media/how-screenshot.06c10278.png"
              />
              <div className="mt-[12px] relative h-[21px]">
                <span className="text-[16px] group-hover:text-textBright">View the subgraph</span>
                <span className="absolute top-[40%] translate-y-[-50%] group-hover:opacity-100 group-hover:pt-0 pl-[8px] pt-[10px] opacity-0 transition-all">
                  <svg aria-hidden="true" className="w-[14px]" fill="#fff" focusable="false" viewBox="0 0 16 16">
                    <path
                      clipRule="evenodd"
                      d="M10.75 4.5823L3.81988 4.63924L3.82771 3.68707L11.9072 3.62068C12.1701 3.61852 12.3815 3.82992 12.3794 4.09286L12.313 12.1723L11.3608 12.1802L11.4177 5.25006L4.09129 12.5765L3.42353 11.9088L10.75 4.5823Z"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToUseSubgraph;
