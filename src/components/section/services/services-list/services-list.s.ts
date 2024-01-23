import styled from "styled-components";

export const ServicesListWrap = styled.section`
  && {
    width: 100%;
    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 32px;
    }
  }
`;

export const ServicesItem = styled.div`
  && {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    border-radius: var(--main-border);
    background: var(--White, #fff);

    & > img {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: var(--main-border);
    }
    h5,
    h6 {
      text-align: center;
    }
  }
`;
export const ServicesButton = styled.button`
  && {
    display: flex;
    padding: 16px 32px;
    align-items: center;
    gap: 16px;

    border-radius: var(--main-border);
    background: var(
      --gradient,
      linear-gradient(239deg, #0094ff -1.81%, #cd02ee 89.62%)
    );

    color: var(--White, #fff);

    /* HEADING6 */
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
export const ServicesHtml = styled.div`
  && {
    color: var(--dark-500, #252f40);
    p {
      /* SMALL */
      font-family: Montserrat;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    strong {
      font-weight: 700;
    }
    a {
      cursor: pointer;
      color: var(--secondary-500, #0094ff);
    }
  }
`;
