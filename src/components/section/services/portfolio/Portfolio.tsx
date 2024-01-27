import { FC } from "react";
import { PortfolioWrap } from "./portfolio.s";
import Styles from "@/styles";
import Image from "next/image";
import Animations from "@/animations";
import { motion } from "framer-motion";

interface IPortfolioProps {
  images: [string, string, string, string, string];
}

export const Portfolio: FC<IPortfolioProps> = ({ images }) => {
  return (
    <PortfolioWrap>
      <Styles.Container>
        <Animations.Title>
          <Styles.SectionTitle>Портфолио</Styles.SectionTitle>
        </Animations.Title>
        <Styles.Column width="100%" gap={24}>
          <Styles.Row
            size={{ xs: 12, sm: 6, lg: 4 }}
            difference={{ xs: 0, sm: 12, lg: 16 }}
            gap={24}
          >
            <Image
              src={images[0]}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "270px" }}
            />
            <Image
              src={images[1]}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "270px" }}
            />
          </Styles.Row>
          <Styles.Row
            size={{ xs: 12, sm: 6, lg: 4 }}
            difference={{ xs: 0, sm: 12, lg: 16 }}
            gap={24}
            as={motion.div}
          >
            <Image
              src={images[2]}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "564px" }}
            />
          </Styles.Row>
          <Styles.Row
            size={{ xs: 12, sm: 12, lg: 4 }}
            difference={{ xs: 0, lg: 16 }}
            gap={24}
          >
            <Image
              src={images[3]}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "270px" }}
            />
            <Image
              src={images[4]}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "270px" }}
            />
          </Styles.Row>
        </Styles.Column>
      </Styles.Container>
    </PortfolioWrap>
  );
};
