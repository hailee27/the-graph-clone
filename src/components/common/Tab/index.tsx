import React, { useEffect, useState } from 'react';
interface TypeTabItems {
  key: string;
  label: string;
  children: string | JSX.Element;
}
function Tab({ items, defaultValue }: { items: TypeTabItems[]; defaultValue?: string | undefined }) {
  const [selectTab, setSelectedTab] = useState<string | undefined>(defaultValue);
  useEffect(() => {
    setSelectedTab(defaultValue);
  }, [defaultValue]);

  return (
    <>
      {items && (
        <div className="h-[77px]  flex space-x-[8px] items-end">
          {items.map((item) => (
            <div
              className={`px-[32px] py-[10px] w-[352px] cursor-pointer   ${
                selectTab === item.key ? 'bg-primary h-full' : 'bg-tertiary-light h-[61px]'
              }  rounded-t-[16px] flex items-center justify-center`}
              key={item.key}
              onClick={() => setSelectedTab(item?.key)}
            >
              <span className="text-[18px] font-bold text-[#ffffff]">ライフメイクカルテ（一般世帯）</span>
            </div>
          ))}
        </div>
      )}
      {items.find((e) => e.key === selectTab)?.children}
    </>
  );
}

export default Tab;
