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

    h6 {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
    }

    ${({ active }) =>
      active
        ? css`
            background: var(
              --gradient1,
              linear-gradient(239deg, #0094ff -1.81%, #cd02ee 89.62%)
            );
            h4,
            h6 {
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
