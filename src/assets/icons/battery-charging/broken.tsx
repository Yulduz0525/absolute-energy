import { FC } from "react";



export const Broken: FC<IIconProps> = ({ className, width=24, height=24 }) => {
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
        d="M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5M11.27 12c.77 0 1.25.83.87 1.5L10 16M10 8l-1.89 2.5c-.39.67.09 1.5.86 1.5M2 10c0-4 1-5 5-5M7 19c-4 0-5-1-5-5M13 5c4 0 5 1 5 5v4c0 4-1 5-5 5"
      ></path>
    </svg>
  );
};