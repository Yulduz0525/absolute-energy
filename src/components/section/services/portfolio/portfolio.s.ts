import styled from "styled-components";

export const PortfolioWrap = styled.section`
  && {
    width: 100%;
    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 32px;

      img {
        object-fit: cover;
        border-radius: var(--main-border);
      }
    }
  }
`;
