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
        d="M9 10.75C7.48 10.75 6.25 9.52 6.25 8C6.25 6.48 7.48 5.25 9 5.25C10.52 5.25 11.75 6.48 11.75 8C11.75 9.52 10.52 10.75 9 10.75ZM9 6.75C8.31 6.75 7.75 7.31 7.75 8C7.75 8.69 8.31 9.25 9 9.25C9.69 9.25 10.25 8.69 10.25 8C10.25 7.31 9.69 6.75 9 6.75Z"
        fill="#292D32"
      />
      <path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H12C12.41 1.25 12.75 1.59 12.75 2C12.75 2.41 12.41 2.75 12 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V11C21.25 10.59 21.59 10.25 22 10.25C22.41 10.25 22.75 10.59 22.75 11V15C22.75 20.43 20.43 22.75 15 22.75Z"
        fill="#292D32"
      />
      <path
        d="M18.94 8.36C18.07 8.36 16.03 7.29 15.4 5.34C14.97 3.99001 15.47 2.22 17.03 1.72C17.69 1.51 18.38 1.6 18.93 1.94C19.47 1.6 20.18 1.5 20.85 1.72C22.41 2.22 22.91 3.99001 22.48 5.34C21.85 7.33 19.71 8.36 18.94 8.36ZM16.83 4.88C17.26 6.21 18.7 6.83 18.96 6.86C19.25 6.83 20.66 6.13 21.05 4.88C21.26 4.21 21.05 3.36 20.39 3.14C20.11 3.05 19.74 3.1 19.57 3.36C19.43 3.57 19.2 3.7 18.96 3.7C18.73 3.7 18.48 3.59 18.34 3.39C18.13 3.1 17.76 3.06 17.5 3.14C16.83 3.36 16.62 4.21 16.83 4.88Z"
        fill="#292D32"
      />
      <path
        d="M2.66977 19.7C2.42977 19.7 2.18977 19.58 2.04977 19.37C1.81977 19.03 1.90977 18.56 2.25977 18.33L7.18977 15.02C8.26977 14.29 9.75977 14.38 10.7398 15.21L11.0698 15.5C11.5698 15.93 12.4198 15.93 12.9098 15.5L17.0698 11.93C18.1298 11.02 19.7998 11.02 20.8698 11.93L22.4998 13.33C22.8098 13.6 22.8498 14.07 22.5798 14.39C22.3098 14.7 21.8398 14.74 21.5198 14.47L19.8898 13.07C19.3898 12.64 18.5398 12.64 18.0398 13.07L13.8798 16.64C12.8198 17.55 11.1498 17.55 10.0798 16.64L9.74977 16.35C9.28977 15.96 8.52977 15.92 8.01977 16.27L3.08977 19.58C2.95977 19.66 2.80977 19.7 2.66977 19.7Z"
        fill="#292D32"
      />
    </svg>
  );
};