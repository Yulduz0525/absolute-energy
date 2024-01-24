import Link from "next/link";
import styled, { css } from "styled-components";

export const SidebarWrap = styled.div<{ open: Boolean }>`
  && {
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    justify-content: flex-end;

    transition: all ease-in-out 250ms;

    ${({ open }) =>
      open
        ? css`
            z-index: 99;
            & > div {
              transition: all ease-in-out 250ms;
              transform: translateX(0);
            }
          `
        : css`
            z-index: -1;
            & > div {
              transform: translateX(200%);
            }
          `};
  }
`;

export const Content = styled.div<{ open: Boolean }>`
  width: 380px;
  max-width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const CloseButton = styled.button`
  border: none;
  outline-width: 0;
  cursor: pointer;
  width: fit-content;
`;
export const LogoLink = styled(Link)`
  && {
    display: flex;
    align-items: center;
    gap: 8px;
    h5 {
      display: none;
      @media (min-width: 380px) {
        display: block;
      }
    }
  }
`;
export const NavsList = styled.ul`
  width: fit-content;
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  list-style: none;
`;

export const NavItem = styled.li<{ active: boolean }>`
  && {
    position: relative;

    a {
      display: flex;
      align-items: flex-start;
      gap: 12px;

      padding: 12px 0;
      transition: all ease-in-out 250ms;
    }
    &:after {
      content: "";
      display: block;
      transition: width ease-in-out 250ms;
      width: 0;
      height: 2px;
      background: var(
        --gradient1,
        linear-gradient(239deg, #0094ff -1.81%, #cd02ee 89.62%)
      );
    }

    &:hover {
      h5 {
        background: var(
          --gradient1,
          linear-gradient(239deg, #0094ff -1.81%, #cd02ee 89.62%)
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      &::after {
        width: 90%;
      }
    }

    ${({ active }) =>
      active &&
      css`
        h5 {
          background: var(
            --gradient1,
            linear-gradient(239deg, #0094ff -1.81%, #cd02ee 89.62%)
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        &::after {
          width: 30%;
        }
        &:hover::after {
          width: 30%;
        }
      `}
  }
`;
