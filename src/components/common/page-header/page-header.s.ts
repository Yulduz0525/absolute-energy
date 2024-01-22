import styled from "styled-components";

export const PageHeaderWrap = styled.section`
  && {
    width: 100%;
    & > div {
      background-image: url("/images/page-header-bg.png");
      background-repeat: no-repeat;
      background-size: cover;

      padding: 64px 32px;
      border-radius: var(--block-border);

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 18px;

      h1,
      h6 {
        max-width: 768px;
        text-align: center;
      }
    }
  }
`;
