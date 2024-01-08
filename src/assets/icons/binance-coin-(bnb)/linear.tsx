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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M12 2L6 8l2 2 4-4 4 4 2-2-6-6zM12 22l-6-6 2-2 4 4 4-4 2 2-6 6zM19.785 9.702l-2.262 2.263 2.262 2.262 2.263-2.262-2.263-2.263zM4.285 9.702l-2.263 2.263 2.263 2.262 2.263-2.262-2.263-2.263z"
      ></path>
      <path
        stroke="#17191C"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M11.929 9.525L9.454 12l2.475 2.475L14.404 12l-2.475-2.475z"
      ></path>
    </svg>
  );
};
