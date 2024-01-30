import Styles from "@/styles";
import Image from "next/image";
import styled from "styled-components";

export const PartnersWrap = styled.section`
  && {
    width: 100%;
    background: var(--dark25);
    & > div {
      padding: 38px 0;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;

      li {
        list-style: none;

        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 200px !important;
          object-fit: cover;
        }
      }
    }

    #carousel .f-carousel__slide {
      --f-carousel-spacing: 8px;
      --f-carousel-slide-width: calc((100% - 16px) / 6);
    }
    
    #carousel .f-carousel__track {
      gap: 20px;
    }

    @media(max-width: 991px) {
      #carousel .f-carousel__slide {
        --f-carousel-spacing: 8px;
        --f-carousel-slide-width: calc((100% - 16px) / 5);
      }
    }

    @media(max-width: 768px) {
      #carousel .f-carousel__slide {
        --f-carousel-spacing: 8px;
        --f-carousel-slide-width: calc((100% - 16px) / 3);
      }
    }

    @media(max-width: 500px) {
      #carousel .f-carousel__slide {
        --f-carousel-spacing: 8px;
        --f-carousel-slide-width: calc((100% - 16px) / 2);
      }
    }
  }
`;

export const SwiperContainer = styled.div`
  position: relative;
`

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PartnersImage = styled(Image)`
  object-fit: contain;
  width: 150px;
  height: 100px;
`

export const Navigations = styled(Styles.Row)`
  width: 100%;
  padding: 0 10px;
  z-index: 1000;

  .feedback-swiper_prev-btn,
  .feedback-swiper_next-btn {
    background: var(--dark100);
    padding: 12px;
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 250ms ease-in-out;
    &:hover {
      background: var(--dark200);
    }
  }
`