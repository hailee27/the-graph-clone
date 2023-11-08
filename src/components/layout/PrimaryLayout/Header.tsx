import moment from 'moment';
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateAccessToken } from '../../../redux/slices/auth.slice';

function Header() {
  const dispatch = useDispatch();
  return (
    <div className="pt-[40px]  ">
      <div className="flex items-center justify-end space-x-[32px]">
        <div className="text-primary-text h-[28px] flex items-center justify-center space-x-[6px]">
          <svg fill="none" height="12" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.8183 1.5644L10.4346 0.180646C10.1934 -0.0602917 9.80316 -0.0600574 9.56223 0.180646L8.66504 1.07783L10.9216 3.33416L11.8181 2.43674C12.0588 2.1958 12.0593 1.80533 11.8181 1.56463L11.8183 1.5644Z"
              fill="#333333"
            />
            <path
              d="M0.768516 8.97464L0 11.9999L3.02461 11.2305L10.5105 3.74386L8.25469 1.48776L0.768516 8.97464ZM2.1832 9.48722L1.67063 8.97464L8.19305 2.45222L8.70609 2.96526L2.1832 9.48722Z"
              fill="#333333"
            />
          </svg>
          <span className="text-[13px] ">{moment().format('YYYY.MM.DD ddd')}</span>
        </div>
        <div>
          <svg fill="none" height="28" viewBox="0 0 2 28" width="2" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.999023 0V28" stroke="#D9D9D9" />
          </svg>
        </div>
        <div className="text-primary-text h-[28px] flex flex-col items-start justify-center">
          <span className="text-[13px] leading-[20px] font-medium">山田 太郎</span>
          <span className="text-[11px] leading-[17.6px]">00000000000</span>
        </div>
        <div
          className="text-primary-text h-[28px] flex items-center justify-center cursor-pointer space-x-[6px]"
          onClick={() => dispatch(updateAccessToken(null))}
        >
          <svg fill="none" height="12" viewBox="0 0 14 12" width="14" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.76832 5.45455H9.15303V0.545455C9.15303 0.400791 9.0963 0.262053 8.99532 0.15976C8.89434 0.0574675 8.75737 0 8.61456 0H0.537495C0.394683 0 0.257721 0.0574675 0.156738 0.15976C0.055755 0.262053 -0.000976562 0.400791 -0.000976562 0.545455V11.4545C-0.000976562 11.5992 0.055755 11.7379 0.156738 11.8402C0.257721 11.9425 0.394683 12 0.537495 12H8.61456C8.75737 12 8.89434 11.9425 8.99532 11.8402C9.0963 11.7379 9.15303 11.5992 9.15303 11.4545V6.54545H3.76832V5.45455ZM13.8414 5.61443L10.7684 2.50125L10.0068 3.27273L12.1607 5.45455H9.15303V6.54545H12.1607L10.0068 8.72727L10.7684 9.49875L13.8414 6.38557C13.9423 6.28329 13.999 6.1446 13.999 6C13.999 5.8554 13.9423 5.71671 13.8414 5.61443Z"
              fill="#2C8D27"
            />
          </svg>
          <span className="text-[13px] font-medium text-primary">ログアウト</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
