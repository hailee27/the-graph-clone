/* eslint-disable max-lines-per-function */
import React from 'react';

function JoinTheEcosystem() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-white64 md:pb-[192px] pb-[96px] ">
      <div className="md:w-[1288px] w-full">
        <div className="flex items-center flex-col md:px-[182px] px-[16px] ">
          <h2 className="md:text-[48px] md:leading-[48px] text-[40px] leading-[40px] text-textBright font-semibold">
            Join the ecosystem
          </h2>
          <span className="md:text-[48px] md:leading-[48px] text-[40px] leading-[40px] text-white64 font-semibold">
            Transform the internet
          </span>
          <p className="md:text-[24px] text-[20px] md:text-center leading-[28px] mt-[32px]">
            The Graph ecosystem welcomes you — regardless of where you are in the world, what your level of technical
            expertise is, or your familiarity with blockchains. Learn about all the roles in which you can choose to
            participate!
          </p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-[32px] md:px-[128px] px-[16px] pt-[64px]">
          <div className="md:p-[40px_32px] w-full p-[40px_8px]  flex flex-col items-center group hover:bg-colorsWhite8 hover:border-colorsWhite8 bg-[#ffffff05] border-colorsWhite4 border rounded-[8px] cursor-pointer">
            <img
              alt=""
              className="h-[80px] w-[80px]"
              src="https://thegraph.com/_next/static/media/role-data-consumer.612f4d81.png"
            />
            <div className="my-[8px] relative h-[28px]">
              <span className="text-[20px] font-semibold leading-[20px] text-textBright">Data consumer</span>
              <span className="absolute top-[50%] translate-y-[-50%] group-hover:opacity-100 group-hover:pl-[8px] opacity-0 transition-all">
                <svg aria-hidden="true" className="w-[14px]" fill="#fff" focusable="false" viewBox="0 0 16 16">
                  <path
                    clipRule="evenodd"
                    d="M12.3612 7.52782L7.42059 2.66776L8.09941 2L13.8594 7.66612C14.0469 7.85052 14.0469 8.14948 13.8594 8.33388L8.09941 14L7.42059 13.3322L12.3612 8.47218H2V7.52782H12.3612Z"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <p className="text-[18px] text-center">Query an existing subgraph in your project</p>
          </div>
          <div className="md:p-[40px_32px] p-[40px_8px]  flex flex-col items-center group hover:bg-colorsWhite8 hover:border-colorsWhite8 bg-[#ffffff05] border-colorsWhite4 border rounded-[8px] cursor-pointer">
            <img
              alt=""
              className="h-[80px] w-[80px]"
              src="https://thegraph.com/_next/static/media/role-developer.21ec7998.png"
            />
            <div className="my-[8px] relative h-[28px]">
              <span className="text-[20px] font-semibold leading-[20px] text-textBright">Developer</span>
              <span className="absolute top-[50%] translate-y-[-50%] group-hover:opacity-100 group-hover:pl-[8px] opacity-0 transition-all">
                <svg aria-hidden="true" className="w-[14px]" fill="#fff" focusable="false" viewBox="0 0 16 16">
                  <path
                    clipRule="evenodd"
                    d="M12.3612 7.52782L7.42059 2.66776L8.09941 2L13.8594 7.66612C14.0469 7.85052 14.0469 8.14948 13.8594 8.33388L8.09941 14L7.42059 13.3322L12.3612 8.47218H2V7.52782H12.3612Z"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <p className="text-[18px] text-center">Create a subgraph to use in your dapp</p>
          </div>
          <div className="md:p-[40px_32px] p-[40px_8px]  flex flex-col items-center group hover:bg-colorsWhite8 hover:border-colorsWhite8 bg-[#ffffff05] border-colorsWhite4 border rounded-[8px] cursor-pointer">
            <img
              alt=""
              className="h-[80px] w-[80px]"
              src="https://thegraph.com/_next/static/media/role-indexer.c2a4dfb9.png"
            />
            <div className="my-[8px] relative h-[28px]">
              <span className="text-[20px] font-semibold leading-[20px] text-textBright">Indexer</span>
              <span className="absolute top-[50%] translate-y-[-50%] group-hover:opacity-100 group-hover:pl-[8px] opacity-0 transition-all">
                <svg aria-hidden="true" className="w-[14px]" fill="#fff" focusable="false" viewBox="0 0 16 16">
                  <path
                    clipRule="evenodd"
                    d="M12.3612 7.52782L7.42059 2.66776L8.09941 2L13.8594 7.66612C14.0469 7.85052 14.0469 8.14948 13.8594 8.33388L8.09941 14L7.42059 13.3322L12.3612 8.47218H2V7.52782H12.3612Z"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <p className="text-[18px] text-center">Index data & serve queries for subgraphs</p>
          </div>
          <div className="md:p-[40px_32px] p-[40px_8px]  flex flex-col items-center group hover:bg-colorsWhite8 hover:border-colorsWhite8 bg-[#ffffff05] border-colorsWhite4 border rounded-[8px] cursor-pointer">
            <img
              alt=""
              className="h-[80px] w-[80px]"
              src="https://thegraph.com/_next/static/media/role-delegator.1fc2ed68.png"
            />
            <div className="my-[8px] relative h-[28px]">
              <span className="text-[20px] font-semibold leading-[20px] text-textBright">Delegator</span>
              <span className="absolute top-[50%] translate-y-[-50%] group-hover:opacity-100 group-hover:pl-[8px] opacity-0 transition-all">
                <svg aria-hidden="true" className="w-[14px]" fill="#fff" focusable="false" viewBox="0 0 16 16">
                  <path
                    clipRule="evenodd"
                    d="M12.3612 7.52782L7.42059 2.66776L8.09941 2L13.8594 7.66612C14.0469 7.85052 14.0469 8.14948 13.8594 8.33388L8.09941 14L7.42059 13.3322L12.3612 8.47218H2V7.52782H12.3612Z"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <p className="text-[18px] text-center">Secure the network by supporting helpful Indexers</p>
          </div>
          <div className="md:p-[40px_32px] p-[40px_8px]  flex flex-col items-center group hover:bg-colorsWhite8 hover:border-colorsWhite8 bg-[#ffffff05] border-colorsWhite4 border rounded-[8px] cursor-pointer">
            <img
              alt=""
              className="h-[80px] w-[80px]"
              src="https://thegraph.com/_next/static/media/role-curator.2db9c22b.png"
            />
            <div className="my-[8px] relative h-[28px]">
              <span className="text-[20px] font-semibold leading-[20px] text-textBright">Curator</span>
              <span className="absolute top-[50%] translate-y-[-50%] group-hover:opacity-100 group-hover:pl-[8px] opacity-0 transition-all">
                <svg aria-hidden="true" className="w-[14px]" fill="#fff" focusable="false" viewBox="0 0 16 16">
                  <path
                    clipRule="evenodd"
                    d="M12.3612 7.52782L7.42059 2.66776L8.09941 2L13.8594 7.66612C14.0469 7.85052 14.0469 8.14948 13.8594 8.33388L8.09941 14L7.42059 13.3322L12.3612 8.47218H2V7.52782H12.3612Z"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <p className="text-[18px] text-center">Identify useful subgraphs to index</p>
          </div>
          <div className="md:p-[40px_32px] p-[40px_8px]  relative bg-cover flex flex-col items-center group hover:bg-colorsWhite8 hover:border-colorsWhite8 bg-[#ffffff05] border-colorsWhite4 border rounded-[8px] cursor-pointer">
            <div />
            <img
              alt=""
              className="absolute top-0 w-full h-full rounded-[8px] group-hover:opacity-100 group-  hover:grayscale-0 opacity-20 grayscale-[75%] "
              src="https://thegraph.com/_next/static/media/role-read-more.35360b19.jpg"
            />
            <div className="w-[80px] h-[80px]" />
            <div className="my-[8px] relative h-[28px] text-center">
              <span className="text-[20px] font-semibold leading-[20px] text-textBright">Read more</span>
              <span className="absolute top-[50%] translate-y-[-50%] group-hover:opacity-100 group-hover:pl-[8px] opacity-0 transition-all">
                <svg aria-hidden="true" className="w-[14px]" fill="#fff" focusable="false" viewBox="0 0 16 16">
                  <path
                    clipRule="evenodd"
                    d="M12.3612 7.52782L7.42059 2.66776L8.09941 2L13.8594 7.66612C14.0469 7.85052 14.0469 8.14948 13.8594 8.33388L8.09941 14L7.42059 13.3322L12.3612 8.47218H2V7.52782H12.3612Z"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
              <p className="text-[18px] text-center  ">23 Ways to Participate in The Graph Ecosystem</p>
            </div>
          </div>
        </div>
        <div className="h-full w-full md:pt-[192px] pt-[96px] cursor-pointer group md:block hidden ">
          <div className="md:mx-[128px]  mx-[16px] py-[48px]  shadow-[0_40px_120px_0px_#ffffff0a] relative ">
            <div
              className="absolute top-0 w-full h-full flex flex-wrap"
              style={{
                maskImage:
                  'radial-gradient(80% 70% at 50% 50%, rgba(0, 0, 0, calc(0.25 + 0* 0.25)) 50%, transparent 80%)',
              }}
            >
              <div className="w-1/2 h-1/2 relative overflow-hidden">
                <div
                  className="w-[200%] h-[200%] absolute top-0 left-0 transition-all translate-x-[calc((1_*_-1_+_1)*_-1*_80px)] translate-y-[calc((1_*_-1_+_1)*_-1*_80px)]  group-hover:translate-x-[calc((0_*_-1_+_1)*_-1*_80px)] group-hover:translate-y-[calc((0_*_-1_+_1)*_-1*_80px)]"
                  style={{}}
                >
                  <img alt="" src="https://thegraph.com/_next/static/media/roadmap-bg.d0989dce.jpg" />
                </div>
              </div>
              <div className="w-1/2 h-1/2 relative overflow-hidden">
                <div className="w-[200%] h-[200%] top-0 right-0 absolute transition-all translate-x-[calc((1_*_-1_+_1)*_-1*_80px)] translate-y-[calc((1_*_-1_+_1)*_1*_80px)]  group-hover:translate-x-[calc((0_*_-1_+_1)*_1*_80px)] group-hover:translate-y-[calc((0_*_-1_+_1)*_-1*_80px)]">
                  <img alt="" src="https://thegraph.com/_next/static/media/roadmap-bg.d0989dce.jpg" />
                </div>
              </div>
              <div className="w-1/2 h-1/2 relative overflow-hidden">
                <div className="w-[200%] h-[200%] absolute bottom-0 left-0 transition-all translate-x-[calc((1_*_-1_+_1)*_1*_80px)] translate-y-[calc((-1_*_-1_+_1)*_-1*_90px)]  group-hover:translate-x-[calc((0_*_-1_+_1)*_-1*_80px)] group-hover:translate-y-[calc((0_*_-1_+_1)*_-1*_80px)]">
                  <img
                    alt=""
                    className="object-cover"
                    src="https://thegraph.com/_next/static/media/roadmap-bg.d0989dce.jpg"
                  />
                </div>
              </div>
              <div className="w-1/2 h-1/2 relative overflow-hidden">
                <div className="w-[200%] h-[200%] absolute bottom-0 right-0 transition-all translate-x-[calc((1_*_-1_+_1)*_1*_80px)] translate-y-[calc((-1_*_-1_+_1)*_-1*_90px)]  group-hover:translate-x-[calc((0_*_-1_+_1)*_1*_80px)] group-hover:translate-y-[calc((0_*_-1_+_1)*_-1*_80px)] ">
                  <img alt="" src="https://thegraph.com/_next/static/media/roadmap-bg.d0989dce.jpg" />
                </div>
              </div>
            </div>

            <div className="md:flex flex-col items-center hidden">
              <span className="text-[24px] text-white">A new era is upon us</span>
              <span className="text-[48px] font-semibold text-white">The Graph Roadmap</span>
            </div>
            <div className="h-[194px] w-full flex p-[16px_34px] justify-between ">
              <div className="w-full h-[64px]  flex items-end justify-end relative">
                <div className="h-1/2 w-1/2 border-t border-white border-l flex items-end justify-end relative" />
                <div className="absolute left-[50%] translate-x-[-50%]  flex flex-col items-center w-[122px] h-[98px] -bottom-[112px]">
                  <img alt="" className="w-[48px]" src="./images/svgexport-26.svg" />
                  <div className="text-center text-[14px]">World of Data Services</div>
                </div>
              </div>
              <div className="w-full h-[64px] flex items-end relative">
                <div className="h-1/2 w-1/2 border-t border-white border-r flex items-end justify-end" />
                <div className="h-1/2 w-1/2 border-t border-white  flex items-end justify-end" />
                <div className="absolute left-[50%] translate-x-[-50%]  flex flex-col items-center w-[122px] h-[98px] -bottom-[112px]">
                  <img alt="" className="w-[48px]" src="./images/svgexport-27.svg" />
                  <div className="text-center text-[14px]">Developer Empowerment</div>
                </div>
              </div>

              <div className="w-full h-[64px] flex items-end relative">
                <div className="h-full w-1/2 border-white border-r flex items-end justify-end">
                  <div className="h-1/2 w-full border-t border-white  flex items-end justify-end" />
                </div>
                <div className="h-1/2 w-1/2 border-t border-white  flex items-end justify-end" />
                <div className="absolute left-[50%] translate-x-[-50%] flex flex-col items-center w-[122px] h-[98px] -bottom-[112px]">
                  <img alt="" className="w-[48px]" src="./images/svgexport-28.svg" />
                  <div className="text-center text-[14px]">Optimized Indexer Performance</div>
                </div>
              </div>
              <div className="w-full h-[64px] flex items-end relative">
                <div className="h-1/2 w-1/2 border-t border-white border-r flex items-end justify-end" />
                <div className="h-1/2 w-1/2 border-t border-white   flex items-end justify-end" />
                <div className="absolute left-[50%] translate-x-[-50%] flex flex-col items-center w-[122px] h-[98px] -bottom-[112px]">
                  <img alt="" className="w-[48px]" src="./images/svgexport-28.svg" />
                  <div className="text-center text-[14px]">Interconnected Graph of Data</div>
                </div>
              </div>
              <div className="w-full h-[64px] flex items-end relative">
                <div className="h-1/2 w-1/2 border-t border-white border-r flex items-end justify-end" />
                <div className="absolute left-[50%] translate-x-[-50%] flex flex-col items-center w-[122px] h-[98px] -bottom-[112px]">
                  <img alt="" className="w-[48px]" src="./images/svgexport-29.svg" />
                  <div className="text-center text-[14px]">Protocol Evolution & Resiliency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinTheEcosystem;
