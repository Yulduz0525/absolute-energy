import React from "react";
import {
  BannerDesc,
  BannerInner,
  BannerTitle,
  ContactBannerWrap,
} from "./contact.s-banner";
import Styles from "@/styles";
import { CallIcon } from "@/assets/img/call-icon";
import { MailIcon } from "@/assets/img/mail-cion";

type Props = {};

export default function ContactBanner({}: Props) {
  return (
    <ContactBannerWrap>
      <Styles.Container>
        <BannerInner>
          <BannerTitle>Обратная связь</BannerTitle>
          <Styles.Column align_items={"center"} gap={32}>
            <BannerDesc>
              contact@technologycal <MailIcon />
            </BannerDesc>
            <BannerDesc>
              +998 (99) 999-99-99 <CallIcon />
            </BannerDesc>
          </Styles.Column>
        </BannerInner>
      </Styles.Container>
    </ContactBannerWrap>
  );
}
