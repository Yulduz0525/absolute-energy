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
        d="M15.59 13.01C12.35 13.01 9.70996 10.37 9.70996 7.13C9.70996 3.89 12.35 1.25 15.59 1.25C18.83 1.25 21.47 3.89 21.47 7.13C21.47 10.37 18.83 13.01 15.59 13.01ZM15.59 2.75C13.18 2.75 11.21 4.71 11.21 7.13C11.21 9.55 13.17 11.51 15.59 11.51C18.01 11.51 19.97 9.55 19.97 7.13C19.97 4.71 18 2.75 15.59 2.75Z"
        fill="#292D32"
      />
      <path
        d="M6.36026 20.19C4.25026 20.19 2.53027 18.47 2.53027 16.36C2.53027 14.25 4.25026 12.53 6.36026 12.53C8.47026 12.53 10.1903 14.25 10.1903 16.36C10.1903 18.47 8.47026 20.19 6.36026 20.19ZM6.36026 14.03C5.08026 14.03 4.03027 15.07 4.03027 16.36C4.03027 17.64 5.07026 18.69 6.36026 18.69C7.64026 18.69 8.69028 17.65 8.69028 16.36C8.69028 15.08 7.64026 14.03 6.36026 14.03Z"
        fill="#292D32"
      />
      <path
        d="M16.6201 22.75C14.7901 22.75 13.3101 21.26 13.3101 19.44C13.3101 17.61 14.8001 16.13 16.6201 16.13C18.4401 16.13 19.9301 17.62 19.9301 19.44C19.9301 21.26 18.4401 22.75 16.6201 22.75ZM16.6201 17.62C15.6201 17.62 14.8101 18.43 14.8101 19.43C14.8101 20.43 15.6201 21.24 16.6201 21.24C17.6201 21.24 18.4301 20.43 18.4301 19.43C18.4301 18.44 17.6201 17.62 16.6201 17.62Z"
        fill="#292D32"
      />
    </svg>
  );
};
