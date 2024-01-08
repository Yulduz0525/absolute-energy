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
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M9.05 4.95L6 8l2 2 4-4 4 4 2-2-6-6M12 22l-6-6 2-2 4 4 4-4 2 2-6 6zM19.75 9.752l-2.25 2.249 2.25 2.248 2.248-2.248-2.249-2.249zM4.25 9.752L2 12.001l2.25 2.248 2.248-2.248-2.249-2.249z"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M11.999 9.526l-2.475 2.475 2.475 2.475L14.474 12l-2.475-2.475z"
      ></path>
    </svg>
  );
};
