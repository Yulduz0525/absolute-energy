import styled from "styled-components";

export const PortfoliosWrap = styled.div`
  && {
    width: 100%;
    & > div {
      display: flex;
      align-items: center;
      gap: 24px;
    }

    @media (max-width: 768px) {
      & > div {
        flex-direction: column;
      }
    }
  }
`;

export const InfoBlock = styled.div`
  width: 35%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Title = styled.h3`
  color: var(--secondary-500, #0e2824);

  /* H3 */
  font-family: Lexend;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const Description = styled.h6`
  color: var(--Dark-100, #bbbfc4);

  /* HEADING6 */
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const InfoItem = styled.p`
  color: var(--Dark-300, #6d747f);

  /* PARAGRAPH */
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
`;
