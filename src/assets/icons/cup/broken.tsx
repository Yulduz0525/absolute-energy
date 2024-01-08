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
        d="M12.15 16.5v2.1"
      ></path>
      <path
        stroke="#292D32"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M7.15 22h10v-1c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v1z"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6.15 22h12M8.51 15.07A6.99 6.99 0 015 9V6c0-2.21 1.79-4 4-4h6c2.21 0 4 1.79 4 4v3c0 3.82-3.05 6.92-6.85 7H12"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5.47 11.65c-.75-.24-1.41-.68-1.93-1.2-.9-1-1.5-2.2-1.5-3.6s1.1-2.5 2.5-2.5h.65c-.2.46-.3.97-.3 1.5v3c0 1 .21 1.94.58 2.8zM18.53 11.65c.75-.24 1.41-.68 1.93-1.2.9-1 1.5-2.2 1.5-3.6s-1.1-2.5-2.5-2.5h-.65c.2.46.3.97.3 1.5v3c0 1-.21 1.94-.58 2.8z"
      ></path>
    </svg>
  )
};
