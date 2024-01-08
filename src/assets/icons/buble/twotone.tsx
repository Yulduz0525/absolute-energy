import { FC } from "react";




export const TwoTOne: FC<IIconProps> = ({ className, width=24, height=24 }) => {
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
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M15.59 12.26a5.13 5.13 0 100-10.26 5.13 5.13 0 000 10.26z"
      ></path>
      <path
        stroke="#292D32"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M6.36 19.44a3.08 3.08 0 100-6.16 3.08 3.08 0 000 6.16zM16.62 22a2.56 2.56 0 100-5.12 2.56 2.56 0 000 5.12z"
        opacity="0.4"
      ></path>
    </svg>
  );
};
