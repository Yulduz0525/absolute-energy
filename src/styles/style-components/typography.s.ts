import styled, { css } from "styled-components";
import { colors, TColors } from "@/constants";

export type TTypographyProps = {
  color?: TColors;
  align?: "center" | "end" | "justify" | "left" | "right" | "start";
  spanColor?: TColors;
};

const spanColorStyle = css<TTypographyProps>`
  && {
    span {
      ${({ spanColor }) => {
        return spanColor?.substring(0, 8) === "gradient"
          ? css`
              background: ${colors[spanColor]};
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            `
          : css`
              color: ${spanColor
                ? colors[spanColor]
                : "var(--dark-500, #252F40)"};
            `;
      }}
    }
  }
`;
const globalStyle = css<TTypographyProps>`
  ${({ color }) => {
    return color?.substring(0, 8) === "gradient"
      ? css`
          background: ${colors[color]};
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        `
      : css`
          color: ${color ? colors[color] : "var(--dark-500, #252F40)"};
        `;
  }}
  ${({ align }) =>
    align &&
    css`
      text-align: ${align};
    `}
  ${({ spanColor }) => spanColor && spanColorStyle}
  font-family: Montserrat;
  font-style: normal;
  line-height: normal;
`;

export const H1 = styled.h1<TTypographyProps>`
  && {
    ${globalStyle}

    /* HEADING1 */
    font-size: 48px;
    font-weight: 700;
    letter-spacing: -0.8px;

    @media (max-width: 425px) {
      font-size: 36px;
    }
  }
`;
export const H2 = styled.h2<TTypographyProps>`
  && {
    ${globalStyle}

    /* HEADING2 */
    font-size: 36px;
    font-weight: 700;
    letter-spacing: -0.8px;

    @media (max-width: 425px) {
      font-size: 30px;
    }
  }
`;
export const H3 = styled.h3<TTypographyProps>`
  && {
    ${globalStyle}

    /* HEADING3 */
    font-size: 30px;
    font-weight: 700;
    letter-spacing: -0.8px;

    @media (max-width: 425px) {
      font-size: 24px;
    }
  }
`; //DSDSD
export const H4 = styled.h4<TTypographyProps>`
  && {
    ${globalStyle}

    /* HEADING4 */
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.8px;

    @media (max-width: 425px) {
      font-size: 20px;
    }
  }
`;
export const H5 = styled.h5<TTypographyProps>`
  && {
    ${globalStyle}

    /* HEADING5 */
    font-size: 20px;
    font-weight: 600;

    @media (max-width: 425px) {
      font-size: 18px;
    }
  }
`;

export const H6 = styled.h6<TTypographyProps>`
  && {
    ${globalStyle}

    /* HEADING6 */
    font-size: 16px;
    font-weight: 600;
  }
`;
export const PARAGRAPH = styled.h6<TTypographyProps>`
  && {
    ${globalStyle}

    /* PARAGRAPH */
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
  }
`;
export const LEAD_TEXT = styled.h6<TTypographyProps>`
  && {
    ${globalStyle}

    /* LEAD-TEXT */
    font-size: 20px;
    font-weight: 400;
  }
`;
export const SMALL = styled.h6<TTypographyProps>`
  && {
    ${globalStyle}

    /* SMALL */
    font-size: 14px;
    font-weight: 400;
  }
`;
export const TINY = styled.h6<TTypographyProps>`
  && {
    ${globalStyle}

    /* TINY */
    font-size: 12px;
    font-weight: 400;
  }
`;
