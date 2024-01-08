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
        stroke="#000"
        strokeMiterlimit="10"
        d="M13.75 10a1 1 0 100-2 1 1 0 000 2z"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M10.25 10c.55 0 1-.45 1-1s-.45-1-1-1"
      ></path>
      <path
        stroke="#000"
        strokeMiterlimit="10"
        d="M15.5 13a1 1 0 100-2 1 1 0 000 2zM17.15 9.75a.75.75 0 100-1.5.75.75 0 000 1.5zM17.15 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM19.75 12.75a.75.75 0 100-1.5.75.75 0 000 1.5zM6.8 9.75a.75.75 0 100-1.5.75.75 0 000 1.5zM6.8 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM4.2 12.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15.9 5.95a.75.75 0 100-1.5.75.75 0 000 1.5zM8.1 5.95a.75.75 0 100-1.5.75.75 0 000 1.5zM12.05 6.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15.9 19.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M8.85 19c0 .41-.34.75-.75.75s-.75-.34-.75-.75"
      ></path>
      <path
        stroke="#000"
        strokeMiterlimit="10"
        d="M12.05 18.95a.75.75 0 100-1.5.75.75 0 000 1.5zM8.5 13a1 1 0 100-2 1 1 0 000 2zM10.25 16a1 1 0 100-2 1 1 0 000 2z"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M14.75 15c0-.55-.45-1-1-1s-1 .45-1 1"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11.95 2.5v0"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17.45 2.9v0M17.45 21.25v0M19.95 16.55v0M19.95 7.05v0M3.95 16.55v0M3.95 7.05v0M6.45 2.9v0M6.45 21.25v0"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11.95 21.55v0M1.5 12.05v0M22.45 12.05v0"
      ></path>
    </svg>
  );
};
