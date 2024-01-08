import { FC } from "react";
import {
  AboutBtn,
  AboutImgBlock,
  AboutUsWrap,
  Description,
  SubTitle,
  SubTitleLine,
  TeemImage,
  Title,
} from "./about-us.s";
import Styles from "@/styles";
import Image from "next/image";
import Icons from "@/assets/icons";

interface IAboutUsProps {}

export const AboutUs: FC<IAboutUsProps> = (props) => {
  return (
    <AboutUsWrap>
      <Styles.Container>
        <Styles.Column width="100%" items="center" gap={48}>
          <Styles.Row size={{xs: 12, md: 3}} content={"center"} difference={{xs: 0, md: 24}}>
            <AboutImgBlock>
              <TeemImage
                width={430}
                height={320}
                src="/images/about-us.png"
                alt="about-us"
              />
            </AboutImgBlock>
          </Styles.Row>
          <Styles.Row size={{xs: 12, md: 9}} difference={{xs: 0, md: 24}}>
            <Styles.Column
              width="100%"
              direction="column"
              content="center"
              items="flex-start"
              gap={32}
            >
              <Styles.Column
                width="100%"
                direction="column"
                items="flex-start"
                gap={14}
              >
                <Styles.Column direction="column" items="flex-start" gap={12}>
                  <SubTitle>About us</SubTitle>
                  <SubTitleLine />
                </Styles.Column>
                <Styles.Column
                  width="100%"
                  direction="column"
                  items="flex-start"
                >
                  <Title>О компании</Title>
                  <Description>
                    Компания «ABSOLUTE ENERGY» основана в 2016 г. и является
                    официальным дилером торговых марок AKSA, Cummins, RID,
                    GENPOWER и Mitsubishi на территории Республики Узбекистан.
                    На сегодняшний день продукция компании широко востребована в
                    нефтегазовой отрасли, а также в сегментах телекоммуникации,
                    гостиничной и банковской системы. В компании имеется
                    достаточное количество обученных и сертифицированных
                    сервисных инженеров для оказания гарантийной после
                    гарантийной поддержки оборудования в режиме 24/7
                  </Description>
                </Styles.Column>
              </Styles.Column>
              <AboutBtn>
                Подробнее <Icons.arrowRight.Broken />
              </AboutBtn>
            </Styles.Column>
          </Styles.Row>
        </Styles.Column>
      </Styles.Container>
    </AboutUsWrap>
  );
};
