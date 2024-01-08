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
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M22 13v4c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-4c0-2.65 1.15-4.15 3-4.72C5.6 8.09 6.27 8 7 8h10c.73 0 1.4.09 2 .28 1.85.57 3 2.07 3 4.72z"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M19 7v1.28c-.6-.19-1.27-.28-2-.28H7c-.73 0-1.4.09-2 .28V7c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2zM16 3.51V5H8V3.51C8 2.68 8.68 2 9.51 2h4.98c.83 0 1.51.68 1.51 1.51z"
      ></path>
      <g
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        opacity="0.4"
      >
        <path d="M9.07 19.45a1.32 1.32 0 100-2.64 1.32 1.32 0 000 2.64z"></path>
        <path d="M15.25 17.25v-5.17c0-1.1-.69-1.26-1.39-1.06l-2.65.72c-.48.13-.81.51-.81 1.06v5.33"></path>
        <path d="M13.93 18.57a1.32 1.32 0 100-2.64 1.32 1.32 0 000 2.64zM10.4 14.35l4.85-1.32"></path>
      </g>
    </svg>
  );
};
