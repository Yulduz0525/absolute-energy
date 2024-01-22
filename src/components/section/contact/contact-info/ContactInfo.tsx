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
                Address:{" "}
                <Styles.Subtext>
                  No.2 Industry North Road, North Industrial Park, Songshan
                  Lake, Dongguan, Guangdong, China
                </Styles.Subtext>
              </ContactText>
              <ContactText>
                Tel:{" "}
                <Styles.Subtext>+(86)-769-22780359 / 22780357</Styles.Subtext>
              </ContactText>
              <ContactText>
                Fax: <Styles.Subtext>+(86)-769-22780357</Styles.Subtext>
              </ContactText>
              <ContactText>
                E-mail: <Styles.Subtext>sales@honnypower.com</Styles.Subtext>
              </ContactText>
            </Styles.Column>
          </Styles.Column>
          <Styles.Column width="100%" gap={16}>
            <Typography.H4 color="dark500">Contact Info</Typography.H4>
            <Styles.Column width="100%" gap={12} direction="column">
              <ContactText>
                Address:{" "}
                <Styles.Subtext>
                  No.2 Industry North Road, North Industrial Park, Songshan
                  Lake, Dongguan, Guangdong, China
                </Styles.Subtext>
              </ContactText>
              <ContactText>
                Tel:{" "}
                <Styles.Subtext>+(86)-769-22780359 / 22780357</Styles.Subtext>
              </ContactText>
              <ContactText>
                Fax: <Styles.Subtext>+(86)-769-22780357</Styles.Subtext>
              </ContactText>
              <ContactText>
                E-mail: <Styles.Subtext>sales@honnypower.com</Styles.Subtext>
              </ContactText>
            </Styles.Column>
          </Styles.Column>
        </Styles.Row>
        <Styles.Row size={{ xs: 12, lg: 6 }} difference={{ xs: 0, lg: 12 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11988.366614334664!2d69.22815304999999!3d41.3068697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suz!2s!4v1705955103420!5m2!1suz!2s"
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
