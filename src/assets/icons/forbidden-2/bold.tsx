import { FC } from "react";



export const Bold: FC<IIconProps> = ({ className, width=24, height=24 }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.12 6.98L17.02 2.88C16.54 2.4 15.58 2 14.9 2H9.1C8.42 2 7.46 2.4 6.98 2.88L2.88 6.98C2.4 7.46 2 8.42 2 9.1V14.9C2 15.58 2.4 16.54 2.88 17.02L6.98 21.12C7.46 21.6 8.42 22 9.1 22H14.9C15.58 22 16.54 21.6 17.02 21.12L21.12 17.02C21.6 16.54 22 15.58 22 14.9V9.1C22 8.42 21.6 7.46 21.12 6.98ZM16.03 14.97C16.32 15.26 16.32 15.74 16.03 16.03C15.88 16.18 15.69 16.25 15.5 16.25C15.31 16.25 15.12 16.18 14.97 16.03L12 13.06L9.03 16.03C8.88 16.18 8.69 16.25 8.5 16.25C8.31 16.25 8.12 16.18 7.97 16.03C7.68 15.74 7.68 15.26 7.97 14.97L10.94 12L7.97 9.03C7.68 8.74 7.68 8.26 7.97 7.97C8.26 7.68 8.74 7.68 9.03 7.97L12 10.94L14.97 7.97C15.26 7.68 15.74 7.68 16.03 7.97C16.32 8.26 16.32 8.74 16.03 9.03L13.06 12L16.03 14.97Z"
        fill="#292D32"
      />
    </svg>
  );
};
