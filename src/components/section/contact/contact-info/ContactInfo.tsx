import { FC } from "react";
import { ContactInfoWrap, ContactText } from "./contact-info.s";
import Styles, { Typography } from "@/styles";

interface IContactInfoProps {}

export const ContactInfo: FC<IContactInfoProps> = (props) => {
  return (
    <ContactInfoWrap>
      <Styles.Container>
        <Styles.Row
          size={{ xs: 12, lg: 6 }}
          difference={{ xs: 0, lg: 12 }}
          gap={24}
        >
          <Styles.Column width="100%" gap={16}>
            <Typography.H4 color="dark500">Contact Info</Typography.H4>
            <Styles.Column width="100%" gap={12} direction="column">
              <ContactText>
                Адрес:{" "}
                <Styles.Subtext>
                  Istiqbol ko'chasi 113, Тоshkent, Toshkent
                </Styles.Subtext>
              </ContactText>
              <ContactText>
                Тел: <Styles.Subtext> +998951455555</Styles.Subtext>
              </ContactText>
              <ContactText>
                Телеграмма: <Styles.Subtext> +998951455555</Styles.Subtext>
              </ContactText>
              <ContactText>
                Электронная почта:{" "}
                <Styles.Subtext>info@aenergy.uz</Styles.Subtext>
              </ContactText>
            </Styles.Column>
          </Styles.Column>
        </Styles.Row>
        <Styles.Row size={{ xs: 12, lg: 6 }} difference={{ xs: 0, lg: 12 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5994.659460739598!2d69.28853!3d41.30169!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE4JzA2LjEiTiA2OcKwMTcnMTguNyJF!5e0!3m2!1suz!2s!4v1706172514334!5m2!1suz!2s"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Styles.Row>
      </Styles.Container>
    </ContactInfoWrap>
  );
};
