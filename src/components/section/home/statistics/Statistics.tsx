import { FC, useLayoutEffect, useRef, useState } from "react";
import { StatLine, StatisticItem, StatisticsWrap } from "./statistics.s";
import Styles, { Typography } from "@/styles";
import mock from "@/mock";

interface IStatisticsProps {}

export const Statistics: FC<IStatisticsProps> = (props) => {
  return (
    <StatisticsWrap>
      <Styles.Container>
        {mock.bannerStat.map((stat, index) => (
          <>
            <StatisticItem>
              <Typography.H1 color="gradient" align="center">
                {stat.title}
              </Typography.H1>
              <Styles.Column width="100%" direction="column" content="center">
                <Typography.H4 align="center">{stat.subTitle}</Typography.H4>
                <Typography.PARAGRAPH align="center">
                  {stat.description}
                </Typography.PARAGRAPH>
              </Styles.Column>
            </StatisticItem>
            {mock.bannerStat.length - 1 !== index && <StatLine />}
          </>
        ))}
      </Styles.Container>
    </StatisticsWrap>
  );
};
