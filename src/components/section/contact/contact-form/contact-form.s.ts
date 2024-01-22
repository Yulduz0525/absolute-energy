import styled from "styled-components";

export const ContactFormWrap = styled.form`
  && {
    width: 100%;
    display: block;

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 50px;
    }
  }
`;

export const FormInput = styled.input`
  padding: 24px 32px;
  width: 100%;

  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;

  border-radius: var(--main-border);
  border: 1px solid var(--dark-100, #bbbfc4);
  background: var(--White, #fff);

  color: var(--dark-100, #bbbfc4);

  /* LEAD-TEXT */
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const FormItem = styled.label`
  width: 100%;

  span {
    margin-bottom: 12px;
    display: block;
    color: var(--dark-500, #252f40);

    /* HEADING5 */
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const MessageArea = styled.textarea`
  padding: 24px 32px;
  width: 100%;

  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;

  border-radius: var(--main-border);
  border: 1px solid var(--dark-100, #bbbfc4);
  background: var(--White, #fff);

  color: var(--dark-100, #bbbfc4);

  /* LEAD-TEXT */
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  height: 350px;
`;

export const FormButton = styled.button`
  padding: 20px 48px;
  border-radius: 50px;
  background: var(--Black, #000);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: var(--White, #fff);
  text-align: center;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 145.5%; /* 29.1px */
`;
