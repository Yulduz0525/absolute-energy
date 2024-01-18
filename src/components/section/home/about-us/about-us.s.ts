import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const AboutUsWrap = styled.div`
  && {
    width: 100%;
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 48px;
    }
  }
`;

export const AboutImgBlock = styled.div`
  && {
    width: 100%;
    max-width: 320px;
    min-width: 320px;

    display: flex;
    justify-content: center;
    position: relative;
    & > img:nth-child(2) {
      z-index: 0;

      position: absolute;
      top: -54px;
      left: 24px;
    }
    & > img:nth-child(3) {
      z-index: 0;

      position: absolute;
      top: -8px;
      right: -40px;
    }

    &::before {
      content: "";
      position: absolute;
      left: -40px;
      bottom: -32px;

      width: 300px;
      height: 300px;
      border-radius: 50%;
      background: linear-gradient(
        80deg,
        #fae6fd 8.96%,
        rgba(255, 255, 255, 0) 86.17%
      );
    }
  }
`;

export const TeemImage = styled(Image)`
  width: 100%;
  margin: 0 auto;
  z-index: 9;
  border-radius: 50%;
`;
export const SubTitleLine = styled.div`
  width: 120px;
  height: 2px;
  background: var(
    --gradient-line,
    linear-gradient(90deg, #33a9ff -1.96%, rgba(255, 255, 255, 0) 99.72%)
  );
`;
export const AboutBtn = styled(Link)`
  && {
    display: flex;
    align-items: center;
    gap: 16px;

    color: var(--Secondary-500, #0094ff);

    /* PARAGRAPH */
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
    svg {
      width: 24px;
      height: 24px;
      path {
        stroke: var(--Secondary-500, #0094ff);
      }
    }
  }
`;
