import { FC } from "react";
import {
  Description,
  IconBlock,
  MainServicesWrap,
  Title,
} from "./main-services.s";
import Styles from "@/styles";
import mock from "@/mock";

interface IMainServicesProps {}

export const MainServices: FC<IMainServicesProps> = (props) => {
  return (
    <MainServicesWrap>
      <Styles.Container>
        <Styles.Column width="100%" direction="column" items="center" gap={32}>
          <Styles.Column
            width="100%"
            direction="column"
            items="center"
            gap={16}
          >
            <Styles.SectionSubTitle data-aos="fade-up">Main Services</Styles.SectionSubTitle>
            <Styles.SectionTitle data-aos="fade-up" data-aos-delay="300" >Основные направления</Styles.SectionTitle>
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
                  <Title>{mainService.title}</Title>
                  <Description>{mainService.description}</Description>
                </Styles.Column>
              </Styles.Row>
            ))}
          </Styles.Column>
        </Styles.Column>
      </Styles.Container>
    </MainServicesWrap>
  );
};
