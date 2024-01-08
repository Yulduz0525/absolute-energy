import styled, { css } from "styled-components";

const sizeLarge = css`
  && {
    height: 48px;
    padding: 10px 28px;
    gap: 10px;

    font: var(--typography7-500);
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
const sizeDefault = css`
  && {
    height: 36px;
    padding: 10px 24px;
    gap: 8px;

    font: var(--typography9-500);
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;
const sizeSmall = css`
  && {
    height: 28px;
    padding: 2px 16px;
    gap: 4px;
    font: var(--typography10-500);
    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

const stylePrimary = css`
  && {
    background: var(--primary-500, #7a5af8);
    color: var(--white, #fff);

    path {
      stroke: var(--white, #fff);
    }
    &:hover {
      background: var(--primary-400, #957bf9);
    }
  }
`;
const styleDefault = css`
  && {
    border: 1px solid var(--primary-500, #7a5af8);
    color: var(--primary-500, #7a5af8);
    path {
      stroke: var(--primary-500, #7a5af8);
    }
    &:hover {
      background: var(--primary-50, #f2effe);
    }
  }
`;
const styleText = css`
  && {
    color: var(--primary-500, #7a5af8);
    path {
      stroke: var(--primary-500, #7a5af8);
    }
    &:hover {
      background: var(--primary-50, #f2effe);
    }
  }
`;

type propsBtn = {
  size?: "small" | "default" | "large";
  typeBtn?: "primary" | "default" | "text";
};

export const Button = styled.button<propsBtn>`
  && {
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 6px;
    transition: all 250ms ease-in-out;

    ${({ size }) =>
      size === "small" ? sizeSmall : size === "large" ? sizeLarge : sizeDefault}
    ${({ typeBtn }) =>
      typeBtn === "primary"
        ? stylePrimary
        : typeBtn === "text"
        ? styleText
        : styleDefault}
  }
`;
