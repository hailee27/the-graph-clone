import React, { useState } from 'react';

interface Props {
  onChange?: (e: { label: string; value: string }) => void;
  value?: { label: string; value: string };
}
const data = [
  {
    label: 'EN-English',
    value: 'en',
  },
  {
    label: 'ES-Español',
    value: 'es',
  },
  {
    label: 'HI-हिन्दी',
    value: 'hi',
  },
  {
    label: 'JA-日本語',
    value: 'ja',
  },
  {
    label: 'MR-मराठी',
    value: 'mr',
  },
  {
    label: 'PT-Português',
    value: 'pt',
  },
  {
    label: 'RU-Русский',
    value: 'ru',
  },
  {
    label: 'SV-Svenska',
    value: 'sv',
  },
  {
    label: 'TR-Türkçe',
    value: 'tr',
  },
  {
    label: 'UR-اردو',
    value: 'ur',
  },
  {
    label: 'ZH-中文',
    value: 'zh',
  },
];
function Language(props: Props) {
  const { onChange, value } = props;
  const [active, setActive] = useState<string>(value?.value ?? '');
  //   console.log(value);
  //   useEffect(() => {
  //     setActive(value?.value);
  //   }, [value?.value]);

  return (
    <ul className="py-[16px] w-[200px] rounded-[4px] border border-colorsWhite4 bg-colorsPanes">
      {data.map((e) => {
        return (
          <li
            className="flex p-[8px_24px] space-x-[8px] items-center"
            key={e.value}
            onClick={() => {
              setActive(e.value);
              onChange?.(e);
            }}
          >
            {active === e.value ? (
              <svg aria-hidden="true" className="w-[14px]" fill="#fff" focusable="false" viewBox="0 0 16 16">
                <path clipRule="evenodd" d="M8 4L12 8L8 12L4 8L8 4Z" fillRule="evenodd" />
              </svg>
            ) : (
              <div className="w-[14px]" />
            )}
            <span className="text-white64">{e.label}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default Language;
