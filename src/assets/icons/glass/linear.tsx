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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10 17.5h4M2 17.5v-10c0-4 1-5 5-5M22 17.5v-10c0-4-1-5-5-5"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10 15.91v3.29c0 2-.8 2.8-2.8 2.8H4.8c-2 0-2.8-.8-2.8-2.8v-3.29c0-2 .8-2.8 2.8-2.8h2.4c2 0 2.8.8 2.8 2.8zM22 15.91v3.29c0 2-.8 2.8-2.8 2.8h-2.4c-2 0-2.8-.8-2.8-2.8v-3.29c0-2 .8-2.8 2.8-2.8h2.4c2 0 2.8.8 2.8 2.8z"
      ></path>
    </svg>
  );
};
