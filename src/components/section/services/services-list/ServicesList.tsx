import { FC, useState } from "react";
import {
  ServicesButton,
  ServicesHtml,
  ServicesItem,
  ServicesListWrap,
} from "./services-list.s";
import Styles, { Typography } from "@/styles";
import Image from "next/image";
import mock from "@/mock";
import components from "@/components";
import Animations from "@/animations";
import { motion } from "framer-motion";
import VariantsSettings from "@/mock/variants-animation";

interface IServicesListProps {}

export const ServicesList: FC<IServicesListProps> = (props) => {
  const Common = components.common;

  const [openType, setOpenType] = useState(false);
  const [open, setOpen] = useState<{
    img: string;
    title: string | null;
    description: string | null;
    html: string;
  }>({
    img: "",
    title: null,
    description: null,
    html: "",
  });

  return (
    <ServicesListWrap>
      <Styles.Container>
        <Animations.Title>
          <Styles.SectionTitle>Услуги</Styles.SectionTitle>
        </Animations.Title>
        <Styles.Column
          width="100%"
          gap={24}
          as={motion.div}
          variants={VariantsSettings.Container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {mock.services.map((item) => (
            <Styles.Row
              size={{ xs: 12, sm: 6, lg: 4 }}
              difference={{ xs: 0, sm: 12, lg: 16 }}
              as={motion.div}
              variants={VariantsSettings.Item}
            >
              <ServicesItem>
                <Image
                  src={item.img}
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
                <ServicesButton
                  onClick={() => {
                    setOpen({
                      img: item.img,
                      title: item.title,
                      description: item.description,
                      html: item.html ? item.html : "",
                    });
                    setOpenType(true);
                  }}
                >
                  Подробнее
                </ServicesButton>
              </ServicesItem>
            </Styles.Row>
          ))}
        </Styles.Column>

        <Common.Modal open={openType} handleClose={() => setOpenType(false)}>
          <Image
            src={open.img}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "260px",
              borderRadius: "var(--block-border)",
              objectFit: "cover",
            }}
          />
          <Typography.H3 align="center">{open.title}</Typography.H3>

          <ServicesHtml dangerouslySetInnerHTML={{ __html: open.html }} />
        </Common.Modal>
      </Styles.Container>
    </ServicesListWrap>
  );
};
