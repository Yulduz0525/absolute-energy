import { FC } from "react";
import { IconBlock, MainServicesWrap } from "./main-services.s";
import Styles, { Typography } from "@/styles";
import mock from "@/mock";
import Link from "next/link";

interface IMainServicesProps {}

export const MainServices: FC<IMainServicesProps> = (props) => {
  return (
    <MainServicesWrap>
      <Styles.Container>
        <Styles.Column
          width="100%"
          direction="column"
          align_items="center"
          gap={32}
        >
          <Styles.Column
            width="100%"
            direction="column"
            align_items="center"
            gap={16}
          >
            <Styles.SectionSubTitle data-aos="fade-up">
              Main Services
            </Styles.SectionSubTitle>
            <Styles.SectionTitle data-aos="fade-up" data-aos-delay="300">
              Основные направления
            </Styles.SectionTitle>
          </Styles.Column>

          <Styles.Column width="100%" gap={24}>
            {mock.mainServices.map((mainService, index) => (
              <Styles.Row
                data-aos="fade-up"
                data-aos-delay={index * 300 + ""}
                key={index}
                size={{ xs: 12, sm: 6, lg: 4 }}
                difference={{ xs: 0, sm: 12, lg: 16 }}
                gap={16}
                direction="column"
              >
                <IconBlock id={index}>
                  <mainService.icon />
                </IconBlock>
                <Styles.Column width="100%" direction="column" gap={8}>
                  <Typography.H5>{mainService.title}</Typography.H5>
                  <Typography.PARAGRAPH color="dark200">
                    {mainService.description}
                  </Typography.PARAGRAPH>
                </Styles.Column>
                <Link href="/services">
                  <Typography.H6 color="secondary500">
                    Узнать больше
                  </Typography.H6>
                </Link>
              </Styles.Row>
            ))}
          </Styles.Column>
        </Styles.Column>
      </Styles.Container>
    </MainServicesWrap>
  );
};
