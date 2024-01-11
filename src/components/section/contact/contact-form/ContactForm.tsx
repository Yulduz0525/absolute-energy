import React from "react";
import { ContactFormWrap, FormButton, FormInput, FormItem, MessageArea } from "./contact-form.s";
import Styles from "@/styles";

type Props = {};

export default function ContactForm({}: Props) {
  return (
    <ContactFormWrap>
      <Styles.Container>
        <Styles.Column width="100%" gap={48}>
          <Styles.Row size={{md: 6, xs: 12, lg: 6, "2xl": 6}} difference={{lg: 24, xs: 0}}>
            <FormItem htmlFor="">
              <span>ФИО *</span>
              <FormInput placeholder="Введите ФИО" />
            </FormItem>
          </Styles.Row>
          <Styles.Row size={{md: 6, xs: 12, lg: 6, "2xl": 6}} difference={{lg: 24, xs: 0}}>
            <FormItem htmlFor="">
              <span>Ваша почта *</span>
              <FormInput placeholder="example@yourmail.com" />
            </FormItem>
          </Styles.Row>
        </Styles.Column>
        <Styles.Column width="100%" gap={48}>
        <Styles.Row size={{md: 6, xs: 12, lg: 6, "2xl": 6}} difference={{lg: 24, xs: 0}}>
            <FormItem htmlFor="">
              <span>ФИО *</span>
              <FormInput placeholder="Введите ФИО" />
            </FormItem>
          </Styles.Row>
          <Styles.Row size={{md: 6, xs: 12, lg: 6, "2xl": 6}} difference={{lg: 24, xs: 0}}>
            <FormItem htmlFor="">
              <span>Ваша почта *</span>
              <FormInput placeholder="example@yourmail.com" />
            </FormItem>
          </Styles.Row>
        </Styles.Column>
        <Styles.Column width="100%">
          <FormItem htmlFor="">
            <span>Сообщение *</span>
            <MessageArea placeholder="Введите текст сообщении..." />
          </FormItem>
        </Styles.Column>
        <FormButton type="submit">Отправить</FormButton>
      </Styles.Container>
    </ContactFormWrap>
  );
}
