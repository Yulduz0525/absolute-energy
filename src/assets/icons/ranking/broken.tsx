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
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M8.67 14H4c-1.1 0-2 .9-2 2v6h6.67v-8z"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M15.33 12c0-1.1-.9-2-2-2h-2.67c-1.1 0-2 .9-2 2v10h6.67v-6M20 17h-4.67v5H22v-3c0-1.1-.9-2-2-2z"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12.52 2.07l.53 1.06c.07.15.26.29.42.31l.96.16c.61.1.76.55.32.98l-.75.75c-.13.13-.2.37-.16.54l.21.92c.17.73-.22 1.01-.86.63l-.9-.53c-.16-.1-.43-.1-.59 0l-.9.53c-.64.38-1.03.1-.86-.63l.21-.92a.63.63 0 00-.16-.54l-.74-.74c-.44-.44-.3-.88.32-.98l.96-.16c.16-.03.35-.17.42-.31l.53-1.06c.29-.58.75-.58 1.04-.01z"
      ></path>
    </svg>
  );
};
