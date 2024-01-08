import { FC } from "react";
import {
  Description,
  InfoBlock,
  InfoItem,
  PortfoliosWrap,
  Title,
} from "./portfolios.s";
import Styles from "@/styles";
import { Carousel } from "./components";

interface IPortfoliosProps {}

export const Portfolios: FC<IPortfoliosProps> = ({}) => {
  return (
    <PortfoliosWrap>
      <Styles.Container>
        <InfoBlock>
          <Title>Tashkent City Hilton Hotel and Congress center</Title>
          <Description>
            Below models have been received for service - CUMMINS:
          </Description>
          <Styles.Column width="100%" direction="column">
            <InfoItem>2 x 2250 kVA</InfoItem>
            <InfoItem>2 x 2000kVA </InfoItem>
            <InfoItem>4 x 1675 kVA </InfoItem>
            <InfoItem>ATS for 4 units of generators</InfoItem>
          </Styles.Column>
        </InfoBlock>
        <Carousel />
      </Styles.Container>
    </PortfoliosWrap>
  );
};
