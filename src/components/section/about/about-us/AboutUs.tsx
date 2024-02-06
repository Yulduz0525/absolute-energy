import React from "react";
import { AboutUsWrap, DailyUsers, ReposibilatyText } from "./about-us.s";
import Styles, { Typography } from "@/styles";
import Image from "next/image";
import Animations from "@/animations";
import { motion } from "framer-motion";
type Props = {};

export default function AboutUs({}: Props) {
  const desc = `<p>
  Наша компания успешно реализовала в Узбекистане более 50
  проектов под ключ с ориентированным на клиента подходом,
  инженерными решениями и оптимальными проектными возможностями с
  проектированием, поставкой, установкой и после продажным
  обслуживанием оборудования;
</p>
<p>
  Absolute Energy будет продолжать удовлетворять потребности своих
  клиентов с такой же серьезностью и решимостью в будущем, как и в
  прошлом.
</p>
<br />
<p>
Специалисты нашей компании отлично разбираются в особенностях работы ДГУ таких брендов, как ALIMAR, RID, GEKO, NK Powers, Olympian, Volvo Penta, Cummins, AKSA, GEKSAN, FG Wilson, Caterpillar, а также других известных производителей. 
</p>
<br />
<p>
Сервисные специалисты нашей компании производят капитальный ремонт ДГУ любой сложности, а также техническое обслуживание генераторных установок в соответствии с рекомендациями завода-изготовителя и с учетом реальных особенностей местной эксплуатации.&nbsp;<br />
</p>
<br />
<p>
На сегодняшний день компания произвела ремонт более 1100 ДГУ в Республике Узбекистан и обслуживает более 900 ДГУ по всей Республике Узбекистан.&nbsp;</p>
</p>
<br />

<p><strong>Предлагаем Вашему вниманию следующие услуги:</strong></p>
<br />
<ul>
	<li>Поставка, монтаж и пуско-наладка дизель-генераторных установок;</li>
	<li>Гарантийное обслуживание поставленных ДГУ;</li>
	<li>Комплексная диагностика дизельных и бензиновых электростанций;</li>
	<li>Поставка расходных материалов и запасных частей;&nbsp;</li>
	<li>Капитальный ремонта дизельных генераторов;</li>
	<li>Нагрузочные испытание дизель-генераторных установок;</li>
	<li>Техническое обслуживание дизель-генераторных установок;</li>
	<li>Модернизация и автоматизация дизельных электроустановок&nbsp;</li>
</ul>

`;
  return (
    <AboutUsWrap>
      <Styles.Container>
        <Styles.Column width="100%" align_items="center" gap={32}>
          <Styles.Row size={{ xs: 12, md: 6 }} difference={{ xs: 0, md: 16 }}>
            <Styles.Column width="100%" gap={24}>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                style={{ width: "100%" }}
              >
                <Image
                  src="/images/about-us-img-1.png"
                  alt="boss works"
                  width={600}
                  height={380}
                  style={{
                    width: "100%",
                    height: "380px",
                    objectFit: "cover",
                    borderRadius: "var(--block-border)",
                  }}
                />
              </motion.div>
              <Styles.Column
                width="100%"
                align_items={"stretch"}
                gap={24}
                as={motion.div}
                initial={{ x: -100, opacity: 0, y: 100 }}
                whileInView={{ x: 0, opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <DailyUsers>
                  <Typography.H1 color="white" align="center">
                    500K
                  </Typography.H1>
                  <Typography.H5 color="white" align="center">
                    Daily Active Users
                  </Typography.H5>
                </DailyUsers>
                <Image
                  src="/images/about-us-img-2.png"
                  alt="boss works"
                  width={500}
                  height={220}
                  style={{
                    width: "calc(60% - 12px)",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "var(--block-border)",
                  }}
                />
              </Styles.Column>
            </Styles.Column>
          </Styles.Row>
          <Styles.Row
            size={{ xs: 12, md: 6 }}
            difference={{ xs: 0, md: 16 }}
            gap={16}
          >
            <Animations.Title>
              <Typography.H4>О компании</Typography.H4>
            </Animations.Title>
            <ReposibilatyText dangerouslySetInnerHTML={{ __html: desc }} />
          </Styles.Row>
        </Styles.Column>
      </Styles.Container>
    </AboutUsWrap>
  );
}
