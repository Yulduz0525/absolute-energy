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
        d="M3.91 17.1799C3.72 17.1799 3.53 17.1099 3.38 16.9599C2.01 15.5799 1.25 13.7599 1.25 11.8299C1.25 7.81994 4.5 4.55992 8.5 4.55992L14.57 4.57994L13.48 3.5399C13.18 3.2499 13.17 2.77991 13.46 2.47991C13.75 2.17991 14.22 2.16995 14.52 2.45995L16.96 4.79991C17.18 5.00991 17.25 5.33992 17.14 5.61992C17.03 5.89992 16.75 6.08995 16.44 6.08995L8.49001 6.06993C5.32001 6.06993 2.74001 8.65995 2.74001 11.84C2.74001 13.37 3.33999 14.8199 4.42999 15.9099C4.71999 16.1999 4.71999 16.6799 4.42999 16.9699C4.28999 17.1099 4.1 17.1799 3.91 17.1799Z"
        fill="#292D32"
      />
      <path
        d="M9.9999 21.75C9.8099 21.75 9.6299 21.6799 9.4799 21.5399L7.0399 19.2C6.8199 18.99 6.7499 18.66 6.8599 18.38C6.9699 18.1 7.2499 17.9099 7.5599 17.9099L15.5099 17.93C18.6799 17.93 21.2599 15.3399 21.2599 12.1599C21.2599 10.6299 20.6599 9.18 19.5699 8.09C19.2799 7.8 19.2799 7.32 19.5699 7.03C19.8599 6.74 20.3399 6.74 20.6299 7.03C21.9999 8.41 22.7599 10.2299 22.7599 12.1599C22.7599 16.1699 19.5099 19.43 15.5099 19.43L9.4399 19.4099L10.5299 20.45C10.8299 20.74 10.8399 21.21 10.5499 21.51C10.3899 21.67 10.1999 21.75 9.9999 21.75Z"
        fill="#292D32"
      />
      <path
        d="M15 12.75H9C8.59 12.75 8.25 12.41 8.25 12C8.25 11.59 8.59 11.25 9 11.25H15C15.41 11.25 15.75 11.59 15.75 12C15.75 12.41 15.41 12.75 15 12.75Z"
        fill="#292D32"
      />
    </svg>
  );
};
