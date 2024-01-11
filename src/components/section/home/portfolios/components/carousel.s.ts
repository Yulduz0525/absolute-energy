import styled, { css } from "styled-components";

export const CarouselWrap = styled.div`
  && {
    width: 65%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;
export const CarouselList = styled.div`
  width: fit-content;
  height: 580px;

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

    width: 370px;
    padding: 24px;
    border-radius: 24px;
    background: ${({ bg }) => `url(${bg}), lightgray 50% / cover no-repeat`};
    background-size: cover;

    ${({ collapsed }) =>
      collapsed
        ? css`
            /* translate: 0 0 !important; */
            height: 580px;
            h1,
            button {
              opacity: 1;
            }
          `
        : css`
            height: 480px;
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
