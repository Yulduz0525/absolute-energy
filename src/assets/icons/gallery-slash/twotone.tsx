import { FC } from "react";



export const TwoTOne: FC<IIconProps> = ({ className, width=24, height=24 }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3.37 20.1C2.43 18.97 2 17.31 2 15V9c0-5 2-7 7-7h6c2.19 0 3.8.38 4.92 1.23"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8 10a2 2 0 100-4 2 2 0 000 4z"
        opacity="0.4"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M22 2L2 22"
      ></path>
      <g
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        opacity="0.4"
      >
        <path d="M21.97 7.99c.02.32.03.66.03 1.01v6c0 5-2 7-7 7H9c-.74 0-1.42-.04-2.04-.14"></path>
        <path d="M11.43 16.45c.3.3.79.3 1.09 0l5.03-5.04c.78-.78 2.04-.78 2.82 0L22 13.05"></path>
      </g>
    </svg>
  );
};
