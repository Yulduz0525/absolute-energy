import styled from "styled-components";

export const ContactInfoWrap = styled.section`
  && {
    width: 100%;

    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 24px;

      @media (max-width: 991px) {
        flex-direction: column;
      }
    }
  }
`;

export const ContactText = styled.h5`
  && {
    color: var(--dark-500, #252f40);

    /* HEADING6 */
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    span {
      font-size: 14px;
      font-weight: 400;
    }
  }
`;
