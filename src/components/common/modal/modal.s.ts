import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const ModalWrap = styled(motion.div)`
  && {
    position: fixed;
    inset: 0;

    width: 100%;
    height: 100vh;

    background: rgba(0, 0, 0, 0.48);

    display: flex;
    justify-content: center;

    overflow-y: auto;
    overflow-x: hidden;

    padding: 64px 0;
  }
`;

export const ModalBlock = styled(motion.div)<{
  animate: any;
  transition: any;
}>`
  && {
    @media (min-width: 320px) {
      width: clamp(296px, 80%, 394px);
    }
    @media (min-width: 430px) {
      width: clamp(394px, 70%, 688px);
    }
    @media (min-width: 744px) {
      width: clamp(688px, 50%, 920px);
    }

    max-width: 95vw;
    height: fit-content;

    padding: 32px;
    background: var(--White, #fff);
    border-radius: var(--block-border);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;
export const CloseBtn = styled.button`
  padding: 20px 32px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  border-radius: var(--block-border);
  background: var(--Black, #000);

  color: var(--White, #fff);
  text-align: center;

  /* HEADING5 */
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
