import { FC } from "react";
import {
  ServicesButton,
  ServicesItem,
  ServicesListWrap,
} from "./services-list.s";
import Styles, { Typography } from "@/styles";
import Image from "next/image";
import mock from "@/mock";

interface IServicesListProps {}

export const ServicesList: FC<IServicesListProps> = (props) => {
  return (
    <ServicesListWrap>
      <Styles.Container>
        <Styles.SectionTitle data-aos="fade-up" data-aos-delay="300">
          Услуги
        </Styles.SectionTitle>
        <Styles.Column width="100%" gap={24}>
          {mock.portfolios.map((item) => (
            <Styles.Row
              size={{ xs: 12, sm: 6, lg: 4 }}
              difference={{ xs: 0, sm: 12, lg: 16 }}
            >
              <ServicesItem>
                <Image
                  src={item.bg}
                  alt="image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "200px" }}
                />
                <Typography.H5 color="black">{item.title}</Typography.H5>
                <Typography.PARAGRAPH color="black">
                  {item.description}
                </Typography.PARAGRAPH>
                <ServicesButton>Подробнее</ServicesButton>
              </ServicesItem>
            </Styles.Row>
          ))}
        </Styles.Column>
      </Styles.Container>
    </ServicesListWrap>
  );
};
