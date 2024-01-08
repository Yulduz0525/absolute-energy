import { FC } from "react";
import { ClientSaysWrap, Description, ImageCard, Title } from "./client-says.s";
import Styles from "@/styles";
import Image from "next/image";
import Icons from "@/assets/icons";

interface IClientSaysProps {}

export const ClientSays: FC<IClientSaysProps> = (props) => {
  return (
    <ClientSaysWrap>
      <Styles.Container>
        <Styles.Column width="100%" direction="column">
          <Styles.SectionTitle>
            Отзывы наших <Styles.Subtext> довольных клиентов</Styles.Subtext>
          </Styles.SectionTitle>
          <Styles.SectionDescription>
            Several selected clients, who already believe in our service.
          </Styles.SectionDescription>
        </Styles.Column>
        <Styles.Column width="100%" gap={24} direction="row" wrap={"nowrap"}>
          <ImageCard>
            <Image
              src="/images/trash-img/user-1.png"
              alt="image"
              layout="fill"
              objectFit="contain"
            />
            <Image
              src="/images/user-effect.png"
              alt="image"
              width={196}
              height={154}
            />
          </ImageCard>
          <Styles.Column
            width="100%"
            align_items="center"
            align_content="center"
            gap={16}
          >
            <Title>Matthew Paul</Title>
            <Description>
              Perfect, very good job! Thank you for the amazing design and work.
              Really impressed with the high quality and quick turnaround time.
              Highly recommend.
            </Description>
            <Styles.Column>
              <Icons.arrowRight.Broken />
            </Styles.Column>
          </Styles.Column>
        </Styles.Column>
      </Styles.Container>
    </ClientSaysWrap>
  );
};
