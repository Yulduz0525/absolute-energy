import { FC } from "react";



export const Linear: FC<IIconProps> = ({ className, width=24, height=24 }) => {
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
        strokeWidth="1.5"
        d="M2 10.16v4c0 2 1 3 3 3h1.43c.37 0 .74.11 1.06.3l2.92 1.83c2.52 1.58 4.59.43 4.59-2.54V7.57c0-2.98-2.07-4.12-4.59-2.54L7.49 6.86c-.32.19-.69.3-1.06.3H5c-2 0-3 1-3 3z"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M22 14.12l-3.96-3.96M21.96 10.2L18 14.16"
      ></path>
    </svg>
  );
};
