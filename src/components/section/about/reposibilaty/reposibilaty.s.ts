import Image from "next/image";
import styled from "styled-components";

export const ReposibilatyWrap = styled.div`
  width: 100%;
`;

export const TeemWorkImage = styled(Image)`
  width: calc(50% - 16px);
  object-fit: cover;
  border-radius: var(--block-border);

  @media (max-width: 632px) {
    width: 100%;
  }
`;

export const ReposibilatyText = styled.div`
  && {
    p {
      color: var(--dark-200, #9b9fa7);

      /* LEAD-TEXT */
      font-family: Montserrat;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    strong {
      color: var(--dark-500, #252f40);

      /* HEADING6 */
      font-family: Montserrat;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    ul {
      padding-left: 24px;
      li {
        color: var(--dark-300, #6d747f);

        /* PARAGRAPH */
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px;
      }
    }
  }
`;
export const ServiceList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;
