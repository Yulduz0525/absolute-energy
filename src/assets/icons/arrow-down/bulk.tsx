import { FC } from "react";

export const Bulk: FC<IIconProps> = ({ className, width=24, height=24 }) => {
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
        opacity="0.4"
        d="M15.48 13.23L11.69 8.17999H6.07999C5.11999 8.17999 4.63999 9.33999 5.31999 10.02L10.5 15.2C11.33 16.03 12.68 16.03 13.51 15.2L15.48 13.23Z"
        fill="#292D32"
      />
      <path
        d="M17.9199 8.17999H11.6899L15.4799 13.23L18.6899 10.02C19.3599 9.33999 18.8799 8.17999 17.9199 8.17999Z"
        fill="#292D32"
      />
    </svg>
  );
};
