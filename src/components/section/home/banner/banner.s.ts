import styled from "styled-components";

export const BannerWrap = styled.div`
  && {
    width: 100%;
    padding: 0 0;
    height: 720px;
    background-image: url("images/banner-bg.png");
    background-repeat: no-repeat;
    background-size: cover;

    position: relative;

    & > div:first-child {
      height: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
      position: relative;
    }

    @media (max-width: 768px) {
      padding: 0;
    }
  }
`;

export const Statistics = styled.div`
  && {
    width: 100%;
    max-width: 992px;
    border-radius: 24px;
    background: rgba(255, 255, 255, 0.8);

    /* Box */
    box-shadow: 0px 20px 27px 0px rgba(0, 0, 0, 0.05);

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: -40px;
    z-index: 9;

    @media (max-width: 768px) {
      /* flex-direction: column; */
    }
  }
`;
export const StatisticItem = styled.div`
  && {
    display: flex;
    padding: 20px 32px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media (max-width: 768px) {
      padding: 8px;
    }
  }
`;

export const StatLine = styled.div`
  width: 2px;
  height: 160px;

  background: linear-gradient(
    0deg,
    rgba(37, 47, 64, 0) 0%,
    #515966 49.48%,
    rgba(37, 47, 64, 0) 100%
  );
`;

export const WaveAnimation = styled.div`
  && {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    width: 100%;
    height: 172px;

    z-index: 1;

    & > div {
      position: relative;
      width: 100%;
      height: 100%;

      .waves {
        position: absolute;
        width: 100%;
        height: 172px;
        min-height: 100px;
        max-height: 150px;
        bottom: 0;
        left: 0;
      }

      .parallax > use {
        animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
      }

      .parallax > use:nth-child(1) {
        animation-delay: -2s;
        animation-duration: 7s;
      }

      .parallax > use:nth-child(2) {
        animation-delay: -3s;
        animation-duration: 10s;
      }

      .parallax > use:nth-child(3) {
        animation-delay: -4s;
        animation-duration: 13s;
      }

      .parallax > use:nth-child(4) {
        animation-delay: -5s;
        animation-duration: 20s;
      }

      @keyframes move-forever {
        0% {
          transform: translate3d(-90px, 0, 0);
        }

        100% {
          transform: translate3d(85px, 0, 0);
        }
      }
    }
  }
`;
