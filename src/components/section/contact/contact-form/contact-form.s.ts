import styled from "styled-components";

export const ContactFormWrap = styled.form`
  && {
    width: 100%;
    display: block;

    & > div {
      display: flex;
      flex-direction: column;
      gap: 50px;
    }
  }
`;

export const FormInput = styled.input`
  height: 80px;
  border-radius: 20px;
  border: 1px solid #dcdcdc;
  padding: 0 16px;
  background: #fff;
  width: 100%;
  font: var(--typography7-400);
`;

export const FormItem = styled.label`
  width: 100%;

  span {
    margin-bottom: 12px;
    display: block;
    font: var(--typography6-400);
    color: #242331;
  }
`;

export const MessageArea = styled.textarea`
  width: 100%;
  border-radius: 20px;
  border: 1px solid #dcdcdc;
  padding: 16px;
  background: #fff;
  font: var(--typography7-400);
  height: 350px;
  resize: none;
`;

export const FormButton = styled.button`
  display: flex;
  width: 228px;
  padding: 25px 38px 26px 38px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 50px;
  background: #2f2f2f;
  color: #fff;
  text-align: center;
  font-family: Open Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 145.5%; /* 29.1px */
`;
