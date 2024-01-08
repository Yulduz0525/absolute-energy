import styled, { css } from "styled-components";

export const ServicesWrap = styled.section`
  && {
    width: 100%;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 32px;
    }
  }
`;
export const ServicesCard = styled.div<{ active?: boolean }>`
  && {
    padding: 38px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;

    border-radius: 16px;

    ${({ active }) =>
      active
        ? css`
            background: var(
              --gradient1,
              linear-gradient(239deg, #0094ff -1.81%, #cd02ee 89.62%)
            );
            h1,
            p,
            h3 {
              color: var(--White, #fff);
            }
            path {
              stroke: var(--White, #fff);
            }
            button {
              background: var(--Dark-900, #10141b);
              border: 1px solid #0000;
              color: var(--White, #fff);
            }
          `
        : css`
            background: var(--White, #fff);
            h1,
            p,
            h3 {
              color: var(--Black, #000);
            }
            path {
              stroke: var(--Secondary-500, #0094ff);
            }
            button {
              background: transparent;
              border: 1px solid var(--Secondary-100, #b0deff);
              color: var(--Secondary-500, #0094ff);
            }
          `}
  }
`;
export const Title = styled.h1`
  width: 100%;

  text-align: center;

  /* HEADING4 */
  font-family: Lexend;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.8px;
`;
export const Description = styled.p`
  width: 100%;

  text-align: center;

  /* LEAD-TEXT */
  font-family: Lexend;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const ListItem = styled.h3`
  && {
    display: flex;
    align-items: center;
    gap: 16px;

    /* PARAGRAPH */
    font-family: Lexend;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 162.5% */

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
export const CustomBtn = styled.button`
  && {
    width: 100%;
    padding: 16px 24px;
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    /* HEADING5 */
    font-family: Lexend;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
