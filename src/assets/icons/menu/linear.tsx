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
        stroke={"#fff"}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M3 7h18M3 12h18M3 17h18"
      ></path>
    </svg>
  );
};
