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
        d="M7.47 3.35h9.06c1.06 0 2.31.77 2.78 1.72l2.4 4.82c.58 1.16.26 2.81-.69 3.68l-6.93 6.29c-1.15 1.04-3.02 1.04-4.17 0l-6.93-6.29c-.96-.87-1.27-2.52-.69-3.68l2.4-4.82c.46-.95 1.71-1.72 2.77-1.72zM12 14.5v-6M8 8.5h8"
      ></path>
    </svg>
  );
};
