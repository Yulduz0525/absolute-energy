import styled from "styled-components";

export const SectionSubTitle = styled.h5`
  && {
    color: var(--Dark-500, #252f40);
    text-align: center;

    /* LEAD-TEXT */
    font-family: Lexend;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: -16px;
      transform: translateX(-50%);

      width: 120px;
      height: 2px;
      background: var(
        --gradient-line,
        linear-gradient(
          90deg,
          rgba(255, 255, 255, 0) -1.96%,
          #d735f1 49.94%,
          rgba(255, 255, 255, 0) 99.72%
        )
      );
    }
  }
`;
export const SectionTitle = styled.h1`
  && {
    color: var(--Dark-500, #252f40);
    text-align: center;

    /* HEADING1 */
    font-family: Lexend;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.8px;
  }
`;
