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
        d="M2 12.94V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8.42 10.9a1.92 1.92 0 100-3.84 1.92 1.92 0 000 3.84zM8.42 16.94a1.92 1.92 0 100-3.84 1.92 1.92 0 000 3.84zM17.5 8.7l-7.34 5.49M17.5 15.28l-7.34-5.49"
      ></path>
    </svg>
  );
};
