import React, { useEffect } from 'react';
import { useComponentVisible } from '../../../hooks/useComponentVisible';

interface Props {
  title: string;
  children: React.ReactNode;
  icon?: string | JSX.Element;
  position?: 'left' | 'right' | 'center';
}

function DropDown(props: Props) {
  const { title, children, icon, position } = props;
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(null);
  useEffect(() => {
    setIsComponentVisible(false);
  }, [title]);

  return (
    <div className="flex items-center space-x-3" ref={ref}>
      <span>{icon}</span>
      <div className="relative cursor-pointer ">
        <div
          className="flex items-center space-x-[8px]"
          onClick={() => {
            setIsComponentVisible(!isComponentVisible);
          }}
        >
          <span className="text-white64 text-[14px] hover:text-white ">{title}</span>
          <svg
            aria-hidden="true"
            className={`w-[12px] ${!isComponentVisible ? 'rotate-90' : '-rotate-90'} transition-all`}
            fill="#fff"
            focusable="false"
            viewBox="0 0 16 16"
          >
            <path
              clipRule="evenodd"
              d="M5.35353 1.64645L11.3535 7.64645C11.5488 7.84172 11.5488 8.1583 11.3535 8.35356L5.35353 14.3536L4.64642 13.6465L10.2929 8.00001L4.64642 2.35356L5.35353 1.64645Z"
              fillRule="evenodd"
            />
          </svg>
        </div>
        {isComponentVisible && (
          <div
            className={`absolute left-[50%] ${position === 'right' && '-translate-x-[20%]'} ${
              position === 'left' && 'translate-x-[20%]'
            } ${position === 'center' && '-translate-x-[50%]'}  top-10 `}
            onClick={() => {
              setIsComponentVisible(!isComponentVisible);
            }}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
DropDown.defaultProps = {
  position: 'center',
};

export default DropDown;
