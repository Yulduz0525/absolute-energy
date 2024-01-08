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
        d="M16.42 7.95a6.253 6.253 0 010 8.84 6.253 6.253 0 01-8.84 0 6.253 6.253 0 010-8.84 6.253 6.253 0 018.84 0z"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8.25 21.64c-2-.8-3.75-2.25-4.91-4.26a9.89 9.89 0 01-1.25-6.25M5.85 4.48A9.936 9.936 0 0112 2.36c2.27 0 4.36.77 6.04 2.05M15.75 21.64c2-.8 3.75-2.25 4.91-4.26a9.89 9.89 0 001.25-6.25"
        opacity="0.4"
      ></path>
    </svg>
  );
};
