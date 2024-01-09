import Image from "next/image";
import styled from "styled-components";

export const AboutUsWrap = styled.div`
  && {
    width: 100%;

    /* & > div {
      display: flex;
      gap: 32px;
      align-items: center;
    } */
  }
`;

export const SectionSitle = styled.h3`
  color: #2f2f2f;
  font: var(--typography4-500);
`;

export const SectionDesc = styled.p`
  color: #808080;

  /* SMALL */
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const GalleryWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  .gallery_Item {
    border-radius: 20px;
  }
`;

export const DailyUsers = styled.div`
  border-radius: 20px;
  background: #5956E9;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-direction: column;
  text-align: center;
  color: #fff;
  flex-grow: 1;
  font: var(--typography8-500);
  
  span {
    font: var(--typography4-500);
  }
`
export const WomenImage = styled(Image)`
  display: block;
  width: 100%;
  height: auto;
`

export const TeemImage = styled(Image)`
    display: block;
    width: 60%;
    height: 200px;

    @media (max-width: 768px) {
      height: 140px;
    }
`
