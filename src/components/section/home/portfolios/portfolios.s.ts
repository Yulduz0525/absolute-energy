import { Typography } from "@/styles";
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

export const PositionBtn = styled.button`
  && {
    padding: 12px;
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 250ms ease-in-out;
    &:hover {
      background: var(--dark25);
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
            h4,
            button {
              opacity: 1;
            }
          `
        : css`
            height: 420px;
            h4,
            button {
              opacity: 0;
            }
          `}
  }
`;
export const CarouselTitle = styled(Typography.H5)`
  && {
    padding: 32px 16px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.72);
    backdrop-filter: blur(1.5px);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    color: var(--Dark-500, #252f40);

    transition: all 250ms ease-in-out;
  }
`;
