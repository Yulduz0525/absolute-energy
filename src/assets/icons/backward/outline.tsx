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
        d="M20.05 18.36C19.59 18.36 19.12 18.24 18.7 17.99L12.36 14.33C12.07 14.16 11.84 13.96 11.67 13.74C11.56 13.61 11.5 13.44 11.5 13.27V10.71C11.5 10.54 11.56 10.37 11.67 10.24C11.85 10.02 12.08 9.82001 12.36 9.66001L18.71 5.99C19.55 5.5 20.56 5.5 21.41 5.99C22.26 6.48 22.76 7.34999 22.76 8.32999V15.65C22.76 16.63 22.26 17.5 21.41 17.99C20.98 18.24 20.51 18.36 20.05 18.36ZM12.99 12.96C13.03 12.99 13.07 13.02 13.11 13.04L19.44 16.69C19.82 16.91 20.27 16.91 20.64 16.69C21.02 16.47 21.24 16.08 21.24 15.65V8.32999C21.24 7.89999 21.02 7.51002 20.64 7.29002C20.26 7.07002 19.82 7.07002 19.44 7.29002L13.1 10.95C13.06 10.97 13.02 11 12.99 11.03V12.96Z"
        fill="#292D32"
      />
      <path
        d="M10.29 18.36C9.83001 18.36 9.36 18.24 8.94 17.99L2.60001 14.33C1.76001 13.84 1.25 12.97 1.25 11.99C1.25 11.01 1.75001 10.14 2.60001 9.65L8.94 5.99C9.78 5.5 10.79 5.5 11.64 5.99C12.49 6.48 12.99 7.34999 12.99 8.32999V15.65C12.99 16.63 12.49 17.5 11.64 17.99C11.22 18.24 10.75 18.36 10.29 18.36ZM10.29 7.14002C10.08 7.14002 9.88 7.19 9.69 7.3L3.35001 10.96C2.97001 11.18 2.75 11.57 2.75 12C2.75 12.43 2.97001 12.82 3.35001 13.04L9.69 16.7C10.07 16.92 10.52 16.92 10.89 16.7C11.27 16.48 11.49 16.1 11.49 15.66V8.34C11.49 7.91 11.27 7.52 10.89 7.3C10.7 7.19 10.5 7.14002 10.29 7.14002Z"
        fill="#292D32"
      />
    </svg>
  );
};