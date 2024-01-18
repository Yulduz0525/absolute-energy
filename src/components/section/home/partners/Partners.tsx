import { FC } from "react";
import { PartnersWrap } from "./partners.s";
import Styles, { Typography } from "@/styles";
import Image from "next/image";

interface IPartnersProps {}

export const Partners: FC<IPartnersProps> = (props) => {
  const partnersList = [
    "/images/partners/1.png",
    "/images/partners/2.png",
    "/images/partners/3.png",
    "/images/partners/4.png",
    "/images/partners/5.png",
    "/images/partners/6.png",
  ];

  return (
    <PartnersWrap>
      <Styles.Container>
        <Typography.H5>НАШИ ПАРТНЁРЫ</Typography.H5>
        <Styles.Column
          width="100%"
          gap={48}
          content="center"
          align_items="center"
        >
          {partnersList.map((item) => (
            <Styles.Row
              size={{ xs: 6, sm: 3, xl: 2 }}
              difference={{ xs: 12, sm: 24, md: 32, lg: 36, xl: 40 }}
              content="center"
            >
              <Image
                src={item}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </Styles.Row>
          ))}
        </Styles.Column>
      </Styles.Container>
    </PartnersWrap>
  );
};
