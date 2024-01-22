import { FC } from "react";

export const Premium: FC<IIconProps> = ({
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
      <g clip-path="url(#clip0_510_498)">
        <path
          d="M21.6166 4.68758L20.6667 1.79917L19.7167 4.68758L16.1622 15.4955L5.35424 19.0501L2.46583 20L5.35424 20.9499L16.1622 24.5045L19.7167 35.3124L20.6667 38.2008L21.6166 35.3124L25.1711 24.5045L35.9791 20.9499L38.8675 20L35.9791 19.0501L25.1711 15.4955L21.6166 4.68758Z"
          stroke="#0094FF"
          stroke-width="2"
          stroke-linecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_510_498">
          <rect
            width="40"
            height="40"
            fill="white"
            transform="translate(0.666656)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
