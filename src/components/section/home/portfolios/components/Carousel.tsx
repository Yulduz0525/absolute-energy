import { FC, useState } from "react";
import { CarouselItem, CarouselList, CarouselWrap } from "./carousel.s";
import mock from "@/mock";

interface ICarouselProps {}

const itemWidth = 400;
export const Carousel: FC<ICarouselProps> = (props) => {
  const [portfolios, setPortfolios] = useState(mock.portfolios);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <CarouselWrap>
      <CarouselList>
        {portfolios.map((item, index) => (
          <CarouselItem
          key={index}
            translate={item.id * itemWidth}
            collapsed={activeIndex >= index}
          >
            {item.title}
          </CarouselItem>
        ))}
      </CarouselList>
      <button
        onClick={() => {
          portfolios[1].id !== 1 &&
            setPortfolios((prev) => {
              return prev.map((item, index) => {
                return {
                  ...item,
                  id: portfolios[index + 1]?.id > 0 ? item.id + 1 : 0,
                };
              });
            });
        }}
      >
        button -
      </button>
      <button
        onClick={() => {
          portfolios[portfolios.length - 1].id !== 1 &&
            setPortfolios((prev) => {
              return prev.map((item, index) => {
                return {
                  ...item,
                  id: index <= activeIndex ? 0 : item.id - 1,
                };
              });
            });
        }}
      >
        button +
      </button>
    </CarouselWrap>
  );
};
