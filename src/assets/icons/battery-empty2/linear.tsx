import { FC } from "react";



export const Linear: FC<IIconProps> = ({ className, width=24, height=24 }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 19H7C3 19 2 18 2 14V10C2 6 3 5 7 5H13C17 5 18 6 18 10V14C18 18 17 19 13 19Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 9.5C22 9.5 22 10 22 11V13C22 14 22 14.5 20.5 14.5"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.38 10C6.71 11.31 6.71 12.69 6.38 14"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
