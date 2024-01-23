import { FC } from "react";

export const Price: FC<IIconProps> = ({
  className,
  width = 24,
  height = 24,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.6667 21.6667V15C18.6667 14.0833 17.9167 13.3333 17 13.3333H10.3334V10H17C17.9167 10 18.6667 9.25 18.6667 8.33333C18.6667 7.41667 17.9167 6.66667 17 6.66667H14.5C14.5 5.75 13.75 5 12.8334 5C11.9167 5 11.1667 5.75 11.1667 6.66667H8.66671C7.75005 6.66667 7.00005 7.41667 7.00005 8.33333V15C7.00005 15.9167 7.75005 16.6667 8.66671 16.6667H15.3334V20H8.66671C7.75005 20 7.00005 20.75 7.00005 21.6667C7.00005 22.5833 7.75005 23.3333 8.66671 23.3333H11.1667C11.1667 24.25 11.9167 25 12.8334 25C13.75 25 14.5 24.25 14.5 23.3333H17C17.9167 23.3333 18.6667 22.5833 18.6667 21.6667ZM31.8 22.0333L23.55 30.2833L20.0167 26.75C19.7051 26.4384 19.2824 26.2633 18.8417 26.2633C18.401 26.2633 17.9783 26.4384 17.6667 26.75C17.3551 27.0616 17.18 27.4843 17.18 27.925C17.18 28.3657 17.3551 28.7884 17.6667 29.1L22.3834 33.8167C23.0334 34.4667 24.0834 34.4667 24.7334 33.8167L34.1667 24.3833C34.3212 24.2291 34.4438 24.046 34.5274 23.8444C34.6111 23.6428 34.6541 23.4266 34.6541 23.2083C34.6541 22.9901 34.6111 22.7739 34.5274 22.5723C34.4438 22.3707 34.3212 22.1875 34.1667 22.0333C33.5 21.3833 32.45 21.3833 31.8 22.0333Z"
        fill="#CD02EE"
      />
    </svg>
  );
};