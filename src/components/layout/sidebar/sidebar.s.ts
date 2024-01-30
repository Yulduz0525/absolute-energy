import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const SidebarWrap = styled(motion.div)`
  z-index: 1000;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  max-width: 350px;
  width: 100%;
  background: #fff;
`;

export const SidebarBgClose = styled(motion.div)<{ open: Boolean }>`
  width: 100%;
  height: 100%;
  z-index: 500;
  position: fixed;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.9);
  transition: all 400ms;
  ${({ open }) =>
    open
      ? css`
          display: block;
        `
      : css`
          display: none;
        `};
`;

export const NavsList = styled.ul`
  width: fit-content;
  max-width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 16px;

  list-style: none;
  margin-top: 20px;
`;

export const NavItem = styled(motion.li)<{ active: boolean }>`
  && {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;

    a {
      display: flex;
      align-items: center;
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
        h5 {
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

export const SidebarCloseIcon = styled(motion.div)`
  display: flex;
  justify-content: end;

  svg {
    cursor: pointer;
  }
`;

export const LogoLink = styled.div`
  && {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    width: 100%;
    padding: 30px 50px 20px 30px;

    h5 {
      display: none;
      @media (min-width: 380px) {
        display: block;
      }
    }

    svg {
      width: 30px;
      height: 30px;
    }
  }
`;
