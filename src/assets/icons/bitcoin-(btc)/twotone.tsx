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
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
      ></path>
      <g
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        opacity="0.4"
      >
        <path d="M8.78 7.67h5.42c1.2 0 2.17 1.08 2.17 2.17 0 1.2-.97 2.17-2.17 2.17H8.78V7.67z"></path>
        <path d="M8.78 12h6.19c1.37 0 2.48.97 2.48 2.17s-1.11 2.17-2.48 2.17H8.78V12zM12.57 16.33v2.17M9.87 16.33v2.17M12.57 5.5v2.17M9.87 5.5v2.17M10.84 7.67H7.05M10.84 16.33H7.05"></path>
      </g>
    </svg>
  );
};
