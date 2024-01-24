import { FC, ReactNode, useState } from "react";
import {
  IconBlock,
  MainServicesItem,
  MainServicesWrap,
} from "./main-services.s";
import Styles, { Typography } from "@/styles";
import mock from "@/mock";
import Link from "next/link";
import components from "@/components";

interface IMainServicesProps {}

export const MainServices: FC<IMainServicesProps> = (props) => {
  const Common = components.common;

  const [openType, setOpenType] = useState(false);
  const [open, setOpen] = useState<{
    id: number | null;
    icon: FC | null;
    title: string | null;
    description: string | null;
  }>({
    id: null,
    icon: null,
    title: null,
    description: null,
  });

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
            {mock.mainServices.map((mainService, index) => {
              return (
                <Styles.Row
                  data-aos="fade-up"
                  data-aos-delay={index * 300 + ""}
                  key={index}
                  size={{ xs: 12, sm: 6, lg: 4 }}
                  difference={{ xs: 0, sm: 12, lg: 16 }}
                >
                  <MainServicesItem>
                    <IconBlock id={index}>
                      <mainService.icon />
                    </IconBlock>
                    <Styles.Column width="100%" direction="column" gap={8}>
                      <Typography.H5>{mainService.title}</Typography.H5>
                      <Typography.PARAGRAPH color="dark200">
                        {mainService.description}
                      </Typography.PARAGRAPH>
                    </Styles.Column>
                    <Typography.H6
                      color="secondary500"
                      onClick={() => {
                        setOpen({
                          id: index,
                          icon: mainService.icon,
                          title: mainService.title,
                          description: mainService.description,
                        });
                        setOpenType(true);
                      }}
                    >
                      Узнать больше
                    </Typography.H6>
                  </MainServicesItem>
                </Styles.Row>
              );
            })}
          </Styles.Column>

          <Common.Modal open={openType} handleClose={() => setOpenType(false)}>
            <IconBlock id={open.id ? open.id : 0} modal={!!open}>
              {open.icon && <open.icon />}
            </IconBlock>
            <Typography.H3 align="center">{open.title}</Typography.H3>
            <Typography.LEAD_TEXT color="dark200" align="center">
              {open.description}
            </Typography.LEAD_TEXT>
          </Common.Modal>
        </Styles.Column>
      </Styles.Container>
    </MainServicesWrap>
  );
};
