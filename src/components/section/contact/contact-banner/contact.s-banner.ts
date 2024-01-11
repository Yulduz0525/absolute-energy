import styled from "styled-components";
import bannerBg from "@/assets/bg/about-banner_bg.png"
import bannerBg2 from "@/assets/bg/about-banner_bg2.png"

export const ContactBannerWrap = styled.div`
  width: 100%;
  margin-top: 150px;

`
export const BannerWrap = styled.div`
  width: 100%;
  margin-top: 150px;
`

export const BannerInner = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  gap: 18px;
  background-color: #0094FF;
  border-radius: 24px;
  overflow: hidden;

  &:after {
    content: '';
    display: block;
    width: 50%;
    background-image: url(${bannerBg.src});
    background-repeat: no-repeat;
    background-position: center center;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    rotate: -45deg;

  }
  &:before {
    content: '';
    display: block;
    width: 50%;
    background-image: url(${bannerBg2.src});
    background-repeat: no-repeat;
    background-position: center center;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    rotate: -45deg;
  }
`;

export const BannerTitle = styled.h2`
  width: fit-content;
  color: var(--White, #FFF);
  text-align: center;
  font: var(--typography2-700);
  z-index: 1;
`

export const BannerDesc = styled.p`
    width: fit-content;
    color: var(--White, #FFF);
    text-align: center;
    font: var(--typography6-700);
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 12px;
`