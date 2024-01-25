import { FC } from "react";
import {
  AboutBtn,
  AboutImgBlock,
  AboutUsWrap,
  SubTitleLine,
  TeemImage,
} from "./about-us.s";
import Styles, { Typography } from "@/styles";
import Image from "next/image";
import Icons from "@/assets/icons";

interface IAboutUsProps {}

export const AboutUs: FC<IAboutUsProps> = (props) => {
  return (
    <AboutUsWrap>
      <Styles.Container>
        <Styles.Column
          width="100%"
          wrap={{ xs: "wrap", lg: "nowrap" }}
          align_items="center"
          content="center"
          gap={48}
        >
          <AboutImgBlock>
            <TeemImage
              width={320}
              height={320}
              src="/images/about-us.png"
              alt="about-us"
            />
            <Image
              width={171}
              height={171}
              src="/images/about-us-effect-1.png"
              alt="about-us-effects"
            />
            <Image
              width={168}
              height={136}
              src="/images/about-us-effect-2.png"
              alt="about-us-effects"
            />
          </AboutImgBlock>

          <Styles.Column
            width="100%"
            direction="column"
            content="center"
            align_items="flex-start"
            gap={32}
          >
            <Styles.Column
              width="100%"
              direction="column"
              align_items="flex-start"
              gap={14}
            >
              <Styles.Column
                width="100%"
                direction="column"
                align_items="flex-start"
              >
                <Typography.H1 data-aos="fade-left" data-aos-delay="300">
                  О компании
                </Typography.H1>
                <Typography.LEAD_TEXT
                  color="dark200"
                  data-aos="fade-left"
                  data-aos-delay="600"
                >
                  Компания «ABSOLUTE ENERGY» основана в 2016 г. и является
                  официальным дилером торговых марок AKSA, Cummins, RID,
                  GENPOWER и Mitsubishi на территории Республики Узбекистан. На
                  сегодняшний день продукция компании широко востребована в
                  нефтегазовой отрасли, а также в сегментах телекоммуникации,
                  гостиничной и банковской системы. В компании имеется
                  достаточное количество обученных и сертифицированных сервисных
                  инженеров для оказания гарантийной после гарантийной поддержки
                  оборудования в режиме 24/7
                </Typography.LEAD_TEXT>
              </Styles.Column>
            </Styles.Column>
            <AboutBtn href="/about" data-aos="fade-left" data-aos-delay="800">
              Подробнее <Icons.arrowRight.Broken />
            </AboutBtn>
          </Styles.Column>
        </Styles.Column>
      </Styles.Container>
    </AboutUsWrap>
  );
};
