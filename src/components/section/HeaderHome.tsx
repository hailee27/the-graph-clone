import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
function HeaderHome() {
  // const [timeVideo, setTimeVideo] = useState<boolean>(false);
  // useEffect(() => {
  //   const countTimeVideo = setTimeout(() => {
  //     return setTimeVideo(true);
  //   }, 5000);

  //   return () => {
  //     return clearTimeout(countTimeVideo);
  //   };
  // }, []);
  const [hover1, setHover1] = useState<boolean>(false);
  const [hover2, setHover2] = useState<boolean>(false);

  return (
    <div
      className="overflow-hidden "
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, #0d0c22 , #0d0c22 , transparent)',
      }}
    >
      <Tilt
        perspective={800}
        reset={false}
        style={{ transformStyle: 'preserve-3d', position: 'relative', width: '100%', height: '100%' }}
        tiltMaxAngleX={4}
        tiltMaxAngleY={4}
        transitionSpeed={1000}
      >
        <div className="min-h-screen w-full h-full relative scale-110 ">
          <video autoPlay className="object-cover h-screen" height="1080" muted width="1920">
            <source src="https://thegraph.com/_next/static/media/hero.f472f960.mp4" type="video/mp4" />
          </video>
          {/* {!timeVideo ? (
            <video autoPlay height="100%" muted width="100%">
              <source src="https://thegraph.com/_next/static/media/hero.f472f960.mp4" type="video/mp4" />
            </video>
          ) : (
            <div className=" opacity-60 mt-[30px] absolute w-full h-full ">
              <img
                alt="image"
                className="object-cover w-full h-full"
                src="https://thegraph.com/_next/static/media/hero-end.0206e1f3.jpg"
              />
            </div>
          )} */}
        </div>
        <div
          className='top-0 absolute left-6 w-full h-full bg-cover bg-[url("https://thegraph.com/_next/static/media/stars-1.4112e2d0.png")]'
          style={{
            maskImage: 'url("https://thegraph.com/_next/static/media/stars-mask.236dffe5.png")',
            maskSize: '100% 100%',
            transform: 'translateZ(-240px) scale(1.2)',
          }}
        />
        <div
          className='top-0 -left-4 absolute w-full h-full bg-cover bg-[url("https://thegraph.com/_next/static/media/stars-2.a8294727.png")]'
          style={{
            maskImage: 'url("https://thegraph.com/_next/static/media/stars-mask.236dffe5.png")',
            maskSize: '100% 100%',
            transform: 'translateZ(100px) scale(1.2)',
          }}
        />
        <div
          className='top-0 absolute w-full h-full bg-cover bg-[url("https://thegraph.com/_next/static/media/stars-3.03346765.png")]'
          style={{
            maskImage: 'url("https://thegraph.com/_next/static/media/stars-mask.236dffe5.png")',
            maskSize: '100% 100%',
            transform: 'translateZ(80px ) scale(1.8)',
          }}
        />
        <div
          className="absolute top-0 w-full h-full z-30 text-black  flex items-center justify-center"
          style={{ transform: 'translateZ(140px) scale(0.8)' }}
        >
          <div className="flex flex-col">
            <div
              className={
                'xl:text-[96px] md:text-[64px] md:leading-[64px]   transition-all w-[1288px] md:h-[210px] h-[150px] text-[40px] leading-[40px] relative  text-textBright text-center font-semibold xl:leading-[96px]'
              }
            >
              <span
                className={`absolute w-full h-full  ${
                  !hover1 ? 'left-[45%] opacity-0' : 'left-[50%]'
                } translate-x-[-50%] transition-all text-[#6f4cffe0]`}
              >
                Discover thousands
                <br /> of open APIs
              </span>
              <span
                className={`absolute w-full h-full 
                 ${hover1 || hover2 ? 'left-[45%] opacity-0' : 'left-[50%] opacity-100'}
              
                  translate-x-[-50%]  transition-all`}
              >
                Access the world’s <br /> blockchain data
              </span>
              <span
                className={`absolute w-full h-full  ${
                  !hover2 ? 'left-[55%] opacity-0' : 'left-[50%]'
                } translate-x-[-50%] transition-all text-[#4c66ff]`}
              >
                Build unstoppable
                <br /> applications
              </span>
            </div>

            <div className="flex items-center justify-center space-x-[24px] md:mt-[80px] mt-0">
              <button
                className="h-[52px] rounded-[4px] px-[24px] bg-colorsWhite8 hover:bg-gradient-to-r hover:from-[#4C66FF] hover:to-[#8A4CFF] ']"
                onMouseEnter={() => {
                  return setHover1(true);
                }}
                onMouseLeave={() => {
                  return setHover1(false);
                }}
              >
                <span className="text-white text-[14px] leading-[52px] font-semibold">Explore Data</span>
              </button>
              <button
                className="h-[52px] rounded-[4px] px-[24px] bg-colorsWhite8 hover:bg-gradient-to-r hover:from-[#4C66FF] hover:to-[#8A4CFF] ']"
                onMouseEnter={() => {
                  return setHover2(true);
                }}
                onMouseLeave={() => {
                  return setHover2(false);
                }}
              >
                <span className="text-white text-[14px] leading-[52px] font-semibold">Get Started</span>
              </button>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
}

export default HeaderHome;
