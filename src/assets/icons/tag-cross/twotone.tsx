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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10.28 20.25H17c2.76 0 5-2.24 5-5v-6.5c0-2.76-2.24-5-5-5h-6.72c-1.41 0-2.75.59-3.7 1.64L3.05 9.27a4.053 4.053 0 000 5.46l3.53 3.88a4.978 4.978 0 003.7 1.64z"
      ></path>
      <g stroke="#292D32" strokeLinecap="round" strokeWidth="1.5" opacity="0.4">
        <path d="M16 14.47l-4.94-4.94M11.06 14.47L16 9.53"></path>
      </g>
    </svg>
  );
};
