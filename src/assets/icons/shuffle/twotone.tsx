import { FC } from "react";



export const Twotone: FC<IIconProps> = ({ className, width=24, height=24 }) => {
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
        d="M3 17.98l2.55.01c.91 0 1.76-.45 2.26-1.2l6.39-9.58a2.69 2.69 0 012.26-1.2l4.55.02"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8.89 8.62l-1.08-1.5A2.675 2.675 0 005.61 6L3 6.01"
        opacity="0.4"
      ></path>
      <g
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        opacity="0.4"
      >
        <path d="M19 19.98l2-2M12.97 15.38l1.22 1.57c.51.66 1.31 1.05 2.15 1.05l4.67-.02"></path>
      </g>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M21 6.02l-2-2"
      ></path>
    </svg>
  );
};
