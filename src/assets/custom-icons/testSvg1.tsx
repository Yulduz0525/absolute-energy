import { FC } from "react";

export const TestSvg1: FC<IIconProps> = ({
  className,
  width = 24,
  height = 24,
}) => {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 207 484" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M-39.5 483.5C124.474 398.5 121.374 180.2 -1.02569 191C-154.026 204.5 4.9743 369 124.474 260.5C243.974 152 210.474 -76 160.474 -93" stroke="#49AD09" />
</svg>
  );
};
