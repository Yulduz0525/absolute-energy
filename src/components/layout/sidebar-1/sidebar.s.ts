import styled, { css } from "styled-components";

export const SidebarWrap = styled.div<{ open: Boolean }>`
  && {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;
    transition: 0;
    ${({ open }) =>
      open
        ? css`
            z-index: 99;
            background-color: rgba(0, 0, 0, 0.9);
          `
        : css`
            z-index: -1;
            background-color: rgba(0, 0, 0, 0);
          `}
  }
`;

export const CloseButton = styled.button`
  border: none;
  outline-width: 0;
  cursor: pointer;
  width: fit-content;
`;

export const Content = styled.div<{ open: Boolean }>`
  transition: 0;
  translate: ${({ open }) => (open ? "0" : "100%")} 0;
  transition: 300ms;
  width: 300px;
  max-width: 100vw;
  height: 100%;
  background-color: #ddd;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const NavsList = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  li {
    list-style: none;
  }
`;
