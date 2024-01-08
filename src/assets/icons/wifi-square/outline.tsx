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
        d="M18 10.71C17.84 10.71 17.68 10.66 17.54 10.55C14.17 7.94998 9.82003 7.94998 6.46003 10.55C6.13003 10.8 5.66003 10.74 5.41003 10.42C5.16003 10.09 5.22003 9.61997 5.54003 9.36997C9.46003 6.33997 14.53 6.33997 18.46 9.36997C18.79 9.61997 18.85 10.09 18.59 10.42C18.45 10.61 18.22 10.71 18 10.71Z"
        fill="#292D32"
      />
      <path
        d="M16.3999 13.8C16.2399 13.8 16.0799 13.75 15.9399 13.64C13.5399 11.79 10.4499 11.79 8.04988 13.64C7.71988 13.89 7.24987 13.83 6.99987 13.51C6.74987 13.18 6.80987 12.71 7.12987 12.46C10.0799 10.18 13.8999 10.18 16.8499 12.46C17.1799 12.71 17.2399 13.18 16.9799 13.51C16.8499 13.7 16.6299 13.8 16.3999 13.8Z"
        fill="#292D32"
      />
      <path
        d="M14.2001 16.89C14.0401 16.89 13.8801 16.84 13.7401 16.73C12.6801 15.91 11.3101 15.91 10.2501 16.73C9.92007 16.98 9.45007 16.92 9.20007 16.6C8.95007 16.27 9.01007 15.8 9.33007 15.55C10.9201 14.32 13.0601 14.32 14.6501 15.55C14.9801 15.8 15.0401 16.27 14.7801 16.6C14.6501 16.79 14.4301 16.89 14.2001 16.89Z"
        fill="#292D32"
      />
      <path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="#292D32"
      />
    </svg>
  );
};
