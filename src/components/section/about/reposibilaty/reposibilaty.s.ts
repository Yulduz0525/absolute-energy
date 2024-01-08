import Image from "next/image";
import styled from "styled-components";

export const ReposibilatyWrap = styled.div`
  width: 100%;
`;

export const SectionTitle = styled.h3`
  color: #2f2f2f;
  font-family: Lexend;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.8px;
`;

export const TeemWorkImage = styled(Image)`
  width: calc(50% - 8px);
`;
