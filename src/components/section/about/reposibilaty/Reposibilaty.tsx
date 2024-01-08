import React from "react";
import {
  ReposibilatyWrap,
  SectionTitle,
  TeemWorkImage,
} from "./reposibilaty.s";
import Styles from "@/styles";
import teem_work2 from "@/assets/img/teem_work2.png";
import teem_work3 from "@/assets/img/teem_work3.png";

type Props = {};

export default function Reposibilaty({}: Props) {
  return (
    <ReposibilatyWrap>
      <Styles.Container>
        <Styles.Column width="100%" items="center" gap={50}>
          <Styles.Row size={6} difference={25} direction={"column"} gap={32}>
            <SectionTitle>Наши задачи</SectionTitle>
          </Styles.Row>
          <Styles.Row size={6} difference={25} direction={"row"} gap={16}>
            <TeemWorkImage
              src={teem_work2.src}
              width={300}
              height={450}
              alt="work process"
            />
            <TeemWorkImage
              src={teem_work3.src}
              width={300}
              height={450}
              alt="work process"
            />
          </Styles.Row>
        </Styles.Column>
      </Styles.Container>
    </ReposibilatyWrap>
  );
}
