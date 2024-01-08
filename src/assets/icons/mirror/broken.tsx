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
        strokeWidth="1.5"
        d="M12 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8c0-2.71 1.35-5.11 3.41-6.55M16 22h2M6 22h7"
      ></path>
    </svg>
  );
};
