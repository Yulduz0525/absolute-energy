import React from "react";
import {
  AboutUsWrap,
  DailyUsers,
  GalleryWrap,
  SectionDesc,
  TeemImage,
  WomenImage,
} from "./about-us";
import Styles from "@/styles";
import { SectionTitle } from "@/styles/common";
import Image from "next/image";
import women_works from "@/assets/img/women_works.png";
import teem_works from "@/assets/img/teem_work.png";
type Props = {};

export default function AboutUs({}: Props) {
  return (
    <AboutUsWrap>
      <Styles.Container>
        <Styles.Column width="100%" items="center" gap={20}>
          <Styles.Row size={{ xs: 12, md: 6 }} difference={{ xs: 0, md: 16 }}>
            <GalleryWrap>
              <WomenImage
                data-aos="fade-right"
                className="gallery_Item"
                src={women_works.src}
                width={"500"}
                height={220}
                alt="boss works"
              />
              <Styles.Column data-aos="fade-up-right" width="100%" items={"stretch"} gap={20}>
                <DailyUsers>
                  <span>500K</span>
                  Daily Active Users
                </DailyUsers>
                <TeemImage
                  data-aos="fade-left"
                  className="gallery_Item"
                  src={teem_works.src}
                  width={500}
                  height={220}
                  alt="boss works"
                />
              </Styles.Column>
            </GalleryWrap>
          </Styles.Row>
          <Styles.Row size={{ xs: 12, md: 6 }} difference={{ xs: 0, md: 16 }}>
            <SectionTitle data-aos="fade-up">О компании</SectionTitle>
            <Styles.Column data-aos="fade-up" width="100%" direction={"column"} gap={18}>
              <SectionDesc>
                Наша компания успешно реализовала в Узбекистане более 50
                проектов под ключ с ориентированным на клиента подходом,
                инженерными решениями и оптимальными проектными возможностями с
                проектированием, поставкой, установкой и после продажным
                обслуживанием оборудования;Absolute Energy будет продолжать
                удовлетворять потребности своих клиентов с такой же серьезностью
                и решимостью в будущем, как и в прошлом.
              </SectionDesc>
              <SectionDesc>
                Наша компания успешно реализовала в Узбекистане более 50
                проектов под ключ с ориентированным на клиента подходом,
                инженерными решениями и оптимальными проектными возможностями с
                проектированием, поставкой, установкой и после продажным
                обслуживанием оборудования;Absolute Energy будет продолжать
                удовлетворять потребности своих клиентов с такой же серьезностью
                и решимостью в будущем, как и в прошлом.
              </SectionDesc>
              <SectionDesc>
                Наша компания успешно реализовала в Узбекистане более 50
                проектов под ключ с ориентированным на клиента подходом,
                инженерными решениями и оптимальными проектными возможностями с
                проектированием, поставкой, установкой и после продажным
                обслуживанием оборудования;Absolute Energy будет продолжать
                удовлетворять потребности своих клиентов с такой же серьезностью
                и решимостью в будущем, как и в прошлом.
              </SectionDesc>
            </Styles.Column>
          </Styles.Row>
        </Styles.Column>
      </Styles.Container>
    </AboutUsWrap>
  );
}
