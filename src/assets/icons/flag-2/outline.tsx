import { FC } from "react";



export const Outline: FC<IIconProps> = ({ className, width=24, height=24 }) => {
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
        d="M6.44995 22.75C6.03995 22.75 5.69995 22.41 5.69995 22V2C5.69995 1.59 6.03995 1.25 6.44995 1.25C6.85995 1.25 7.19995 1.59 7.19995 2V22C7.19995 22.41 6.85995 22.75 6.44995 22.75Z"
        fill="#292D32"
      />
      <path
        d="M6.95005 17.75C6.67005 17.75 6.41005 17.6 6.28005 17.33C6.10005 16.96 6.25005 16.51 6.62005 16.33L14.92 12.23C16.14 11.6 16.83 10.84 16.8 10.13C16.77 9.43999 16.03 8.72999 14.76 8.18999L6.66005 4.68999C6.27005 4.51999 6.10005 4.07999 6.26005 3.69999C6.42005 3.31999 6.87005 3.13999 7.25005 3.30999L15.35 6.80999C17.85 7.86999 18.27 9.30999 18.3 10.07C18.35 11.4 17.39 12.64 15.6 13.56L7.29005 17.67C7.18005 17.73 7.06005 17.75 6.95005 17.75Z"
        fill="#292D32"
      />
    </svg>
  );
};
