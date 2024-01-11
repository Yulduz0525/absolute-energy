import styled from "styled-components";

export const ApplyFormWrap = styled.section`
  && {
    background: linear-gradient(
        180deg,
        #242b33 10.42%,
        rgba(36, 43, 51, 0) 50.52%,
        #242b33 90.1%
      ),
      linear-gradient(
        0deg,
        rgba(36, 43, 51, 0.9) 0%,
        rgba(36, 43, 51, 0.9) 100%
      ),
      url("/images/apply-form-bg.png"), lightgray 50% / cover no-repeat;
    & > div {
      padding: 100px;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 32px;
    }

    @media (max-width: 768px) {
      & > div {
        padding: 36px 24px;
      }
    }
  }
`;
export const Title = styled.h1`
  /* HEADING2 */
  font-family: Lexend;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.8px;

  background: var(
    --gradient1,
    linear-gradient(239deg, #0094ff -1.81%, #cd02ee 89.62%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const Description = styled.p`
  color: var(--White, #fff);

  /* PARAGRAPH */
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
`;

export const CustomInput = styled.input`
  && {
    width: 100%;
    padding: 12px 20px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.2);

    overflow: hidden;
    color: var(--Dark-100, #bbbfc4);
    text-overflow: ellipsis;

    /* SMALL */
    font-family: Open Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const FormText = styled.p`
  width: 100%;
  color: #e7e7e7;
  text-align: center;

  /* TINY */
  font-family: Open Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const FormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 100%;
  padding: 12px 20px;
  border-radius: 12px;
  background: var(
    --gradient1,
    linear-gradient(239deg, #0094ff -1.81%, #cd02ee 89.62%)
  );

  color: var(--White, #fff);
  text-align: center;

  /* PARAGRAPH */
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    translate: -50% -50%;
    left: 50%;
  }
`;
