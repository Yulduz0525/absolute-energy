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
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M11.4 2.35L6.25 7.5c-.2.2-.2.51 0 .71l1.73 1.73c.2.2.51.2.71 0l5.15-5.15c.2-.2.2-.51 0-.71l-1.73-1.73a.513.513 0 00-.71 0zM12.95 8.61l-6.7 6.7c-.2.2-.2.51 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05c.2-.2.2-.51 0-.71l-1.73-1.73c-.2-.2-.51-.2-.71 0M19.21 10.16l-9.05 9.05c-.2.2-.2.51 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05c.2-.2.2-.51 0-.71l-1.73-1.73c-.2-.2-.52-.2-.71 0zM4.09 13.84l-1.73-1.73c-.2-.2-.2-.51 0-.71l1.73-1.73c.2-.2.51-.2.71 0l1.73 1.73c.2.2.2.51 0 .71L4.8 13.84c-.2.2-.52.2-.71 0z"
      ></path>
    </svg>
  );
};
