import styled, { css } from "styled-components";

export const PortfoliosWrap = styled.div`
  && {
    width: 100%;
    & > div {
      display: flex;
      align-items: center;
      gap: 32px;
    }

    @media (max-width: 768px) {
      & > div {
        flex-direction: column;
      }
    }
  }
`;

export const InfoBlock = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 36px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Title = styled.h3`
  color: var(--secondary-500, #0e2824);

  /* H3 */
  font-family: Lexend;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const Description = styled.h6`
  color: var(--Dark-100, #bbbfc4);

  /* HEADING6 */
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const InfoItem = styled.p`
  color: var(--Dark-300, #6d747f);

  /* PARAGRAPH */
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
`;

export const PositionBtn = styled.button`
  && {
    padding: 12px;
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 250ms ease-in-out;
    &:hover {
      background: var(--Dark-50, #e9eaec);
    }
  }
`;

export const CarouselList = styled.div`
  width: fit-content;
  height: 480px;
  user-select: none;

  position: relative;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 48px;
`;

export const CarouselItem = styled.div<{
  translate: number;
  collapsed: boolean;
  bg: string;
}>`
  && {
    display: flex;
    align-items: flex-end;
    gap: 12px;
    position: absolute;
    translate: ${({ translate }) => translate}px 0;

    transition: all 250ms ease-in-out;

    width: 300px;
    padding: 24px;
    border-radius: 24px;
    background: ${({ bg }) => `url(${bg}), lightgray 50% / cover no-repeat`};
    background-size: cover;

    ${({ collapsed }) =>
      collapsed
        ? css`
            /* translate: 0 0 !important; */
            height: 480px;
            h1,
            button {
              opacity: 1;
            }
          `
        : css`
            height: 420px;
            h1,
            button {
              opacity: 0;
            }
          `}
  }
`;
export const CarouselTitle = styled.h1`
  && {
    padding: 32px 16px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.72);
    backdrop-filter: blur(1.5px);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    overflow: hidden;
    color: var(--Dark-500, #252f40);
    text-overflow: ellipsis;

    /* HEADING4 */
    font-family: Lexend;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.8px;

    transition: all 250ms ease-in-out;
  }
`;
export const CarouselBtn = styled.button`
  && {
    width: 48px;
    min-width: 48px;
    height: 48px;
    border-radius: 12px;
    background: var(--dark-green-500, #061210);

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 24px;
      height: 24px;
      path {
        stroke: var(--White, #fff);
      }
    }
    transition: all 250ms ease-in-out;
  }
`;
