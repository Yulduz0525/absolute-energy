import Image from "next/image";
import styled from "styled-components";

export const AboutUsWrap = styled.div`
  && {
    width: 100%;
  }
`;

export const DailyUsers = styled.div`
  padding: 48px 24px;
  border-radius: var(--block-border);
  background: var(--primary-500, #cd02ee);
  width: calc(40% - 12px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
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
