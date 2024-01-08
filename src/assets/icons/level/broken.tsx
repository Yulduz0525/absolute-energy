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
        d="M2.2 14.02A9.992 9.992 0 0012 22c4.82 0 8.84-3.41 9.79-7.95M7.49 3.07C4.81 4.43 2.82 6.96 2.21 9.98M21.81 10.06C20.91 5.46 16.86 2 12 2M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
      ></path>
    </svg>
  );
};
