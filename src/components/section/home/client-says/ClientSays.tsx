import { FC } from "react";
import { ClientSaysWrap, Description, ImageCard, Title } from "./client-says.s";
import Styles from "@/styles";
import Image from "next/image";
import Icons from "@/assets/icons";
import {Swiper, SwiperSlide} from "swiper/react"
import {Navigation} from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

interface IClientSaysProps {}
const swiperItems = [1,2,3]

export const ClientSays: FC<IClientSaysProps> = (props) => {
  return (
    <ClientSaysWrap>
      <Styles.Container>
        <Styles.Column width="100%" direction="column">
          <Styles.SectionTitle data-aos="fade-up">
            Отзывы наших <Styles.Subtext> довольных клиентов</Styles.Subtext>
          </Styles.SectionTitle>
          <Styles.SectionDescription  data-aos="fade-up" data-aos-delay="300">
            Several selected clients, who already believe in our service.
          </Styles.SectionDescription>
        </Styles.Column>
        <Swiper modules={[Navigation]} loop navigation={{nextEl: ".feedback-swiper_next-btn"}} style={{width: "100%"}}>
          {swiperItems.map((_, index) => (
            <SwiperSlide key={index}>
              <Styles.Column width="100%" gap={24} direction="row" wrap={"nowrap"}>
                <ImageCard>
                  <Image
                    src="/images/trash-img/user-1.png"
                    alt="image"
                    layout="fill"
                    objectFit="contain"
                  />
                  <Image
                    src="/images/user-effect.png"
                    alt="image"
                    width={196}
                    height={154}
                  />
                </ImageCard>
                <Styles.Column
                  width="100%"
                  align_items="center"
                  align_content="center"
                  gap={16}
                >
                  <Title>Matthew Paul</Title>
                  <Description>
                    Perfect, very good job! Thank you for the amazing design and work.
                    Really impressed with the high quality and quick turnaround time.
                    Highly recommend.
                  </Description>
                  <Styles.Column className="feedback-swiper_next-btn">
                    <Icons.arrowRight.Broken />
                  </Styles.Column>
                </Styles.Column>
              </Styles.Column>
            </SwiperSlide>
          ))}
        </Swiper>
      </Styles.Container>
    </ClientSaysWrap>
  );
};
