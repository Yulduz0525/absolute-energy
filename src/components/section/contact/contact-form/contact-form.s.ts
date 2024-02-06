import styled from "styled-components";

export const ContactFormWrap = styled.form`
  && {
    width: 100%;
    max-width: 992px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    margin: 0 auto;
    padding: 0 16px;
  }
`;

export const FormInput = styled.input`
  padding: 16px 24px;
  width: 100%;

  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;

  border-radius: var(--big-border);
  border: 1px solid var(--dark50);
  background: var(--White, #fff);

  color: var(--dark500, #bbbfc4);

  transition: all 200ms;

  /* LEAD-TEXT */
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:focus {
    box-shadow: 0px 0px 0px 2px var(--primary_500);
  }
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
  padding: 16px 24px;
  width: 100%;
  max-width: 100%;
  max-height: 400px;
  min-height: 200px;

  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;

  border-radius: var(--big-border);
  border: 1px solid var(--dark50);
  background: var(--White, #fff);

  color: var(--dark500, #bbbfc4);

  transition: all 200ms;

  /* LEAD-TEXT */
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  height: 350px;

  &:focus {
    box-shadow: 0px 0px 0px 2px var(--primary_500);
  }
`;

export const FormButton = styled.button`
  width: fit-content;

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
