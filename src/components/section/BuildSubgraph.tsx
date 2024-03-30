import React from 'react';

function BuildSubgraph() {
  return (
    <div className="w-full flex md:py-[192px] py-[96px] items-center justify-center">
      <div className="w-[1288px] flex md:flex-row flex-col items-center space-y-[32px] md:space-y-0 space-x-0 md:space-x-[32px] ">
        <div className="relative md:w-[500px] w-screen  h-[572px]">
          <div
            className="w-[64.0719%] flex items-center justify-center absolute top-0 mx-auto left-[50%] translate-x-[-50%] z-10 "
            style={{
              backgroundImage: "url('https://thegraph.com/_next/static/media/stack-uis.62b502ee.png')",
              backgroundSize: '100% 100%',
              aspectRatio: '642 / 392',
            }}
          >
            <span className="text-textBright font-semibold md:text-[24px] text-[22px] mt-[11.5%]">UIs</span>
          </div>
          <div
            className="w-[72.0558882235529%] flex items-center justify-center absolute bottom-[46.85%] left-[50%] translate-x-[-50%] mx-auto"
            style={{
              backgroundImage: "url('https://thegraph.com/_next/static/media/stack-subgraphs.8d3cb03f.png')",
              backgroundSize: '100% 100%',
              aspectRatio: '722 / 442',
            }}
          >
            <span className="text-textBright font-semibold md:text-[24px] text-[22px] mt-[15%]">Subgraphs</span>
          </div>
          <div
            className="w-[64.0719%] flex items-center justify-center absolute bottom-[32.34%] mx-auto left-[50%] translate-x-[-50%]"
            style={{
              backgroundImage: "url('https://thegraph.com/_next/static/media/stack-uis.62b502ee.png')",
              backgroundSize: '100% 100%',
              aspectRatio: '642 / 392',
            }}
          >
            <span className="text-textBright font-semibold md:text-[24px] text-[22px] mt-[22%]">Smart contracts</span>
          </div>
          <div
            className="w-full flex items-center justify-center absolute bottom-0"
            style={{
              backgroundImage: "url('https://thegraph.com/_next/static/media/stack-blockchains.05da8097.png')",
              backgroundSize: '100% 100%',
              aspectRatio: '1002 / 458',
            }}
          >
            <span className="text-textBright font-semibold md:text-[24px] text-[22px] mb-[11.5%]">Blockchains</span>
          </div>
        </div>
        <div className="flex-1 md:px-[0] px-[16px]">
          <span className="md:text-[48px] text-[40px] md:leading-[48px] leading-[40px] font-semibold text-textBright">
            Subgraphs <br />
            <span className="text-white64">
              Industry-standard data <br /> access
            </span>
          </span>
          <p className="mt-[24px] md:text-[24px] text-[20px] text-white64">
            Subgraphs are open APIs on The Graph that organize and serve blockchain data to applications. Using
            subgraphs, developers and data consumers alike benefit from speedy access to indexed data.
          </p>
          <div className="md:mt-[64px] mt-[32px] flex space-x-9 ">
            <button className="bg-[#6546e6]  rounded-[4px] px-[24px] h-[48px] hover:bg-opacity-70">
              <span className="text-[14px] font-semibold text-textBright"> Build a Subgraph</span>
            </button>
            <div className="flex flex-1 items-center space-x-2 cursor-pointer text-[14px] font-semibold">
              <span className="text-white64 hover:text-textBright">Learn More</span>
              <svg aria-hidden="true" className="w-[14px]" fill="#fff" focusable="false" viewBox="0 0 16 16">
                <path
                  clipRule="evenodd"
                  d="M12.3612 7.52782L7.42059 2.66776L8.09941 2L13.8594 7.66612C14.0469 7.85052 14.0469 8.14948 13.8594 8.33388L8.09941 14L7.42059 13.3322L12.3612 8.47218H2V7.52782H12.3612Z"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuildSubgraph;
