import React from 'react';
import { TypeListItem } from '../../layout/PrimaryLayout/Header';
import { Link } from 'react-router-dom';

function Menu({ listItem }: { listItem: TypeListItem[] }) {
  return (
    <div className="w-[434px]  bg-colorsPanes rounded-[4px] border border-colorsWhite4 ">
      {listItem.map((e) => {
        return (
          <Link key={e.key} to={e.link}>
            <div className="p-[24px_24px_24px_46px] space-y-1 h-[94px]  flex flex-col text-white64 border-b border-colorsWhite4 last:border-none  hover:text-textBright hover:bg-colorsWhite4">
              <span className="font-semibold text-[14px] ">{e.title}</span>
              <span className="text-[13px] font-normal">{e.description}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Menu;
