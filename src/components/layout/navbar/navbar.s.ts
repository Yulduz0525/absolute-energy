import styled, { css } from "styled-components";

export const NavbarWrap = styled.nav`
  && {
    width: 100%;
    position: fixed;
    top: 20px;
    left: 0;
    right: 0;

    z-index: 10;
    & > div {
      padding: 8px 16px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      border-radius: 24px;
      background: rgba(255, 255, 255, 0.8);

      /* Navbar */
      box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.16);
      & > a {
        display: flex;
        align-items: center;
        gap: 12px;

        text-align: center;

        /* H5 - 20px/SemiBold */
        font-family: Lexend;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;

        background: var(
          --gradient1,
          linear-gradient(239deg, #0094ff -1.81%, #cd02ee 89.62%)
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavItem = styled.li`
  && {
    list-style: none;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
      padding: 12px 20px;
      transition: all ease-in-out 250ms;

      color: var(--Dark-500, #252f40);

      /* HEADING6 */
      font-family: Lexend;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
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
        width: 90%;
      }
    }
  }
`;