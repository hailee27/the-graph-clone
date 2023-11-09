import React, { useEffect, useMemo, useState } from 'react';
interface TypeTabItems {
  key: string;
  label: string;
  children: string | JSX.Element;
  colorBgActive?: string;
}
function Tab({ items, defaultValue }: { items: TypeTabItems[]; defaultValue?: string | undefined }) {
  const [selectTab, setSelectedTab] = useState<string | undefined>(defaultValue);

  useEffect(() => {
    setSelectedTab(defaultValue);
  }, [defaultValue]);
  const data = useMemo(() => items, [items]);

  return (
    <>
      {items && (
        <div className="h-[77px]  flex space-x-[8px] items-end">
          {data.map((item) =>
            item.colorBgActive ? (
              <div
                className={`${selectTab === item.key ? 'bg-secondary h-full' : 'bg-tertiary-light h-[61px]'} 
                px-[32px] py-[10px] w-[352px] cursor-pointer rounded-t-[16px] flex items-center justify-center`}
                key={item.key}
                onClick={() => setSelectedTab(item?.key)}
              >
                <span className="text-[18px] font-bold text-[#ffffff]">{item.label}</span>
              </div>
            ) : (
              <div
                className={`${selectTab === item.key ? 'bg-primary h-full' : 'bg-tertiary-light h-[61px]'} 
                px-[32px] py-[10px] w-[352px] cursor-pointer rounded-t-[16px] flex items-center justify-center`}
                key={item.key}
                onClick={() => setSelectedTab(item?.key)}
              >
                <span className="text-[18px] font-bold text-[#ffffff]">{item.label}</span>
              </div>
            )
          )}
        </div>
      )}
      {data.map((e) => (
        <div className={`${e.key === selectTab ? '' : 'hidden'}`} key={e.key}>
          {e.children}
        </div>
      ))}
    </>
  );
}

export default Tab;
