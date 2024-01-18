import styled from "styled-components";

export const SectionSubTitle = styled.h5`
  && {
    color: var(--Dark-500, #252f40);
    text-align: center;

    /* LEAD-TEXT */
    font-family: Montserrat;
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
    font-family: Montserrat;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.8px;
    span {
      background: var(
        --gradient1,
        linear-gradient(239deg, #0094ff -1.81%, #cd02ee 89.62%)
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;
export const SectionDescription = styled.p`
  && {
    color: var(--secondary-500, #0e2824);
    text-align: center;

    /* Body-1 */
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.5px;
  }
`;
