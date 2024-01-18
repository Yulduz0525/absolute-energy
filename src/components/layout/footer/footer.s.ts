import Link from "next/link";
import styled, { css } from "styled-components";

export const FooterWrap = styled.footer`
  && {
    width: 100%;
    background: var(--dark-green-500, #061210);

    & > div {
      padding: 64px 0;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 32px;
      & > a {
        display: flex;
        align-items: center;
        gap: 12px;

        text-align: center;

        /* H5 - 20px/SemiBold */
        font-family: Open Sans;
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
export const DividingLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--white, #fff);
`;

export const ListItem = styled(Link)<{ href: string }>`
  && {
    display: flex;
    align-items: center;
    gap: 16px;
    svg {
      width: 24px;
      min-width: 24px;
      height: 24px;
      path {
        stroke: #fff;
      }
    }
  }
`;
