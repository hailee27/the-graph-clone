import React from 'react';
import Header from './Header';
import Footer from './Footer';

function PrimaryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-screen w-full bg-[#0f0f25] relative">
      <Header />
      <main className="w-full bg-[#0f0f25] ">{children}</main>
      <Footer />
    </div>
  );
}

export default PrimaryLayout;
