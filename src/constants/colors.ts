const primaryColor = {
  primary_50: "var(--primary-50, #FAE6FD)",
  primary_100: "var(--primary-100, #F0B1FA)",
  primary_200: "var(--primary-200, #E88BF7)",
  primary_300: "var(--primary-300, #DE55F4)",
  primary_400: "var(--primary-400, #D735F1)",
  primary_500: "var(--primary-500, #CD02EE)",
  primary_600: "var(--primary-600, #BB02D9)",
  primary_700: "var(--primary-700, #9201A9)",
  primary_800: "var(--primary-800, #710183)",
  primary_900: "var(--primary-900, #560164)",
};

const secondaryColor = {
  secondary50: "var(--secondary-50, #E6F4FF)",
  secondary100: "var(--secondary-100, #B0DEFF)",
  secondary200: "var(--secondary-200, #8ACEFF)",
  secondary300: "var(--secondary-300, #54B7FF)",
  secondary400: "var(--secondary-400, #33A9FF)",
  secondary500: "var(--secondary-500, #0094FF)",
  secondary600: "var(--secondary-600, #0087E8)",
  secondary700: "var(--secondary-700, #0069B5)",
  secondary800: "var(--secondary-800, #00518C)",
  secondary900: "var(--secondary-900, #003E6B)",
};

const dark_green = {
  dark50: "var(--dark-50, #E9EAEC)",
  dark100: "var(--dark-100, #BBBFC4)",
  dark200: "var(--dark-200, #9B9FA7)",
  dark300: "var(--dark-300, #6D747F)",
  dark400: "var(--dark-400, #515966)",
  dark500: "var(--dark-500, #252F40)",
  dark600: "var(--dark-600, #222B3A)",
  dark700: "var(--dark-700, #1A212D)",
  dark800: "var(--dark-800, #141A23)",
  dark900: "var(--dark-900, #10141B)",
};

const gradient = {
  white: "var(--white, #FFF)",
  black: "var(--Black, #000)",
  gradient:
    "var(--gradient, linear-gradient(239deg, #0094FF -1.81%, #CD02EE 89.62%))",
  gradient_line:
    "var(--gradient-line, linear-gradient(90deg, rgba(255, 255, 255, 0.00) -1.96%, #D735F1 49.94%, rgba(255, 255, 255, 0.00) 99.72%))",
};

export const colors = {
  ...primaryColor,
  ...secondaryColor,
  ...dark_green,
  ...gradient,
};

export type TColors = keyof typeof colors;
