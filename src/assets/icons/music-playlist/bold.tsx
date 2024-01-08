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
        d="M18 5.25H6C5.59 5.25 5.25 4.91 5.25 4.5C5.25 4.09 5.59 3.75 6 3.75H18C18.41 3.75 18.75 4.09 18.75 4.5C18.75 4.91 18.41 5.25 18 5.25Z"
        fill="#292D32"
      />
      <path
        d="M15 2.75H9C8.59 2.75 8.25 2.41 8.25 2C8.25 1.59 8.59 1.25 9 1.25H15C15.41 1.25 15.75 1.59 15.75 2C15.75 2.41 15.41 2.75 15 2.75Z"
        fill="#292D32"
      />
      <path
        d="M13.91 16.21C13.57 16.21 13.29 16.49 13.29 16.83C13.29 17.17 13.57 17.45 13.91 17.45C14.25 17.45 14.53 17.17 14.53 16.83C14.53 16.49 14.25 16.21 13.91 16.21Z"
        fill="#292D32"
      />
      <path
        d="M9.51002 17.74C9.51002 17.4 9.23002 17.13 8.89002 17.13C8.55002 17.13 8.27002 17.41 8.27002 17.75C8.27002 18.09 8.55002 18.37 8.89002 18.37C9.23002 18.36 9.51002 18.08 9.51002 17.74Z"
        fill="#292D32"
      />
      <path
        d="M18 7H6C3.8 7 2 8.8 2 11V18C2 20.2 3.8 22 6 22H18C20.2 22 22 20.2 22 18V11C22 8.8 20.2 7 18 7ZM16.03 12.46V16.83C16.03 16.85 16.02 16.86 16.02 16.88C15.99 18.02 15.06 18.95 13.91 18.95C12.74 18.95 11.79 18 11.79 16.83C11.79 15.66 12.74 14.71 13.91 14.71C14.13 14.71 14.33 14.75 14.53 14.81V13.44L11.01 14.4V17.73V17.74C11.01 18.91 10.06 19.86 8.89 19.86C7.72 19.86 6.77 18.91 6.77 17.74C6.77 16.57 7.72 15.62 8.89 15.62C9.11 15.62 9.31 15.66 9.51 15.72V13.82V12.22C9.51 11.33 10.06 10.61 10.91 10.39L13.64 9.64C14.52 9.41 15.06 9.64 15.37 9.88C15.67 10.11 16.03 10.58 16.03 11.47V12.46Z"
        fill="#292D32"
      />
    </svg>
  );
};
