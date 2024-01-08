import { FC } from "react";



export const Outline: FC<IIconProps> = ({ className, width=24, height=24 }) => {
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
        d="M10.9399 22.65C10.4599 22.65 9.9899 22.53 9.5499 22.29C8.6699 21.8 8.1399 20.91 8.1399 19.91V14.61C8.1399 14.11 7.8099 13.36 7.4999 12.98L3.7599 9.01998C3.1299 8.38998 2.6499 7.30998 2.6499 6.49998V4.19998C2.6499 2.59998 3.8599 1.34998 5.3999 1.34998H18.5999C20.1199 1.34998 21.3499 2.57998 21.3499 4.09998V6.29998C21.3499 7.34998 20.7199 8.53998 20.1299 9.12998L15.7999 12.96C15.3799 13.31 15.0499 14.08 15.0499 14.7V19C15.0499 19.89 14.4899 20.92 13.7899 21.34L12.4099 22.23C11.9599 22.51 11.4499 22.65 10.9399 22.65ZM5.3999 2.84998C4.6999 2.84998 4.1499 3.43998 4.1499 4.19998V6.49998C4.1499 6.86998 4.4499 7.58998 4.8299 7.96998L8.6399 11.98C9.1499 12.61 9.6499 13.66 9.6499 14.6V19.9C9.6499 20.55 10.0999 20.87 10.2899 20.97C10.7099 21.2 11.2199 21.2 11.6099 20.96L12.9999 20.07C13.2799 19.9 13.5599 19.36 13.5599 19V14.7C13.5599 13.63 14.0799 12.45 14.8299 11.82L19.1099 8.02998C19.4499 7.68998 19.8599 6.87998 19.8599 6.28998V4.09998C19.8599 3.40998 19.2999 2.84998 18.6099 2.84998H5.3999Z"
        fill="#292D32"
      />
      <path
        d="M5.99992 10.75C5.85992 10.75 5.72992 10.71 5.59992 10.64C5.24992 10.42 5.13992 9.95002 5.35992 9.60002L10.2899 1.70002C10.5099 1.35002 10.9699 1.24002 11.3199 1.46002C11.6699 1.68002 11.7799 2.14002 11.5599 2.49002L6.62992 10.39C6.48992 10.62 6.24992 10.75 5.99992 10.75Z"
        fill="#292D32"
      />
    </svg>
  );
};
