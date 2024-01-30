import { FC } from "react";
import { ProductWrap } from "./product.s";
import Styles from "@/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

interface IProductProps {}

export const Product: FC<IProductProps> = ({}) => {
  return (
    <ProductWrap>
      <Styles.Container>
        <Styles.Column width="100%" direction="column">
          <Styles.SectionTitle>
            Отзывы наших <Styles.Subtext> довольных клиентов</Styles.Subtext>
          </Styles.SectionTitle>
          <Styles.SectionDescription >
            Several selected clients, who already believe in our service.
          </Styles.SectionDescription>
        </Styles.Column>
        {/* <Swiper
          modules={[Navigation]}
          loop
          navigation={{ nextEl: ".feedback-swiper_next-btn" }}
          style={{ width: "100%" }}
        >
          {swiperItems.map((_, index) => (
            <SwiperSlide key={index}>
              <Styles.Column
                width="100%"
                gap={24}
                direction="row"
                wrap={"nowrap"}
              >
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
                  <Typography.H2>Matthew Paul</Typography.H2>
                  <Typography.LEAD_TEXT>
                    Perfect, very good job! Thank you for the amazing design and
                    work. Really impressed with the high quality and quick
                    turnaround time. Highly recommend.
                  </Typography.LEAD_TEXT>
                </Styles.Column>
              </Styles.Column>
            </SwiperSlide>
          ))}
        </Swiper> */}
      </Styles.Container>
    </ProductWrap>
  );
};
