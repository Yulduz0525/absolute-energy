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
        d="M23.0001 15.37V17.56C23.0001 20 21.2201 22.3 18.8001 22.97C18.6301 23.01 18.4501 23.01 18.2901 22.97C17.1101 22.65 16.0701 21.93 15.3401 21C14.5501 20.02 14.0901 18.81 14.0901 17.56V15.37C14.0901 14.95 14.4001 14.49 14.7801 14.33L17.5601 13.19C18.1901 12.94 18.8901 12.94 19.5201 13.19L20.5201 13.6L22.3101 14.33C22.6901 14.49 23.0001 14.95 23.0001 15.37Z"
        fill="#292D32"
      />
      <path
        d="M20.95 11.01L20.77 12.08L20.07 11.8C19.08 11.4 18 11.4 16.99 11.8L14.2 12.95C13.25 13.35 12.59 14.34 12.59 15.37V17.56C12.59 18.75 12.92 19.94 13.53 21H6.18004C4.81004 21 3.52004 19.91 3.29004 18.56L2.03004 11.01C1.87004 10.08 2.34004 8.82997 3.08004 8.23997L9.66004 2.97997C10.67 2.16997 12.31 2.16997 13.32 2.98997L19.9 8.23997C20.63 8.82997 21.11 10.08 20.95 11.01Z"
        fill="#292D32"
      />
    </svg>
  );
};
