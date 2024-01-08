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
        d="M2 12.99V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9.62 17.3a2.12 2.12 0 100-4.24 2.12 2.12 0 000 4.24zM11.74 15.18V7.77M13.13 6.77l2.34.78c.57.19 1.03.83 1.03 1.43v.62c0 .81-.63 1.26-1.39 1l-2.34-.78c-.57-.19-1.03-.83-1.03-1.43v-.62c0-.8.62-1.26 1.39-1z"
      ></path>
    </svg>
  );
};
