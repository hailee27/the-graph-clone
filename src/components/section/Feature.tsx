import React from 'react';

function Feature() {
  return (
    <>
      <div className="md:py-[192px] py-[96px] md:px-[64px] px-[16px] w-full flex items-center justify-center">
        <div className="flex flex-col md:flex-row space-x-0 md:space-y-0 space-y-[48px]  items-center justify-center w-[1288px] md:space-x-[58px]">
          <div>
            <div className="text-[32px] leading-[32px] font-semibold flex flex-col">
              <span className="text-textBright">Build faster</span>
              <span className="text-white64">100% less servers</span>
            </div>
            <p className="text-[24px] text-white64 pt-[20px]">
              Create groundbreaking applications without needing to run your own data server, build indexing
              infrastructure, or parse through raw data.
            </p>
          </div>
          <div>
            <div className="text-[32px] leading-[32px] font-semibold flex flex-col">
              <span className="text-textBright">Spend less</span>
              <span className="text-white64">60-98% less per month</span>
            </div>
            <p className="text-[24px] text-white64 pt-[20px]">
              Cut down on costs and time spent running expensive infrastructure by tapping into The Graph’s competitive
              data market.
            </p>
          </div>
          <div>
            <div className="text-[32px] leading-[32px] font-semibold flex flex-col">
              <span className="text-textBright">Increase resilience</span>
              <span className="text-white64">99.99%+ uptime</span>
            </div>
            <p className="text-[24px] text-white64 pt-[20px]">
              Ensure your application’s uptime and keep its data flowing 24/7 with a globally distributed network of
              contributors.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="max-w-[1288px] w-full flex items-center">
          <svg aria-hidden="true" className="w-[8px]" fill="#fff" focusable="false" viewBox="0 0 16 16">
            <path
              clipRule="evenodd"
              d="M7.64645 1.64645C7.84171 1.45118 8.15829 1.45118 8.35355 1.64645L14.3536 7.64645C14.5488 7.84171 14.5488 8.15829 14.3536 8.35355L8.35355 14.3536C8.15829 14.5488 7.84171 14.5488 7.64645 14.3536L1.64645 8.35355C1.45118 8.15829 1.45118 7.84171 1.64645 7.64645L7.64645 1.64645ZM2.70711 8L8 13.2929L13.2929 8L8 2.70711L2.70711 8Z"
              fillRule="evenodd"
            />
          </svg>
          <hr className="border-white64 flex-1" />
          <svg aria-hidden="true" className="w-[8px]" fill="#fff" focusable="false" viewBox="0 0 16 16">
            <path
              clipRule="evenodd"
              d="M7.64645 1.64645C7.84171 1.45118 8.15829 1.45118 8.35355 1.64645L14.3536 7.64645C14.5488 7.84171 14.5488 8.15829 14.3536 8.35355L8.35355 14.3536C8.15829 14.5488 7.84171 14.5488 7.64645 14.3536L1.64645 8.35355C1.45118 8.15829 1.45118 7.84171 1.64645 7.64645L7.64645 1.64645ZM2.70711 8L8 13.2929L13.2929 8L8 2.70711L2.70711 8Z"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Feature;
