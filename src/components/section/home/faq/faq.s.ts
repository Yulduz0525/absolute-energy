import styled from "styled-components";

export const FAQWrap = styled.div`
  width: 100%;
`;

export const Question = styled.div<{ expanded: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  .header {
    padding: 10px 0px;

    display: flex;
    align-items: center;
    gap: 16px;
    h6 {
      width: 100%;
    }
    svg {
      rotate: ${({ expanded }) => (expanded ? "180deg" : "0")};
    }
  }
  & > h6 {
    transition: all 250ms ease-in-out;
    padding-left: 16px;
    max-height: ${({ expanded }) => (expanded ? "500px" : "0")};
    overflow: ${({ expanded }) => (expanded ? "auto" : "hidden")};
  }
`;

export const ExpandButton = styled.button`
  border: none;
  outline-width: 0;

  svg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
  }
`;
