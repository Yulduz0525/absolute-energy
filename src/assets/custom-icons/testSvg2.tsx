import { FC } from "react";

export const TestSvg2: FC<IIconProps> = ({
  className,
  width = 24,
  height = 24,
}) => {
  return (
    <svg className={className} width="1440" height="672" viewBox="0 0 1440 672" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="720" cy="-248" r="920" fill="#F9F9F9"/>
    </svg>
  );
};
