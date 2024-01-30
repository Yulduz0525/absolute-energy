import Styles, { Typography } from "@/styles";
import Animations from "@/animations";
import { FC } from "react";
import {
  ImageWrapper,
  Navigations,
  PartnersImage,
  PartnersWrap,
  SwiperContainer,
} from "./partners.s";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Icons from "@/assets/icons";

interface IPartnersProps {}

export const Partners: FC<IPartnersProps> = (props) => {
  const partnersList = [
    "/images/partners/1.png",
    "/images/partners/2.png",
    "/images/partners/3.png",
    "/images/partners/4.png",
    "/images/partners/5.png",
    "/images/partners/6.png",
  ];

  return (
    <PartnersWrap>
      <Styles.Container>
        <Animations.Title>
          <Typography.H5>НАШИ ПАРТНЁРЫ</Typography.H5>
        </Animations.Title>
      </Styles.Container>
      <SwiperContainer>
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          loop
          navigation={{
            nextEl: ".feedback-swiper_prev-btn",
            prevEl: ".feedback-swiper_next-btn",
          }}
          style={{ width: "100%" }}
        >
          {partnersList.map((data, index) => (
            <SwiperSlide key={index}>
              <ImageWrapper>
                <PartnersImage
                  src={data}
                  alt="image"
                  width={200}
                  height={200}
                />
              </ImageWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <Navigations size={{ xs: 2 }} difference={0} content={"space-between"}>
          <button className="feedback-swiper_prev-btn">
            <Icons.arrowLeft.Broken />
          </button>
          <button className="feedback-swiper_next-btn">
            <Icons.arrowRight.Broken />
          </button>
        </Navigations> */}
      </SwiperContainer>
    </PartnersWrap>
  );
};
