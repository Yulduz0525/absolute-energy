import { FC } from "react";



export const Bold: FC<IIconProps> = ({ className, width=24, height=24 }) => {
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
        d="M18 16.75C17.84 16.75 17.69 16.7 17.55 16.6C17.22 16.35 17.15 15.88 17.4 15.55C18.66 13.87 18.93 11.64 18.12 9.71001C17.96 9.33001 18.14 8.89001 18.52 8.73001C18.9 8.57001 19.34 8.75001 19.5 9.13001C20.52 11.55 20.17 14.36 18.6 16.46C18.45 16.65 18.23 16.75 18 16.75Z"
        fill="#292D32"
      />
      <path
        d="M19.8301 19.25C19.6701 19.25 19.5201 19.2 19.3801 19.1C19.0501 18.85 18.9801 18.38 19.2301 18.05C21.3701 15.2 21.8401 11.38 20.4601 8.08999C20.3001 7.70999 20.4801 7.26999 20.8601 7.10999C21.2401 6.94999 21.6801 7.12999 21.8401 7.50999C23.4301 11.29 22.8901 15.67 20.4301 18.95C20.2901 19.15 20.0601 19.25 19.8301 19.25Z"
        fill="#292D32"
      />
      <path
        d="M14.04 12.96C14.67 12.33 15.75 12.78 15.75 13.67V16.6C15.75 18.32 15.13 19.61 14.02 20.23C13.57 20.48 13.07 20.6 12.55 20.6C11.75 20.6 10.89 20.33 10.01 19.78L9.36998 19.38C8.82998 19.04 8.73998 18.28 9.18998 17.83L14.04 12.96Z"
        fill="#292D32"
      />
      <path
        d="M21.77 2.23C21.47 1.93 20.98 1.93 20.68 2.23L15.73 7.18C15.67 5.58 15.07 4.38 14.01 3.79C12.89 3.17 11.46 3.33 10 4.24L7.09 6.06C6.89 6.18 6.66 6.25 6.43 6.25H5.5H5C2.58 6.25 1.25 7.58 1.25 10V14C1.25 16.42 2.58 17.75 5 17.75H5.16L2.22 20.69C1.92 20.99 1.92 21.48 2.22 21.78C2.38 21.92 2.57 22 2.77 22C2.97 22 3.16 21.92 3.31 21.77L21.77 3.31C22.08 3.01 22.08 2.53 21.77 2.23Z"
        fill="#292D32"
      />
    </svg>
  );
};