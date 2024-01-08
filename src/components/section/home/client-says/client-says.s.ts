import styled from "styled-components";

export const ClientSaysWrap = styled.section`
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
export const ImageCard = styled.div`
  && {
    position: relative;

    min-width: 400px;
    width: 400px;
    height: 400px;
    & > img:nth-child(1) {
      border-radius: 50% 0px 50% 50%;
      z-index: 9;
    }
    & > img:nth-child(2) {
      position: absolute;
      top: -56px;
      right: -32px;
      z-index: 1;
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;

      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: 8px solid var(--secondary-500, #0e2824);
      z-index: 0;
    }
  }
`;
export const Title = styled.h1`
  color: var(--Dark-500, #252f40);

  /* HEADING2 */
  font-family: Lexend;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.8px;
`;
export const Description = styled.p`
  color: var(--Dark-500, #252f40);

  /* LEAD-TEXT */
  font-family: Lexend;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
