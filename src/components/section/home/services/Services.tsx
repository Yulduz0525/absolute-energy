import { FC } from "react";
import { CustomBtn, ServicesCard, ServicesWrap } from "./services.s";
import Styles, { Typography } from "@/styles";
import mock from "@/mock";

interface IServicesProps {}

export const Services: FC<IServicesProps> = (props) => {
  const active = 2;
  return (
    <ServicesWrap>
      <Styles.Container>
        <Styles.Column width="100%" direction="column">
          <Styles.SectionTitle >
            Основные направления
          </Styles.SectionTitle>
        </Styles.Column>
        <Styles.Column width="100%" gap={24} content="center">
          {mock.services.map((service, index) => (
            <Styles.Row
              size={{ xs: 12, md: 6, lg: 4 }}
              difference={{ xs: 0, md: 12, lg: 16 }}
              key={index}
            >
              <ServicesCard
                active={active === service.id}
                {...service.animations}
              >
                <Styles.Column width="100%" gap={8} content="center">
                  <Typography.H4 align="center">{service.title}</Typography.H4>
                  <Typography.LEAD_TEXT align="center" color="dark300">
                    {service.description}
                  </Typography.LEAD_TEXT>
                </Styles.Column>
                <Styles.Column gap={12} direction="column">
                  {service.list.map((item) => (
                    <Typography.PARAGRAPH>
                      <item.icon /> {item.label}
                    </Typography.PARAGRAPH>
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
