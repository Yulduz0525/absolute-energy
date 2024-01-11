import styled, { css } from "styled-components";

export type TWrap = "wrap" | "nowrap";
export type TDirection = "row" | "column";
export type TContent =
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";
export type TItems =
  | "center"
  | "flex-start"
  | "flex-end"
  | "stretch"
  | "baseline";
export type TMedia = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
export type TMediaNumber = { [K in TMedia]?: number };
export type TMediaWrap = { [K in TMedia]?: TWrap };
export type TMediaDirection = { [K in TMedia]?: TDirection };
export type TMediaContent = { [K in TMedia]?: TContent };
export type TMediaItems = { [K in TMedia]?: TItems };

export type columnProps = {
  width?: string;
  wrap?: TMediaWrap | TWrap;
  direction?: TMediaDirection | TDirection;
  content?: TMediaContent | TContent;
  align_items?: TMediaItems | TItems;
  align_content?: TMediaItems | TItems;
  gap?: TMediaNumber | number;
  row_gap?: TMediaNumber | number;
  column_gap?: TMediaNumber | number;
};

export type rowProps = {
  size: TMediaNumber | number;
  difference: TMediaNumber | number;
  gap?: number;
  direction?: TMediaDirection | TDirection;
  content?: TMediaContent | TContent;
  align_items?: TMediaItems | TItems;
  align_content?: TMediaItems | TItems;
};
export type rowPropsSize = {
  size: number;
  difference: number;
};
export type rowPropsSizeMedia = {
  size: TMediaNumber;
  difference: TMediaNumber;
};

const mediaSizes: {
  [K in TMedia]: string;
} = {
  xs: "0px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  "2xl": "1440px",
};
const mediaLists: {
  key: TMedia;
  minWidth: string;
}[] = [
  { key: "xs", minWidth: "0px" },
  { key: "sm", minWidth: "576px" },
  { key: "md", minWidth: "768px" },
  { key: "lg", minWidth: "992px" },
  { key: "xl", minWidth: "1200px" },
  { key: "2xl", minWidth: "1440px" },
];

const commonStyles = mediaLists.map((media) => {
  return css<columnProps>`
    @media (min-width: ${media.minWidth}) {
      flex-wrap: ${({ wrap }) =>
        typeof wrap === "object" ? wrap[media.key] : wrap ? wrap : "wrap"};
      flex-direction: ${({ direction }) =>
        typeof direction === "object"
          ? direction[media.key]
          : direction && direction};
      justify-content: ${({ content }) =>
        typeof content === "object" ? content[media.key] : content && content};
      align-items: ${({ align_items }) =>
        typeof align_items === "object"
          ? align_items[media.key]
          : align_items && align_items};
      align-content: ${({ align_content }) =>
        typeof align_content === "object"
          ? align_content[media.key]
          : align_content && align_content};
      gap: ${({ gap }) =>
        typeof gap === "object"
          ? `${!gap ? 0 : gap[media.key]}px`
          : `${gap}px`};
      row-gap: ${({ row_gap }) =>
        typeof row_gap === "object"
          ? `${!row_gap ? 0 : row_gap[media.key]}px`
          : `${row_gap}px`};
      column-gap: ${({ column_gap }) =>
        typeof column_gap === "object"
          ? `${!column_gap ? 0 : column_gap[media.key]}px`
          : `${column_gap}px`};
    }
  `;
});

export const Column = styled.div<columnProps>`
  && {
    display: flex;
    width: ${({ width }) => width};

    ${commonStyles}
  }
`;
export const Row = styled.div<rowProps>`
  && {
    display: flex;
    ${commonStyles}
    ${({ size }) => {
      return typeof size === "object"
        ? Object.keys(size).map((key) => {
            return css<rowPropsSizeMedia>`
              @media (min-width: ${mediaSizes[key]}) {
                width: ${({ size, difference = 0 }) => {
                  return `calc(${(size[key] / 12) * 100}% - ${
                    typeof difference === "object"
                      ? difference[key]
                      : difference || 0
                  }px)`;
                }};
              }
            `;
          })
        : typeof size === "number" &&
            css<rowPropsSize>`
              width: ${({ size = 12, difference = 0 }) => {
                return `calc(${(size / 12) * 100}% - ${difference}px)`;
              }};
            `;
    }}
  }
`;
