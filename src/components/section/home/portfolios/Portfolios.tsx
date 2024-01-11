import { FC, useState } from "react";
import {
  CarouselBtn,
  CarouselItem,
  CarouselList,
  CarouselTitle,
  Description,
  InfoBlock,
  InfoItem,
  PortfoliosWrap,
  PositionBtn,
  Title,
} from "./portfolios.s";
import Styles from "@/styles";
import { Carousel } from "./components";
import Icons from "@/assets/icons";
import mock from "@/mock";

interface IPortfoliosProps {}
const itemWidth = 320;

export const Portfolios: FC<IPortfoliosProps> = ({}) => {
  const [portfolios, setPortfolios] = useState(mock.portfolios);
  const [activeIndex, setActiveIndex] = useState(0);

  function scroll(id: number) {
    setActiveIndex(id);
    setPortfolios((prev) => {
      return prev.map((item, index) => {
        return {
          ...item,
          positionId: id >= item.id ? 0 : index - id,
        };
      });
    });
  }

  return (
    <PortfoliosWrap>
      <Styles.Container>
        <Styles.Column width="100%" gap={32}>
          <Styles.Row
            size={{ xs: 12, md: 5 }}
            difference={{ xs: 0, md: 16 }}
            align_items="center"
          >
            <InfoBlock>
              <Styles.Column width="100%" direction="column" gap={12}>
                <Title>{portfolios[activeIndex].title}</Title>
                <Description>{portfolios[activeIndex].description}</Description>
                <Styles.Column width="100%" direction="column">
                  {portfolios[activeIndex].list.map((item) => (
                    <InfoItem>{item}</InfoItem>
                  ))}
                </Styles.Column>
              </Styles.Column>
              <Styles.Column>
                <PositionBtn
                  onClick={() => {
                    activeIndex !== 0 && scroll(activeIndex - 1);
                  }}
                >
                  <Icons.arrowLeft.Broken />
                </PositionBtn>
                <PositionBtn
                  onClick={() => {
                    activeIndex !== portfolios.length - 1 &&
                      scroll(activeIndex + 1);
                  }}
                >
                  <Icons.arrowRight.Broken />
                </PositionBtn>
              </Styles.Column>
            </InfoBlock>
          </Styles.Row>
          <Styles.Row size={{ xs: 12, md: 7 }} difference={{ xs: 0, md: 16 }}>
            <CarouselList>
              {portfolios.map((item, index) => (
                <CarouselItem
                  translate={item.positionId * itemWidth}
                  collapsed={activeIndex >= index}
                  bg={item.bg}
                >
                  <CarouselTitle>{item.title}</CarouselTitle>
                  {/* <CarouselBtn>
                    <Icons.arrowRight.Broken />
                  </CarouselBtn> */}
                </CarouselItem>
              ))}
            </CarouselList>
          </Styles.Row>
        </Styles.Column>
      </Styles.Container>
    </PortfoliosWrap>
  );
};
