import React from 'react';
import HeaderHome from '../../components/section/HeaderHome';
import CookieConsent from '../../components/section/CookieConsent';
import Feature from '../../components/section/Feature';
import BuildSubgraph from '../../components/section/BuildSubgraph';
import Web3 from '../../components/section/Web3';
import HowToUseSubgraph from '../../components/section/HowToUseSubgraph';
import Globally from '../../components/section/Globally';
import JoinTheEcosystem from '../../components/section/JoinTheEcosystem';
import LearnMore from '../../components/section/LearnMore';
import FooterHome from '../../components/section/FooterHome';

function HomePage() {
  return (
    <div className="w-full h-full pt-[30px]">
      <CookieConsent />
      <HeaderHome />
      <Feature />
      <BuildSubgraph />
      <Web3 />
      <HowToUseSubgraph />
      <Globally />
      <JoinTheEcosystem />
      <LearnMore />
      <FooterHome />
    </div>
  );
}

export default HomePage;
