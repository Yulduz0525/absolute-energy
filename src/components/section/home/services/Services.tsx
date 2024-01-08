import { FC } from "react";
import {
  CustomBtn,
  Description,
  ListItem,
  ServicesCard,
  ServicesWrap,
  Title,
} from "./services.s";
import Styles from "@/styles";
import mock from "@/mock";

interface IServicesProps {}

export const Services: FC<IServicesProps> = (props) => {
  const active = 2;
  return (
    <ServicesWrap>
      <Styles.Container>
        <Styles.Column width="100%" direction="column">
          <Styles.SectionSubTitle>Main Services</Styles.SectionSubTitle>
          <Styles.SectionTitle>Основные направления</Styles.SectionTitle>
        </Styles.Column>
        <Styles.Column width="100%" gap={24} content="center">
          {mock.services.map((service) => (
            <Styles.Row
              size={{ xs: 12, md: 6, lg: 4 }}
              difference={{ xs: 0, md: 12, lg: 16 }}
            >
              <ServicesCard active={active === service.id}>
                <Styles.Column width="100%" gap={8}>
                  <Title>{service.title}</Title>
                  <Description>{service.description}</Description>
                </Styles.Column>
                <Styles.Column gap={12} direction="column">
                  {service.list.map((item) => (
                    <ListItem>
                      <item.icon /> {item.label}
                    </ListItem>
                  ))}
                </Styles.Column>
                <CustomBtn>Learn More</CustomBtn>
              </ServicesCard>
            </Styles.Row>
          ))}
        </Styles.Column>
      </Styles.Container>
    </ServicesWrap>
  );
};
