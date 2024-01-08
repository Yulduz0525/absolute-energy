import Image from "next/image";
import styled from "styled-components";

export const ReposibilatyWrap = styled.div`
  width: 100%;
`;

export const SectionTitle = styled.h3`
  color: #2f2f2f;
  font: var(--typography4-700);
`;

export const TeemWorkImage = styled(Image)`
  width: calc(50% - 16px);
  object-fit: contain;

  @media (max-width: 632px) {
    width: 100%;
  }
`;

export const SectionParagraphy = styled.p`
  width: 100%;
  color: #808080;
  font: var(--typography7-400);
  span {
    font-weight: bold;
  }
`;

export const ReponseList = styled.ul`
  color: #808080;
  li {
    margin-left: 45px;
  }
  
  span {
    font-weight: bold;
    margin-bottom: 16px;
    display: block;
  }
`;

export const ServiceList = styled.ul`
  margin-top: 36px;
  li {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 16px;
  }
`
