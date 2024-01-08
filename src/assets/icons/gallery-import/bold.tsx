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
        d="M20.97 8H18.03C16.76 8 16 7.24 16 5.97V3.03C16 1.76 16.76 1 18.03 1H20.97C22.24 1 23 1.76 23 3.03V5.97C23 7.24 22.24 8 20.97 8ZM21.19 4.69C21.07 4.57 20.91 4.51 20.75 4.51C20.59 4.51 20.43 4.57 20.31 4.69L20.13 4.87V2.63C20.13 2.28 19.85 2 19.5 2C19.15 2 18.87 2.28 18.87 2.63V4.87L18.69 4.69C18.45 4.45 18.05 4.45 17.81 4.69C17.57 4.93 17.57 5.33 17.81 5.57L19.06 6.82C19.11 6.87 19.18 6.91 19.25 6.94C19.27 6.95 19.29 6.95 19.31 6.96C19.36 6.98 19.41 6.99 19.47 6.99C19.49 6.99 19.51 6.99 19.53 6.99C19.6 6.99 19.66 6.98 19.73 6.95C19.74 6.95 19.74 6.95 19.75 6.95C19.82 6.92 19.88 6.88 19.93 6.83C19.94 6.82 19.94 6.82 19.95 6.82L21.2 5.57C21.44 5.33 21.44 4.93 21.19 4.69Z"
        fill="#292D32"
      />
      <path
        d="M9.00012 10.38C10.3146 10.38 11.3801 9.31443 11.3801 8C11.3801 6.68556 10.3146 5.62 9.00012 5.62C7.68568 5.62 6.62012 6.68556 6.62012 8C6.62012 9.31443 7.68568 10.38 9.00012 10.38Z"
        fill="#292D32"
      />
      <path
        d="M20.97 8H20.5V12.61L20.37 12.5C19.59 11.83 18.33 11.83 17.55 12.5L13.39 16.07C12.61 16.74 11.35 16.74 10.57 16.07L10.23 15.79C9.52 15.17 8.39 15.11 7.59 15.65L3.85 18.16C3.63 17.6 3.5 16.95 3.5 16.19V7.81C3.5 4.99 4.99 3.5 7.81 3.5H16V3.03C16 2.63 16.07 2.29 16.23 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 17.28 2.19 18.23 2.56 19.03C3.42 20.93 5.26 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.77C21.71 7.93 21.37 8 20.97 8Z"
        fill="#292D32"
      />
    </svg>
  );
};
