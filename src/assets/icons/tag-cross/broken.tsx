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
        d="M12.92 3.75h-2.64c-1.41 0-2.75.59-3.7 1.64L3.05 9.27a4.053 4.053 0 000 5.46l3.53 3.88a5.014 5.014 0 003.7 1.64H17c2.76 0 5-2.24 5-5v-6.5c0-2.76-2.24-5-5-5"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M16 14.47l-4.94-4.94M15.21 10.32l.79-.79M11.06 14.47l2.28-2.29"
      ></path>
    </svg>
  );
};
