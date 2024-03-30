import React, { useMemo, useState } from 'react';
import DropDown from '../../common/DropDown';
import Language from '../../common/DropDown/Language';
import Menu from '../../common/DropDown/Menu';
import { Link } from 'react-router-dom';

export interface TypeListItem {
  key: number;
  title: string;
  description: string;
  link: string;
}
function Header() {
  const [language, setLanguage] = useState<{ label: string; value: string }>({
    label: 'EN-English',
    value: 'en',
  });
  const onChange = (e: { label: string; value: string }) => {
    setLanguage(e);
  };
  const listProduct = useMemo<TypeListItem[]>(() => {
    return [
      {
        key: 1,
        title: 'Graph Explorer',
        description: 'Explore subgraphs and interact with the protocol.',
        link: 'https://www.youtube.com/watch?v=f0pZAZLDg68',
      },
      {
        key: 2,
        title: 'Subgraph Studio',
        description: 'Create, manage and publish subgraphs and API keys.',
        link: '/',
      },
      {
        key: 3,
        title: 'Hosted Service',
        description: 'Create and explore subgraphs on the hosted service.',
        link: '/',
      },
    ];
  }, []);

  return (
    <header className="h-[80px] md:px-0 px-[16px] flex items-center justify-center w-full bg-transparent  fixed top-0 z-[999]">
      <div className="flex w-[1288px] items-center justify-between ">
        <svg aria-hidden="true" className="w-[32px] pr-[8px]" fill="#fff" viewBox="0 0 16 16">
          <path
            clipRule="evenodd"
            d="M12.1462 10.5611C12.4236 10.8372 12.4488 11.2693 12.2219 11.5738L12.1462 11.661L9.02112 14.7722C8.716 15.0759 8.2214 15.0759 7.91629 14.7722C7.63891 14.496 7.6137 14.064 7.84064 13.7595L7.91629 13.6723L11.0414 10.5611C11.3465 10.2573 11.8411 10.2573 12.1462 10.5611ZM7.6875 1C10.2763 1 12.375 3.08934 12.375 5.66665C12.375 8.24396 10.2763 10.3333 7.6875 10.3333C5.09867 10.3333 3 8.24396 3 5.66665C3 3.08934 5.09867 1 7.6875 1ZM7.6875 2.55555C5.96165 2.55555 4.5625 3.94838 4.5625 5.66665C4.5625 7.38492 5.96165 8.77775 7.6875 8.77775C9.41345 8.77775 10.8125 7.38492 10.8125 5.66665C10.8125 3.94838 9.41345 2.55555 7.6875 2.55555ZM13.1563 1C13.5878 1 13.9375 1.34816 13.9375 1.77778C13.9375 2.20739 13.5878 2.55555 13.1563 2.55555C12.7248 2.55555 12.3751 2.20739 12.3751 1.77778C12.3751 1.34816 12.7248 1 13.1563 1Z"
            fillRule="evenodd"
          />
        </svg>
        <ul className="hidden space-x-[24px] items-center flex-1 md:flex ">
          <Link to="/">
            <li className="text-white64 cursor-pointer font-semibold hover:text-white text-[14px] flex items-center space-x-[14px]">
              <span>The Graph</span>
            </li>
          </Link>
          <li className=" cursor-pointer font-semibold text-[14px]">
            <DropDown position="right" title="Products">
              <Menu listItem={listProduct} />
            </DropDown>
          </li>
          <li className="text-white64 cursor-pointer font-semibold hover:text-white text-[14px]">Studio Pricing</li>
          <li className=" cursor-pointer font-semibold  text-[14px]">
            <DropDown position="right" title="Ecosystem">
              <Menu listItem={listProduct} />
            </DropDown>
          </li>
          <li className="text-white64 cursor-pointer font-semibold hover:text-white text-[14px]">Blog</li>
          <li className="text-white64 cursor-pointer font-semibold hover:text-white text-[14px]">Jobs</li>
          <li className="text-white64 cursor-pointer font-semibold hover:text-white text-[14px]">Docs</li>
        </ul>
        <div className="hidden md:block">
          <DropDown
            icon={
              <svg aria-hidden="true" className="w-[20px]" fill="#fff" focusable="false" viewBox="0 0 16 16">
                <path d="M8 1C5.71875 1 3.69408 2.10417 2.41504 3.8H2.4V3.81914C1.52497 4.98768 1 6.43227 1 8C1 11.8577 4.1423 15 8 15C11.8577 15 15 11.8577 15 8C15 4.1423 11.8577 1 8 1ZM10.1 2.80879C12.1546 3.63715 13.6 5.64285 13.6 8C13.6 9.42342 13.0696 10.7161 12.2 11.7023V10.8H10.1V8H5.9V6.6H7.3V4.5H10.1V2.80879ZM2.54492 6.74492L3.8 8L5.9 10.1V12.2H7.3V13.5521C4.53204 13.2088 2.4 10.8635 2.4 8C2.4 7.56753 2.45287 7.14882 2.54492 6.74492Z" />
              </svg>
            }
            title={language?.label.split('-')[1] ?? ''}
          >
            <Language onChange={onChange} value={language} />
          </DropDown>
        </div>
      </div>
    </header>
  );
}

export default Header;
