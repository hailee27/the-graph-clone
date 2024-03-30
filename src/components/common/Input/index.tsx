import React from 'react';

function Input(props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
  return (
    <div className="w-[344px] h-[64px]  group border rounded-[4px] border-colorsWhite8 bg-colorsWhite4 relative ">
      <input
        {...props}
        className="w-full h-full px-[16px] focus-visible:outline-[#6f4cffe0] focus-visible:outline focus-visible:border-none text-white bg-transparent rounded-[4px] focus-visible:bg-[#6f4cff14]"
      />
      <svg
        aria-hidden="true"
        className="w-[16px] absolute top-[50%] right-6 translate-y-[-50%]"
        focusable="false"
        viewBox="0 0 16 16"
      >
        <path
          clipRule="evenodd"
          d="M9.5 8C9.5 7.17157 8.82843 6.5 8 6.5C7.17157 6.5 6.5 7.17157 6.5 8C6.5 8.82843 7.17157 9.5 8 9.5C8.82843 9.5 9.5 8.82843 9.5 8ZM8 5.5C9.38071 5.5 10.5 6.61929 10.5 8C10.5 9.38071 9.38071 10.5 8 10.5C6.61929 10.5 5.5 9.38071 5.5 8C5.5 6.61929 6.61929 5.5 8 5.5Z"
          fill="#FFFFFF"
          fillOpacity="0.88"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M6 8.5L1 8.5L1 7.5L6 7.5L6 8.5Z"
          fill="#FFFFFF"
          fillOpacity="0.88"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M15.3536 8.35355L8.35355 15.3535L7.64645 14.6464L14.2929 7.99999L7.64645 1.35355L8.35355 0.646439L15.3536 7.64644C15.4473 7.74021 15.5 7.86738 15.5 7.99999C15.5 8.1326 15.4473 8.25978 15.3536 8.35355Z"
          fill="#FFFFFF"
          fillOpacity="0.88"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
}

export default Input;
