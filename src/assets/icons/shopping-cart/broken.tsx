import { FC } from "react";



export const Broken: FC<IIconProps> = ({ className, width=24, height=24 }) => {
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
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M4.75 13.97A2.796 2.796 0 007.54 17h10.65c1.44 0 2.7-1.18 2.81-2.61l.54-7.5c.12-1.66-1.14-3.01-2.81-3.01H5.82M2 2h1.74c1.08 0 1.93.93 1.84 2l-.5 6.05M16.25 22a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM8.25 22a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM9 8h12"
      ></path>
    </svg>
  );
};
