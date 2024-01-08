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
    max-width: 340px;
  }
`;

export const SubTitle = styled.h5`
  color: var(--Black, #000);

  /* HEADING5 */
  font-family: Lexend;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const SubTitleLine = styled.div`
  width: 120px;
  height: 2px;
  background: var(
    --gradient-line,
    linear-gradient(90deg, #33a9ff -1.96%, rgba(255, 255, 255, 0) 99.72%)
  );
`;
export const Title = styled.h1`
  color: var(--Black, #000);

  /* HEADING1 */
  font-family: Lexend;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.8px;
`;
export const Description = styled.p`
  color: var(--Black, #000);

  /* LEAD-TEXT */
  font-family: Lexend;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const AboutBtn = styled.button`
  && {
    display: flex;
    align-items: center;
    gap: 16px;

    color: var(--Secondary-500, #0094ff);

    /* PARAGRAPH */
    font-family: Lexend;
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
