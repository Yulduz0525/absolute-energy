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
        d="M12 12.25C11.56 12.25 11.12 12.14 10.72 11.93L4.21 8.41998C3.62 8.09998 3.25 7.46998 3.25 6.76998C3.25 6.06998 3.62 5.43998 4.21 5.11998L10.72 1.60998C11.52 1.17998 12.48 1.17998 13.27 1.60998L19.78 5.11998C20.37 5.43998 20.74 6.06998 20.74 6.76998C20.74 7.46998 20.37 8.09998 19.78 8.41998L13.27 11.93C12.88 12.15 12.44 12.25 12 12.25ZM12 2.77998C11.81 2.77998 11.61 2.82998 11.43 2.92998L4.93 6.42998C4.76 6.51998 4.75 6.70998 4.75 6.76998C4.75 6.82998 4.76 7.01998 4.93 7.09998L11.44 10.61C11.8 10.8 12.21 10.8 12.57 10.61L19.08 7.09998C19.24 7.00998 19.26 6.81998 19.26 6.76998C19.26 6.70998 19.25 6.51998 19.08 6.43998L12.57 2.92998C12.39 2.82998 12.19 2.77998 12 2.77998Z"
        fill="#292D32"
      />
      <path
        d="M9.78 22.72C9.5 22.72 9.21 22.65 8.95 22.52L2.89 19.5C1.88 18.99 1.25 17.97 1.25 16.84V11.12C1.25 10.47 1.58 9.88001 2.13 9.54001C2.69 9.20001 3.36 9.17001 3.94 9.46001L10 12.48C11.01 12.99 11.64 14 11.64 15.14V20.86C11.64 21.51 11.31 22.1 10.76 22.44C10.46 22.63 10.12 22.72 9.78 22.72ZM3.11 10.76C3.03 10.76 2.96 10.79 2.92 10.81C2.86 10.85 2.75 10.94 2.75 11.12V16.84C2.75 17.4 3.06 17.91 3.56 18.16L9.61 21.19C9.77 21.27 9.9 21.21 9.96 21.18C10.02 21.14 10.13 21.05 10.13 20.87V15.15C10.13 14.59 9.82 14.08 9.32 13.83L3.27 10.8C3.21 10.77 3.16 10.76 3.11 10.76Z"
        fill="#292D32"
      />
      <path
        d="M14.22 22.72C13.88 22.72 13.54 22.63 13.24 22.44C12.69 22.1 12.36 21.51 12.36 20.86V15.14C12.36 14.01 12.99 12.99 14 12.48L20.05 9.45C20.63 9.16 21.31 9.19 21.86 9.53C22.41 9.87 22.74 10.46 22.74 11.11V16.83C22.74 17.96 22.11 18.98 21.1 19.49L15.05 22.52C14.79 22.66 14.5 22.72 14.22 22.72ZM20.89 10.76C20.84 10.76 20.79 10.77 20.73 10.8L14.68 13.83C14.18 14.08 13.87 14.58 13.87 15.15V20.87C13.87 21.05 13.98 21.14 14.04 21.18C14.1 21.22 14.23 21.27 14.39 21.19L20.44 18.16C20.94 17.91 21.25 17.4 21.25 16.84V11.12C21.25 10.94 21.14 10.85 21.08 10.81C21.04 10.79 20.97 10.76 20.89 10.76Z"
        fill="#292D32"
      />
    </svg>
  );
};
