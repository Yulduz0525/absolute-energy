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
        d="M21.93 12.86c-.02.19-.05.37-.1.55A5.96 5.96 0 0017.97 12c-3.31 0-6 2.69-6 6 0 1.47.53 2.82 1.41 3.86-.18.05-.36.08-.55.1-.85.08-1.72.04-2.62-.11-4.11-.7-7.42-4.03-8.1-8.15A10.01 10.01 0 0113.67 2.14c4.12.68 7.45 3.99 8.15 8.1.15.9.19 1.77.11 2.62z"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M21.83 13.41c-.14.49-.4.93-.77 1.3l-6.38 6.38c-.37.37-.81.63-1.3.77A5.96 5.96 0 0111.97 18c0-3.31 2.69-6 6-6 1.47 0 2.82.53 3.86 1.41z"
      ></path>
    </svg>
  );
};
