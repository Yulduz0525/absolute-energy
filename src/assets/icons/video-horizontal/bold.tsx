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
        d="M11.25 7.85999H2V16.19C2 16.25 2 16.31 2.01 16.36H11.25V7.85999Z"
        fill="#292D32"
      />
      <path
        d="M7.68994 6.36H11.2499V2H7.71994V6.24C7.71994 6.28 7.69994 6.32 7.68994 6.36Z"
        fill="#292D32"
      />
      <path
        d="M6.21988 6.23997V2.15997C3.99988 2.61997 2.54988 4.09997 2.12988 6.35997H6.23988C6.22988 6.31997 6.21988 6.27997 6.21988 6.23997Z"
        fill="#292D32"
      />
      <path d="M16.22 2H12.75V6.36H16.22V2Z" fill="#292D32" />
      <path
        d="M17.71 6.36002H21.87C21.45 4.08002 19.98 2.59002 17.72 2.15002V6.33002C17.72 6.34002 17.71 6.35002 17.71 6.36002Z"
        fill="#292D32"
      />
      <path
        d="M17.7202 21.85C19.9102 21.42 21.3502 20.02 21.8202 17.86H17.7202V21.85Z"
        fill="#292D32"
      />
      <path d="M16.22 17.86H12.75V22H16.22V17.86Z" fill="#292D32" />
      <path
        d="M12.75 16.36H21.99C22 16.31 22 16.25 22 16.19V7.85999H12.75V16.36Z"
        fill="#292D32"
      />
      <path d="M11.2502 17.86H7.72021V22H11.2502V17.86Z" fill="#292D32" />
      <path
        d="M2.18018 17.86C2.65018 20 4.07018 21.4 6.22018 21.84V17.86H2.18018Z"
        fill="#292D32"
      />
    </svg>
  );
};