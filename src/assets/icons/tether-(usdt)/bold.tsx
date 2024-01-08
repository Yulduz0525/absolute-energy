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
        d="M21.7101 9.9L19.3101 5.08C18.8401 4.13 17.5901 3.36 16.5301 3.36H7.4701C6.4101 3.36 5.1601 4.13 4.6901 5.08L2.29009 9.9C1.71009 11.06 2.03009 12.71 2.98009 13.58L9.9101 19.87C11.0601 20.91 12.9301 20.91 14.0801 19.87L21.0101 13.58C21.9701 12.71 22.2901 11.05 21.7101 9.9ZM16.0001 9.25H12.7501V14.5C12.7501 14.91 12.4101 15.25 12.0001 15.25C11.5901 15.25 11.2501 14.91 11.2501 14.5V9.25H8.0001C7.5901 9.25 7.2501 8.91 7.2501 8.5C7.2501 8.09 7.5901 7.75 8.0001 7.75H16.0001C16.4101 7.75 16.7501 8.09 16.7501 8.5C16.7501 8.91 16.4101 9.25 16.0001 9.25Z"
        fill="black"
      />
    </svg>
  );
};
