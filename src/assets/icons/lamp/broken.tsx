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
        d="M4.53 9.04a8.713 8.713 0 017.41-4.11h.12c4.82 0 8.72 3.9 8.72 8.72v4.94H3.22v-4.94M12 2v2.93M15.65 18.59A3.661 3.661 0 0112 22c-1.93 0-3.52-1.5-3.65-3.41h7.3z"
      ></path>
    </svg>
  );
};
