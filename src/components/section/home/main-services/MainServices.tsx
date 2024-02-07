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
import Animations from "@/animations";
import { motion } from "framer-motion";
import VariantsSettings from "@/mock/variants-animation";
import Image from "next/image";

interface IMainServicesProps {}

export const MainServices: FC<IMainServicesProps> = (props) => {
  const Common = components.common;

  const [openType, setOpenType] = useState(false);
  const [open, setOpen] = useState<{
    id: number | null;
    icon: FC | null;
    img: any;
    title: string | null;
    description: string | null;
  }>({
    id: null,
    icon: null,
    img: null,
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
            <Animations.Title>
              <Styles.SectionTitle>Основные направления</Styles.SectionTitle>
            </Animations.Title>
          </Styles.Column>

          <Styles.Column
            width="100%"
            gap={24}
            as={motion.div}
            variants={VariantsSettings.Container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {mock.mainServices.map((mainService, index) => {
              return (
                <Styles.Row
                  as={motion.div}
                  variants={VariantsSettings.Item}
                  key={index}
                  size={{ xs: 12, sm: 6, lg: 4 }}
                  difference={{ xs: 0, sm: 12, lg: 16 }}
                >
                  <MainServicesItem>
                    <IconBlock id={index}>
                      {/* <mainService.icon /> */}
                      <Image
                        src={mainService.img}
                        alt="img"
                        width={32}
                        height={32}
                      />
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
                          img: mainService.img,
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
              {/* {open.icon && <open.icon />} */}
              {open.icon && (
                <Image src={open.img} alt="img" width={64} height={64} />
              )}
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
