import React from "react";

export const Hamburger: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props} // Permite passar propriedades adicionais
    >
      <g clipPath="url(#clip0_11102_360)">
        <rect width="16" height="2" rx="1" fill="white" />
        <rect y="7" width="16" height="2" rx="1" fill="white" />
        <rect y="14" width="16" height="2" rx="1" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_11102_360">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
