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
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="#292D32"
      />
      <path
        d="M17.4999 17.83H15.6499C15.2399 17.83 14.8999 17.49 14.8999 17.08C14.8999 16.67 15.2399 16.33 15.6499 16.33H17.4999C17.9099 16.33 18.2499 16.67 18.2499 17.08C18.2499 17.49 17.9099 17.83 17.4999 17.83Z"
        fill="#292D32"
      />
      <path
        d="M12.97 17.83H6.5C6.09 17.83 5.75 17.49 5.75 17.08C5.75 16.67 6.09 16.33 6.5 16.33H12.97C13.38 16.33 13.72 16.67 13.72 17.08C13.72 17.49 13.39 17.83 12.97 17.83Z"
        fill="#292D32"
      />
      <path
        d="M17.5002 14.07H11.9702C11.5602 14.07 11.2202 13.73 11.2202 13.32C11.2202 12.91 11.5602 12.57 11.9702 12.57H17.5002C17.9102 12.57 18.2502 12.91 18.2502 13.32C18.2502 13.73 17.9102 14.07 17.5002 14.07Z"
        fill="#292D32"
      />
      <path
        d="M9.27 14.07H6.5C6.09 14.07 5.75 13.73 5.75 13.32C5.75 12.91 6.09 12.57 6.5 12.57H9.27C9.68 12.57 10.02 12.91 10.02 13.32C10.02 13.73 9.68 14.07 9.27 14.07Z"
        fill="#292D32"
      />
    </svg>
  );
};