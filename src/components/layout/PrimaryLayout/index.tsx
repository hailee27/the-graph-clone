import React from 'react';
import Header from './Header';

function PrimaryLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-tertiary-thin min-h-screen flex flex-col">
      <Header />
      <div className="h-[calc(100vh_-_68px)]">{children}</div>
    </main>
  );
}

export default PrimaryLayout;
