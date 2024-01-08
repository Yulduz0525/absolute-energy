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
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M2 12c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v5c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-.83M16 4.5h2M6 4.5h7.17M9 2h6"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8.89 19.11a1.37 1.37 0 100-2.74 1.37 1.37 0 000 2.74z"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15.28 16.83v-5.35c0-1.14-.71-1.3-1.44-1.1l-2.74.75c-.5.14-.84.53-.84 1.1v5.51"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M13.91 18.2a1.37 1.37 0 100-2.74 1.37 1.37 0 000 2.74zM10.26 13.83l5.02-1.37"
      ></path>
    </svg>
  );
};
