const primaryColor = {
  primary_50: "#FAE6FD",
  primary_100: "#F0B1FA",
  primary_200: "#E88BF7",
  primary_300: "#DE55F4",
  primary_400: "#D735F1",
  primary_500: "#CD02EE",
  primary_600: "#BB02D9",
  primary_700: "#9201A9",
  primary_800: "#710183",
  primary_900: "#560164",
};

const secondaryColor = {
  secondary50: "#E6F4FF",
  secondary100: "#B0DEFF",
  secondary200: "#8ACEFF",
  secondary300: "#54B7FF",
  secondary400: "#33A9FF",
  secondary500: "#0094FF",
  secondary600: "#0087E8",
  secondary700: "#0069B5",
  secondary800: "#00518C",
  secondary900: "#003E6B",
};

const dark_green = {
  dark25: "#F9F9F9",
  dark50: "#E9EAEC",
  dark100: "#BBBFC4",
  dark200: "#9B9FA7",
  dark300: "#6D747F",
  dark400: "#515966",
  dark500: "#252F40",
  dark600: "#222B3A",
  dark700: "#1A212D",
  dark800: "#141A23",
  dark900: "#10141B",
};

const gradient = {
  white: "#FFF",
  black: "#000",
  gradient: "linear-gradient(239deg, #0094FF -1.81%, #CD02EE 89.62%)",
  gradient_line:
    "linear-gradient(90deg, rgba(255, 255, 255, 0.00) -1.96%, #D735F1 49.94%, rgba(255, 255, 255, 0.00) 99.72%)",
};

export const colors = {
  ...primaryColor,
  ...secondaryColor,
  ...dark_green,
  ...gradient,
};

export type TColors = keyof typeof colors;
