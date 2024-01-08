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
        d="M21.6899 2.71C21.6099 2.53 21.4699 2.38 21.2799 2.3C21.1899 2.27 21.0999 2.25 20.9999 2.25H16.9999C16.5899 2.25 16.2499 2.59 16.2499 3C16.2499 3.41 16.5899 3.75 16.9999 3.75H19.1899L14.4699 8.47C14.1799 8.76 14.1799 9.24 14.4699 9.53C14.6199 9.68 14.8099 9.75 14.9999 9.75C15.1899 9.75 15.3799 9.68 15.5299 9.53L20.2499 4.81V7C20.2499 7.41 20.5899 7.75 20.9999 7.75C21.4099 7.75 21.7499 7.41 21.7499 7V3C21.7499 2.9 21.7299 2.81 21.6899 2.71Z"
        fill="#292D32"
      />
      <path
        d="M8.47 14.47L3.75 19.19V17C3.75 16.59 3.41 16.25 3 16.25C2.59 16.25 2.25 16.59 2.25 17V21C2.25 21.1 2.27 21.19 2.31 21.29C2.39 21.47 2.53 21.62 2.72 21.7C2.8 21.73 2.9 21.75 3 21.75H7C7.41 21.75 7.75 21.41 7.75 21C7.75 20.59 7.41 20.25 7 20.25H4.81L9.53 15.53C9.82 15.24 9.82 14.76 9.53 14.47C9.24 14.18 8.76 14.18 8.47 14.47Z"
        fill="#292D32"
      />
      <path
        d="M2.2 14.75C1.85 14.75 1.54 14.5 1.47 14.15C1.33 13.45 1.25 12.72 1.25 12C1.25 6.07 6.07 1.25 12 1.25C12.73 1.25 13.46 1.32 14.17 1.47C14.58 1.55 14.84 1.95 14.76 2.35C14.68 2.76 14.27 3.01 13.88 2.94C13.25 2.81 12.63 2.75 12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 12.62 2.81 13.25 2.94 13.85C3.02 14.26 2.76 14.65 2.35 14.73C2.3 14.75 2.25 14.75 2.2 14.75Z"
        fill="#292D32"
      />
      <path
        d="M12 22.75C11.27 22.75 10.54 22.68 9.83003 22.53C9.42003 22.45 9.16003 22.05 9.24003 21.65C9.32003 21.24 9.73003 20.99 10.12 21.06C10.73 21.18 11.36 21.25 11.99 21.25C17.09 21.25 21.24 17.1 21.24 12C21.24 11.38 21.18 10.76 21.06 10.15C20.98 9.74 21.24 9.35 21.65 9.27C22.06 9.19 22.45 9.45 22.53 9.86C22.67 10.56 22.74 11.28 22.74 12C22.75 17.93 17.93 22.75 12 22.75Z"
        fill="#292D32"
      />
    </svg>
  );
};