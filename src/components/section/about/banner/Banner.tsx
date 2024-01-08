import React from "react";
import { BannerDesc, BannerInner, BannerTitle, BannerWrap } from "./banner.s";
import Styles from "@/styles";

type Props = {};

export default function Banner({}: Props) {
  return (
    <BannerWrap>
      <Styles.Container>
        <BannerInner>
          <BannerTitle>О НАС</BannerTitle>
          <BannerDesc>
            Информация о нашей компании, нашей деятельности и услуг
          </BannerDesc>
        </BannerInner>
      </Styles.Container>
    </BannerWrap>
  );
}
