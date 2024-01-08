import styled from "styled-components";

export const SeeMore = styled.button`
  && {
    position: relative;

    height: 48px;
    padding: 0px 24px;
    font: var(--typography7-500);
    color: var(--grey-900, #101010);

    display: inline-flex;
    align-items: center;
    gap: 10px;

    svg {
      width: 16px;
      height: 16px;
      path {
        stroke: var(--grey-900, #101010);
        strokeWidth: 1.6px;
      }
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;

      width: 48px;
      height: 48px;
      border-radius: 24px;
      background: var(
        --gradient-2,
        linear-gradient(135deg, #ee3963 0%, #9e77ed 100%)
      );
      box-shadow: 0px 8px 32px 0px rgba(38, 38, 38, 0.2);
      transition: all 250ms ease-in-out;
    }

    &:hover {
      color: var(--white, #fff);
      path {
        stroke: var(--white, #fff);
      }
      &::after {
        width: 100%;
      }
    }
  }
`;
