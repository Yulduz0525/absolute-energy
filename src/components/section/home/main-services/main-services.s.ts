import styled from "styled-components";

export const MainServicesWrap = styled.div`
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
export const IconBlock = styled.div<{ id: number }>`
  && {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid var(--Dark-50, #e9eaec);

    &::before {
      top: 0;
      left: 0;
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      border-right: ${({ id }) =>
        id % 2 === 0
          ? `1px solid var(--Primary-500, #cd02ee)`
          : `1px solid var(--Secondary-500, #0094FF)`};
      border-radius: 50%;
      transform: ${({ id }) => `rotate(calc(${id} * 45deg))`};
    }

    svg {
      width: 40px;
      height: 40px;
      path {
        stroke: ${({ id }) =>
          id % 2 === 0
            ? `var(--Primary-500, #cd02ee)`
            : `var(--Secondary-500, #0094FF)`};
      }
    }
  }
`;
