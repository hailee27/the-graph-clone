import React from 'react';

function Globally() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-white64 md:pb-[192px] pb-[96px] relative">
      <div className=" w-full h-full z-[-2]  translate-x-[-50%] opacity-60  left-[50%] absolute bg-[url('https://thegraph.com/_next/static/media/blur-2.22e01a15.jpg')]" />
      <div className="md:w-[1288px] w-full relative">
        <div className="flex items-center flex-col md:px-[182px] px-[16px] ">
          <h2 className="md:text-[64px] md:leading-[64px] text-[48px] leading-[48px] text-textBright font-semibold">
            Globally distributed
          </h2>
          <span className="md:text-[64px] md:leading-[64px] text-[48px] leading-[48px] text-white64 font-semibold">
            Decentralized infrastructure
          </span>
          <p className="md:text-[24px] text-[20px] md:text-center text-left leading-[28px] mt-[32px]">
            What makes The Graph so resilient? Enter The Graph Network, a decentralized data market powered by
            distributed participants: Indexers, Curators, Delegators, and Subgraph Developers.
          </p>
        </div>
      </div>
      <div className="md:w-[1288px] w-screen mt-[32px]">
        <img alt="" className="w-full" src="./images/map.svg" />
      </div>
    </div>
  );
}

export default Globally;
