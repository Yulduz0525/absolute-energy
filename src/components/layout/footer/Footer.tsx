import { FC } from "react";
import { DividingLine, FooterWrap, ListItem } from "./footer.s";
import Styles, { Typography } from "@/styles";
import Link from "next/link";
import Image from "next/image";
import mock from "@/mock";

interface IFooterProps {}

export const Footer: FC<IFooterProps> = ({}) => {
  
  return (
    <FooterWrap>
      <Styles.Container>
        <Link href="/">
          <Styles.Column align_items="center" gap={12}>
            <Image
              height={48}
              width={48}
              src="/images/Logo.png"
              alt="Brand logo"
            />
            <Typography.H5 color="gradient">ABSOLUTE ENERGY</Typography.H5>
          </Styles.Column>
        </Link>
        <DividingLine />
        <Styles.Column width="100%" gap={{ xs: 24, sm: 16 }}>
          <Styles.Row
            size={{ xs: 12, md: 6, lg: 3, "2xl": 2 }}
            difference={{ xs: 0, md: 12, lg: 13 }}
          >
            <Styles.Column
              width="100%"
              gap={20}
              style={{ alignContent: "flex-start" }}
            >
              <Typography.H5 color="white">
                {mock.navFooter.contactsTitle}
              </Typography.H5>
              <Styles.Column width="100%" gap={16}>
                {mock.navFooter.contacts.map((contact) => (
                  <ListItem href={contact.href}>
                    <contact.icon />
                    <Typography.PARAGRAPH color="white">
                      {contact.label}
                    </Typography.PARAGRAPH>
                  </ListItem>
                ))}
              </Styles.Column>
            </Styles.Column>
          </Styles.Row>

          {mock.navFooter.navigations.map((navigation) => (
            <Styles.Row
              size={{ xs: 12, sm: 4, md: 2, lg: 2 }}
              difference={{ xs: 11, md: 12, lg: 13 }}
            >
              <Styles.Column
                width="100%"
                gap={20}
                style={{ alignContent: "flex-start" }}
              >
                <Typography.H5 color="white">{navigation.title}</Typography.H5>
                <Styles.Column width="100%" gap={16} direction="column">
                  {navigation.links.map((nav) => (
                    <ListItem href={nav.href}>
                      <Typography.PARAGRAPH color="white">
                        {nav.label}
                      </Typography.PARAGRAPH>
                    </ListItem>
                  ))}
                </Styles.Column>
              </Styles.Column>
            </Styles.Row>
          ))}

          <Styles.Row
            size={{ xs: 12, md: 12, lg: 3, "2xl": 4 }}
            difference={{ xs: 0, lg: 13 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.565046287629!2d69.34789677643704!3d41.318324900275606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef52d63c41497%3A0x63d4f12ed13f4154!2sFelix%20IT%20Solutions%20Uzbekistan!5e0!3m2!1suz!2s!4v1704260388599!5m2!1suz!2s"
              width="100%"
              height="260px"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Styles.Row>
        </Styles.Column>
      </Styles.Container>
    </FooterWrap>
  );
};
