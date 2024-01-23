import styled from "styled-components";

export const StatisticsWrap = styled.div`
  && {
    width: 100%;
    height: calc(auto + 1rem);
    z-index: 9;

    @media (min-width: 768px) {
      height: fit-content;

      position: absolute;
      bottom: 6vh;
      left: 0;
      right: 0;
    }

    & > div {
      max-width: 992px;

      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      @media (min-width: 768px) {
        border-radius: var(--block-border);
        background: rgba(255, 255, 255, 0.8);
        box-shadow: 0px 20px 27px 0px rgba(0, 0, 0, 0.05);
      }
    }
  }
`;
export const StatisticItem = styled.div`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;

    padding: 20px 32px;

    width: 100%;
    @media (min-width: 576px) {
      width: 50%;
    }
    @media (min-width: 768px) {
      width: calc(33.3333% - 2px);
    }
  }
`;

export const StatLine = styled.div`
  width: 90%;
  max-width: 260px;
  height: 2px;

  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 2px;
    min-width: 2px;
    height: 160px;
    background: linear-gradient(
      0deg,
      rgba(37, 47, 64, 0) 0%,
      #515966 49.48%,
      rgba(37, 47, 64, 0) 100%
    );
  }
`;
