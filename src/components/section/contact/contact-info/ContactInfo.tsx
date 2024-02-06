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
            <Typography.H3 color="dark500">
              Контактная информация:
            </Typography.H3>
            <Styles.Column width="100%" gap={12} direction="column">
              <Typography.H5>
                Адрес:{" "}
                <Styles.Subtext style={{ opacity: "60%" }}>
                  г.Ташкент, ул.Бадамзар,д.78
                </Styles.Subtext>
              </Typography.H5>
              <Typography.H5>
                Тел:{" "}
                <Styles.Subtext style={{ opacity: "60%" }}>
                  {" "}
                  +998951455555
                </Styles.Subtext>
              </Typography.H5>

              <Typography.H5>
                Электронная почта:{" "}
                <Styles.Subtext style={{ opacity: "60%" }}>
                  info@aenergy.uz
                </Styles.Subtext>
              </Typography.H5>
            </Styles.Column>
          </Styles.Column>
        </Styles.Row>
        <Styles.Row size={{ xs: 12, lg: 6 }} difference={{ xs: 0, lg: 12 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d508.6977184233135!2d69.29477279070623!3d41.3410148233342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDIwJzI3LjgiTiA2OcKwMTcnNDEuMSJF!5e0!3m2!1suz!2s!4v1707217855914!5m2!1suz!2s"
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
