import { FC } from "react";



export const Linear: FC<IIconProps> = ({ className, width=24, height=24 }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#17191C"
        strokeMiterlimit="10"
        d="M13.75 10a1 1 0 100-2 1 1 0 000 2zM10.25 10a1 1 0 100-2 1 1 0 000 2zM15.5 13a1 1 0 100-2 1 1 0 000 2zM17.15 9.75a.75.75 0 100-1.5.75.75 0 000 1.5zM17.15 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM19.75 12.75a.75.75 0 100-1.5.75.75 0 000 1.5zM6.8 9.75a.75.75 0 100-1.5.75.75 0 000 1.5zM6.8 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM4.2 12.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15.9 5.95a.75.75 0 100-1.5.75.75 0 000 1.5zM8.1 5.95a.75.75 0 100-1.5.75.75 0 000 1.5zM12.05 6.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15.9 19.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.1 19.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.05 18.95a.75.75 0 100-1.5.75.75 0 000 1.5zM8.5 13a1 1 0 100-2 1 1 0 000 2zM10.25 16a1 1 0 100-2 1 1 0 000 2zM13.75 16a1 1 0 100-2 1 1 0 000 2z"
      ></path>
      <path
        stroke="#17191C"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 2.45v0"
      ></path>
      <path
        stroke="#17191C"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17.5 2.85v0M17.5 21.2v0M20 16.5v0M20 7v0M4 16.5v0M4 7v0M6.5 2.85v0M6.5 21.2v0"
      ></path>
      <path
        stroke="#17191C"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 21.5v0M1.55 12v0M22.5 12v0"
      ></path>
    </svg>
  );
};
