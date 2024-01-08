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
        d="M21.28 15.72C20.63 15.27 19.84 15 19 15C18.06 15 17.19 15.33 16.5 15.88C15.58 16.61 15 17.74 15 19C15 19.75 15.21 20.46 15.58 21.06C15.62 21.13 15.67 21.2 15.73 21.27C16.43 22.31 17.63 23 19 23C20.01 23 20.93 22.63 21.63 22C21.94 21.74 22.21 21.42 22.42 21.06C22.79 20.46 23 19.75 23 19C23 17.64 22.32 16.44 21.28 15.72ZM20.6 20.58C20.45 20.73 20.26 20.8 20.07 20.8C19.88 20.8 19.69 20.73 19.54 20.58L19.01 20.05L18.46 20.6C18.31 20.75 18.12 20.82 17.93 20.82C17.74 20.82 17.55 20.75 17.4 20.6C17.11 20.31 17.11 19.83 17.4 19.54L17.95 18.99L17.42 18.46C17.13 18.17 17.13 17.69 17.42 17.4C17.71 17.11 18.19 17.11 18.48 17.4L19.01 17.93L19.51 17.43C19.8 17.14 20.28 17.14 20.57 17.43C20.86 17.72 20.86 18.2 20.57 18.49L20.07 18.99L20.6 19.52C20.89 19.81 20.89 20.28 20.6 20.58Z"
        fill="#292D32"
      />
      <path
        d="M21.8502 10.25C21.0702 5.79998 17.2402 2.34998 12.7302 2.02998C6.63021 1.58998 1.59021 6.63998 2.03021 12.73C2.35021 17.24 5.80021 21.06 10.2502 21.84C11.4002 22.04 12.5202 22.04 13.5902 21.86C13.9002 21.81 14.0802 21.47 13.9602 21.19C13.6602 20.51 13.5002 19.76 13.5002 18.99C13.5002 17.3 14.2502 15.74 15.5702 14.7C16.5402 13.92 17.7602 13.49 19.0002 13.49C19.7802 13.49 20.5202 13.65 21.1902 13.95C21.4802 14.08 21.8102 13.89 21.8702 13.58C22.0502 12.52 22.0502 11.4 21.8502 10.25ZM14.5002 13.57L13.3002 14.26L12.1002 14.95C10.6102 15.81 9.39021 15.11 9.39021 13.38V12V10.61C9.39021 8.88998 10.6102 8.17998 12.1002 9.03998L13.3002 9.72998L14.5002 10.42C15.9902 11.3 15.9902 12.7 14.5002 13.57Z"
        fill="#292D32"
      />
    </svg>
  );
};
