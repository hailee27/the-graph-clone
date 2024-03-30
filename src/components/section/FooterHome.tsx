import React from 'react';

function FooterHome() {
  return (
    <div className="w-full relative md:mb-[-210px] mb-[-300px] ">
      <div className="w-full ">
        <video
          autoPlay
          className="!w-full min-h-[600px] object-cover"
          loop
          muted
          style={{ maskImage: 'linear-gradient(to bottom, transparent, black 50%, transparent)' }}
        >
          <source src="https://thegraph.com/_next/static/media/footer.04cca2ee.mp4" />
        </video>
      </div>
      <div className="text-white absolute w-full h-full  top-0  flex items-center justify-center flex-col space-y-[32px]     ">
        <svg aria-hidden="true" className="w-[64px]" fill="#ffffff" focusable="false" viewBox="0 0 16 16">
          <path
            clipRule="evenodd"
            d="M12.1462 10.5611C12.4236 10.8372 12.4488 11.2693 12.2219 11.5738L12.1462 11.661L9.02112 14.7722C8.716 15.0759 8.2214 15.0759 7.91629 14.7722C7.63891 14.496 7.6137 14.064 7.84064 13.7595L7.91629 13.6723L11.0414 10.5611C11.3465 10.2573 11.8411 10.2573 12.1462 10.5611ZM7.6875 1C10.2763 1 12.375 3.08934 12.375 5.66665C12.375 8.24396 10.2763 10.3333 7.6875 10.3333C5.09867 10.3333 3 8.24396 3 5.66665C3 3.08934 5.09867 1 7.6875 1ZM7.6875 2.55555C5.96165 2.55555 4.5625 3.94838 4.5625 5.66665C4.5625 7.38492 5.96165 8.77775 7.6875 8.77775C9.41345 8.77775 10.8125 7.38492 10.8125 5.66665C10.8125 3.94838 9.41345 2.55555 7.6875 2.55555ZM13.1563 1C13.5878 1 13.9375 1.34816 13.9375 1.77778C13.9375 2.20739 13.5878 2.55555 13.1563 2.55555C12.7248 2.55555 12.3751 2.20739 12.3751 1.77778C12.3751 1.34816 12.7248 1 13.1563 1Z"
            fill="#FFFFFF"
            fillOpacity="0.88"
            fillRule="evenodd"
          />
        </svg>
        <span className="text-[18px] font-semibold">The Graph</span>
      </div>
    </div>
  );
}

export default FooterHome;
