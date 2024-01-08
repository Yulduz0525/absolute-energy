import styled, { css } from "styled-components";

export const CarouselWrap = styled.div`
  && {
    width: 65%;
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
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;

    ${({ collapsed }) =>
      collapsed
        ? css`
            /* translate: 0 0 !important; */
            height: 580px;
          `
        : css`
            height: 480px;
          `}
  }
`;
