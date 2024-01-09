import { FC, useState } from "react";
import {
  CarouselBtn,
  CarouselItem,
  CarouselList,
  CarouselTitle,
  CarouselWrap,
} from "./carousel.s";
import mock from "@/mock";
import Icons from "@/assets/icons";

interface ICarouselProps {}

const itemWidth = 400;
export const Carousel: FC<ICarouselProps> = (props) => {
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
    <CarouselWrap>
      <CarouselList>
        {portfolios.map((item, index) => (
          <CarouselItem
            key={index}
            translate={item.positionId * itemWidth}
            collapsed={activeIndex >= index}
            bg={item.bg}
          >
            <CarouselTitle>{item.title}</CarouselTitle>
            <CarouselBtn>
              <Icons.arrowRight.Broken />
            </CarouselBtn>
          </CarouselItem>
        ))}
      </CarouselList>
      <button
        onClick={() => {
          scroll(activeIndex - 1);
        }}
      >
        button -
      </button>
      <button onClick={() => scroll(activeIndex + 1)}>button +</button>
    </CarouselWrap>
  );
};
