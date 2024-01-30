import Link from "next/link";
import styled, { css } from "styled-components";

export const NavbarWrap = styled.nav<{ main: boolean }>`
  && {
    width: 100%;
    z-index: 10;

    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    ${({ main }) =>
      main
        ? css`
            position: fixed;
            top: 20px;
            left: 0;
            right: 0;

            & > div {
              padding: 8px 16px;

              border-radius: 24px;
              background: rgba(255, 255, 255, 0.8);

              /* Navbar */
              box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.16);
            }
          `
        : css`
            & > div {
              padding: 16px 0;
            }
          `}
  }
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
      @media (min-width: 768px) {
        display: none;
      }
      @media (min-width: 915px) {
        display: block;
      }
    }
  }
`;
export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuButton = styled.button`
  width: fit-content;
  outline-width: 0;
  border: none;

  svg {
    width: 35px;
    height: 35px;
  }

  @media (min-width: 768px) {
    display: none;
  }

  path {
    stroke: #222;
  }
`;
export const NavItem = styled.li<{ active: boolean }>`
  && {
    list-style: none;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
      padding: 12px 20px;
      transition: all ease-in-out 250ms;
    }

    @media (max-width: 768px) {
      a {
        display: none !important;
      }
    }

    &:after {
      content: "";
      display: block;
      transition: width ease-in-out 250ms;
      margin: 0 auto;
      width: 0;
      height: 2px;
      background: var(
        --gradient1,
        linear-gradient(239deg, #0094ff -1.81%, #cd02ee 89.62%)
      );
    }

    &:hover {
      a {
        background: var(
          --gradient1,
          linear-gradient(239deg, #0094ff -1.81%, #cd02ee 89.62%)
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      &:after {
        ${({ active }) =>
          active
            ? css`
                width: 20%;
              `
            : css`
                width: 90%;
              `}
      }
    }

    ${({ active }) =>
      active &&
      css`
        a {
          background: var(
            --gradient1,
            linear-gradient(239deg, #0094ff -1.81%, #cd02ee 89.62%)
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        &:after {
          width: 20%;
        }
      `}
  }
`;
