import React from 'react';
import Header from './Header';

function PrimaryLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-tertiary-thin min-h-screen flex flex-col text-primary-text  items-center ">
      <div className="max-w-[1440px] w-full px-[48px]">
        <Header />
        <div className="min-h-[calc(100vh_-_68px)] flex justify-center  w-full">{children}</div>
      </div>
    </main>
  );
}

export default PrimaryLayout;
