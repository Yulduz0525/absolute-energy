import styled from "styled-components";

export const LayoutWrap = styled.div`
  && {
    min-height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 72px;
    & > main {
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 72px;
    }
  }
`;
