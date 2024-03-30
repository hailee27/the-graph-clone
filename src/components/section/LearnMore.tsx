import React from 'react';

const Card = ({ icon, title, description }: { icon: string; title: string; description: string }) => {
  return (
    <div className="bg-[#ffffff05] group hover:bg-[#ffffff14] hover:border-colorsWhite8 cursor-pointer  p-[16px] pr-[46px] flex items-center space-x-[16px] border border-colorsWhite4 rounded-[4px]">
      <div className="w-[64px]  ml-[-8px] h-[64px]">
        <img alt="" className="h-full w-full" src={icon} />
      </div>
      <div className="flex flex-col max-[64px] flex-1 justify-center w-full h-full items-start">
        <div className="relative">
          <span className="text-[18px] text-white">{title}</span>
          <div className="absolute top-2 -right-6 flex items-center opacity-0 group-hover:opacity-100 transition-all cursor-pointer">
            <svg aria-hidden="true" className="w-[16px]" fill="#fff" focusable="false" viewBox="0 0 16 16">
              <path
                clipRule="evenodd"
                d="M12.3612 7.52782L7.42059 2.66776L8.09941 2L13.8594 7.66612C14.0469 7.85052 14.0469 8.14948 13.8594 8.33388L8.09941 14L7.42059 13.3322L12.3612 8.47218H2V7.52782H12.3612Z"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <span className="text-[12px] text-white64">{description}</span>
      </div>
    </div>
  );
};
function LearnMore() {
  return (
    <div className="w-full flex items-center justify-center text-white64">
      <div className="w-[1288px] md:px-[64px] px-[16px]">
        <div className="w-full">
          <h2 className="text-[48px] font-semibold text-textBright">Learn more</h2>
          <p className="text-[24px] leading-[24px] mt-[32px] md:w-[1160px]">
            The Graph enables innovators of all backgrounds to plug into a collaborative ecosystem. Learn more about how
            The Graph community can serve you.
          </p>
        </div>
        <div className="grid md:grid-cols-3 md:pt-0 pt-[32px] gap-[32px] ">
          <div className="flex flex-col space-y-[16px] h-full justify-between">
            <span className="text-[12px] font-medium text-textBright">BLOG</span>
            <Card
              description="The Graph Foundation · 6 minute read"
              icon="https://thegraph.com/_next/static/media/blog-intro-to-web3.72ed0790.jpg"
              title="Intro to web3 and The Graph"
            />
            <Card
              description="Brandon Ramirez · 7 minute read"
              icon="https://thegraph.com/_next/static/media/blog-graph-network.68d5832b.jpg"
              title="The Graph Network In Depth"
            />
            <Card
              description="The Graph Foundation · 11 minute read"
              icon="https://thegraph.com/_next/static/media/blog-roadmap.2859254d.jpg"
              title="The Graph R&D Roadmap"
            />
            <div className=" flex items-center space-x-2 hover:space-x-3 transition-all cursor-pointer">
              <span className="text-[16px] hover:text-textBright">View all networks</span>
              <svg aria-hidden="true" className="w-[14px]" fill="#fff" focusable="false" viewBox="0 0 16 16">
                <path
                  clipRule="evenodd"
                  d="M12.3612 7.52782L7.42059 2.66776L8.09941 2L13.8594 7.66612C14.0469 7.85052 14.0469 8.14948 13.8594 8.33388L8.09941 14L7.42059 13.3322L12.3612 8.47218H2V7.52782H12.3612Z"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col space-y-[16px] h-full justify-between">
            <span className="text-[12px] font-medium text-textBright">DOCS</span>
            <Card
              description="3 minute read"
              icon="https://thegraph.com/_next/static/media/docs-about.517a464b.svg"
              title="About The Graph"
            />
            <Card
              description="4 minute read"
              icon="https://thegraph.com/_next/static/media/docs-quick-start.39193871.svg"
              title="Subgraph Quick Start"
            />
            <Card
              description="1 minute read"
              icon="https://thegraph.com/_next/static/media/docs-query.a719688e.svg"
              title="How to Query Subgraphs"
            />
            <div className=" flex items-center space-x-2 hover:space-x-3 transition-all cursor-pointer">
              <span className="text-[16px] hover:text-textBright">Go to docs</span>
              <svg aria-hidden="true" className="w-[14px]" fill="#fff" focusable="false" viewBox="0 0 16 16">
                <path
                  clipRule="evenodd"
                  d="M12.3612 7.52782L7.42059 2.66776L8.09941 2L13.8594 7.66612C14.0469 7.85052 14.0469 8.14948 13.8594 8.33388L8.09941 14L7.42059 13.3322L12.3612 8.47218H2V7.52782H12.3612Z"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col space-y-[16px] justify-between">
            <span className="text-[12px] font-medium text-textBright">VIDEOS</span>
            <Card
              description="2m 30s"
              icon="https://thegraph.com/_next/static/media/video-play.9eba406e.svg"
              title="How to Delegate GRT"
            />
            <Card
              description="38m 38s"
              icon="https://thegraph.com/_next/static/media/video-play.9eba406e.svg"
              title="Quarterly Participant Update"
            />
            <Card
              description="12m 47s"
              icon="https://thegraph.com/_next/static/media/video-play.9eba406e.svg"
              title="How to Migrate a Subgraph"
            />
            <div className=" flex items-center space-x-2 hover:space-x-3 transition-all cursor-pointer">
              <span className="text-[16px] hover:text-textBright">View all videos</span>
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

export default LearnMore;
