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
        d="M11.4 2.4L6.3 7.5c-.2.2-.2.5 0 .7L8 9.9c.2.2.5.2.7 0l5.1-5.1c.2-.2.2-.5 0-.7l-1.7-1.7c-.2-.2-.5-.2-.7 0zM15.3 6.3l-9 9c-.2.2-.2.5 0 .7L8 17.7c.2.2.5.2.7 0l9-9c.2-.2.2-.5 0-.7L16 6.3c-.2-.2-.5-.2-.7 0zM19.2 10.2l-9 9c-.2.2-.2.5 0 .7l1.7 1.7c.2.2.5.2.7 0l9-9c.2-.2.2-.5 0-.7l-1.7-1.7c-.2-.2-.5-.2-.7 0zM4.1 13.8l-1.7-1.7c-.2-.2-.2-.5 0-.7l1.7-1.7c.2-.2.5-.2.7 0l1.7 1.7c.2.2.2.5 0 .7l-1.7 1.7c-.2.2-.5.2-.7 0z"
      ></path>
    </svg>
  );
};
