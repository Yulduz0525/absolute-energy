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
        d="M16.88 10C14.26 10 12.13 12.13 12.13 14.75C12.13 15.64 12.38 16.48 12.82 17.2C13.64 18.58 15.15 19.5 16.88 19.5C18.61 19.5 20.12 18.57 20.94 17.2C21.38 16.49 21.63 15.64 21.63 14.75C21.63 12.13 19.51 10 16.88 10ZM18.66 15.48H17.63V16.55C17.63 16.96 17.29 17.3 16.88 17.3C16.47 17.3 16.13 16.96 16.13 16.55V15.48H15.11C14.7 15.48 14.36 15.14 14.36 14.73C14.36 14.32 14.7 13.98 15.11 13.98H16.13V13C16.13 12.59 16.47 12.25 16.88 12.25C17.29 12.25 17.63 12.59 17.63 13V13.98H18.66C19.07 13.98 19.41 14.32 19.41 14.73C19.41 15.14 19.07 15.48 18.66 15.48Z"
        fill="#292D32"
      />
      <path
        d="M20.58 4.02V6.24C20.58 7.05 20.08 8.06 19.58 8.57L19.4 8.73C19.26 8.86 19.05 8.89 18.87 8.83C18.67 8.76 18.47 8.71 18.27 8.66C17.83 8.55 17.36 8.5 16.88 8.5C13.43 8.5 10.63 11.3 10.63 14.75C10.63 15.89 10.94 17.01 11.53 17.97C12.03 18.81 12.73 19.51 13.49 19.98C13.72 20.13 13.81 20.45 13.61 20.63C13.54 20.69 13.47 20.74 13.4 20.79L12 21.7C10.7 22.51 8.91004 21.6 8.91004 19.98V14.63C8.91004 13.92 8.51004 13.01 8.11004 12.51L4.32004 8.47C3.82004 7.96 3.42004 7.05 3.42004 6.45V4.12C3.42004 2.91 4.32004 2 5.41004 2H18.59C19.68 2 20.58 2.91 20.58 4.02Z"
        fill="#292D32"
      />
    </svg>
  );
};