import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CookieConsent() {
  const [open, seOpen] = useState<boolean>(true);
  if (open) {
    return (
      <div className="fixed bottom-10 left-10 p-[24px] bg-[#1a172f] text-white rounded-[8px] w-[440px] z-[999]">
        <svg aria-label="Cookie illustration" className="w-[48px]" viewBox="0 0 48 48">
          <path
            d="M45.859,20.404c-.625.236-1.362.372-2.151.372-1.91,0-3.516-.798-3.973-1.878-1.445,1.219-3.92,1.227-6.016-.112-1.865-1.191-2.896-3.108-2.756-4.805-.147.079-.303.141-.467.184-1.714.458-3.658-1.263-4.342-3.844-.366-1.381-.297-2.728.108-3.752-.959-.55-1.643-2.001-1.643-3.704,0-.303.022-.599.063-.883-2.745-1.516-6.312-1.724-9.549-.457C6.258,4.998,0,13.431,0,23.642c0,13.453,10.863,24.358,24.263,24.358,10.758,0,19.882-8.082,23.06-17.386,1.196-3.502.866-7.757-1.464-10.21Z"
            fill="#d3964e"
          />
          <circle cx="28.544" cy="32.597" fill="#774619" r=".714" />
          <ellipse cx="38.892" cy="26.507" fill="#774619" rx="1.07" ry="1.075" />
          <ellipse cx="18.911" cy="36.537" fill="#774619" rx="1.427" ry="1.433" />
          <circle cx="8.742" cy="20.955" fill="#774619" r=".892" />
          <ellipse cx="20.338" cy="14.328" fill="#774619" rx="1.427" ry="1.433" />
          <ellipse cx="22.657" cy="23.821" fill="#774619" rx="3.033" ry="3.045" />
          <ellipse cx="13.202" cy="10.746" fill="#774619" rx="3.211" ry="3.224" />
          <ellipse cx="32.826" cy="22.567" fill="#774619" rx="1.784" ry="1.791" />
          <ellipse cx="9.099" cy="30.269" fill="#774619" rx="1.962" ry="1.97" />
          <ellipse cx="29.615" cy="41.91" fill="#774619" rx="2.498" ry="2.507" />
          <ellipse cx="33.361" cy="6.627" fill="#d3964e" rx="2.319" ry="2.328" />
          <ellipse cx="44.957" cy="15.045" fill="#d3964e" rx="1.07" ry="1.075" />
          <ellipse cx="38.178" cy="14.328" fill="#d3964e" rx="1.427" ry="1.433" />
          <ellipse cx="43.53" cy="5.373" fill="#d3964e" rx="3.568" ry="3.582" />
          <circle cx="29.436" cy=".896" fill="#d3964e" r=".892" />
        </svg>
        <div className="text-[20px] font-semibold py-[8px]">Cookie consent</div>
        <p className="text-white64">
          By continuing to use this site you consent to the use of cookies in accordance with our &nbsp;
          <Link
            className="text-white64 decoration-[#6546e6] underline hover:text-[#6546e6] underline-offset-4 decoration-2"
            to="https://thegraph.com/privacy/"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <div className="w-full flex justify-center mt-[24px] space-x-[8px]">
          <button
            className="bg-[#232037] rounded-[8px] px-[24px] h-[48px] hover:bg-opacity-70"
            onClick={() => {
              return seOpen(false);
            }}
          >
            <span className="text-[14px] font-semibold">Essentials only</span>
          </button>
          <button
            className="bg-[#6546e6] flex-1 rounded-[8px] px-[24px] h-[48px] hover:bg-opacity-70"
            onClick={() => {
              return seOpen(false);
            }}
          >
            <span className="text-[14px] font-semibold"> Allow all</span>
          </button>
        </div>
      </div>
    );
  }
}

export default CookieConsent;
