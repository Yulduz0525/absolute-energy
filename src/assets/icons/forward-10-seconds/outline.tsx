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
        d="M13.9797 5.21997C13.7597 5.21997 13.5397 5.12 13.3997 4.94L11.4197 2.46997C11.1597 2.14997 11.2097 1.66998 11.5397 1.41998C11.8597 1.15998 12.3297 1.20998 12.5897 1.53998L14.5697 4.01001C14.8297 4.33001 14.7797 4.81 14.4497 5.06C14.3097 5.16 14.1397 5.21997 13.9797 5.21997Z"
        fill="#292D32"
      />
      <path
        d="M11.9999 22.75C6.68988 22.75 2.35986 18.43 2.35986 13.11C2.35986 7.78999 6.67988 3.46997 11.9999 3.46997C12.6899 3.46997 13.3899 3.54998 14.1499 3.72998C14.5499 3.81998 14.8099 4.23 14.7099 4.63C14.6199 5.03 14.2199 5.29 13.8099 5.19C13.1699 5.04 12.5699 4.96997 11.9999 4.96997C7.50988 4.96997 3.85986 8.61999 3.85986 13.11C3.85986 17.6 7.50988 21.25 11.9999 21.25C16.4899 21.25 20.1399 17.6 20.1399 13.11C20.1399 11.37 19.5699 9.69 18.4899 8.25C18.2399 7.92 18.3099 7.45001 18.6399 7.20001C18.9699 6.95001 19.4399 7.01998 19.6899 7.34998C20.9699 9.04998 21.6399 11.04 21.6399 13.11C21.6399 18.43 17.3099 22.75 11.9999 22.75Z"
        fill="#292D32"
      />
      <path
        d="M9.54004 16.6701C9.13004 16.6701 8.79004 16.3301 8.79004 15.9201V12.5301L8.60003 12.7401C8.32003 13.0501 7.85004 13.0701 7.54004 12.8001C7.23004 12.5201 7.21004 12.0501 7.48004 11.7401L8.98004 10.0701C9.19004 9.84008 9.52003 9.76007 9.81003 9.87007C10.1 9.98007 10.29 10.2601 10.29 10.5701V15.9201C10.29 16.3401 9.96004 16.6701 9.54004 16.6701Z"
        fill="#292D32"
      />
      <path
        d="M14 16.67C12.48 16.67 11.25 15.44 11.25 13.92V12.5701C11.25 11.0501 12.48 9.82007 14 9.82007C15.52 9.82007 16.75 11.0501 16.75 12.5701V13.92C16.75 15.44 15.52 16.67 14 16.67ZM14 11.3301C13.31 11.3301 12.75 11.8901 12.75 12.5801V13.9301C12.75 14.6201 13.31 15.1801 14 15.1801C14.69 15.1801 15.25 14.6201 15.25 13.9301V12.5801C15.25 11.8901 14.69 11.3301 14 11.3301Z"
        fill="#292D32"
      />
    </svg>
  );
};