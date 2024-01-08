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
        d="M7.1099 5.96L16.1299 2.95C20.1799 1.6 22.3799 3.81 21.0399 7.86L18.0299 16.88C16.0099 22.95 12.6899 22.95 10.6699 16.88L9.7799 14.2L7.0999 13.31C1.0399 11.3 1.0399 7.99 7.1099 5.96Z"
        fill="#292D32"
      />
      <path d="M12.1201 11.63L15.9301 7.81L12.1201 11.63Z" fill="#292D32" />
      <path
        d="M12.1201 12.38C11.9301 12.38 11.7401 12.31 11.5901 12.16C11.3001 11.87 11.3001 11.39 11.5901 11.1L15.3901 7.28C15.6801 6.99 16.1601 6.99 16.4501 7.28C16.7401 7.57 16.7401 8.05 16.4501 8.34L12.6501 12.16C12.5001 12.3 12.3101 12.38 12.1201 12.38Z"
        fill="#292D32"
      />
    </svg>
  );
};
