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
        strokeWidth="1.5"
        d="M3 7h18"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M6 12h12"
        opacity="0.34"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M10 17h4"
      ></path>
    </svg>
  );
};
