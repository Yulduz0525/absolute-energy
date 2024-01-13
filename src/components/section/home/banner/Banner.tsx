import React, { FC } from "react";
import {
  BannerWrap,
  StatLine,
  StatisticItem,
  Statistics,
  WaveAnimation,
} from "./banner.s";
import Styles, { Typography } from "@/styles";
import mock from "@/mock";

export interface IBannerProps {}

export const Banner: FC<IBannerProps> = (props) => {
  return (
    <BannerWrap>
      <Styles.Container>
        <Typography.H5 color="gradient" align="center">
          Services
        </Typography.H5>
        <Typography.H1 color="white" align="center">
          ABSOLUTE ENERGY
        </Typography.H1>
        <Typography.PARAGRAPH color="white" align="center">
          СЕРВИС МЕЖДУНАРОДНОГО КЛАССА
        </Typography.PARAGRAPH>
        <Statistics>
          {mock.bannerStat.map((stat, index) => (
            <>
              <StatisticItem>
                <Typography.H1 color="gradient" align="center">
                  {stat.title}
                </Typography.H1>
                <Styles.Column width="100%" content="center">
                  <Typography.H4 align="center">{stat.subTitle}</Typography.H4>
                  <Typography.PARAGRAPH align="center">
                    {stat.description}
                  </Typography.PARAGRAPH>
                </Styles.Column>
              </StatisticItem>
              {mock.bannerStat.length - 1 !== index && <StatLine />}
            </>
          ))}
        </Statistics>
      </Styles.Container>
      <WaveAnimation>
        <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shape-rendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </WaveAnimation>
    </BannerWrap>
  );
};
