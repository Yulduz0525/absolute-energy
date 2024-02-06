import React from "react";
import {
  ReposibilatyText,
  ReposibilatyWrap,
  ServiceList,
  TeemWorkImage,
} from "./reposibilaty.s";
import Styles, { Typography } from "@/styles";
import { SuccessIcon } from "@/assets/img/success";
import Animations from "@/animations";
import { motion } from "framer-motion";

type Props = {};

export default function Reposibilaty({}: Props) {
  const desc = `<p>
  <strong>Проектирование -</strong>
   проектирование малой и средней мощности, план расположения
  оборудований и кабелей, подготовка документации по дизельной
  генераторной установки,  расчет мощности электроустановок, расчеты и
  планы питающих сетей,  расчет электрических щитов,  расчет
  нагрузки,  планы заземления контура,  система снабжение
  топливом,  система автоматизации и пожарной безопасности.
</p>
<p>
  <strong>Поставка –</strong>
  подготовка генератора, проверка генератора на заводе у
  производителя, подготовка необходимого транспорта и
  товаросопроводительного документа, таможенная очистка,
  сертификация поставленных товаров
</p>
<p>
  <strong>Установка –</strong>
  установка, монтаж и настройка. Подготовка и обучение персонала по работе с
  генератором.
</p>
<p>
  <strong>Сервисное обслуживание -</strong>
  предоставляем вам поддержку в различных областях, таких как
  техническое обслуживание, ремонт, поставка запасных частей,
  монтаж и пуско-наладка системы. Благодаря быстрому реагированию
  мы предлагаем решения для вашего бизнеса с минимальными
  простоями. Механические и электрические изменения в работе по
  приведению объекта в соответствие со стандартами, Монтаж,
  пуско-наладочные работы, ремонтные работы, Работы по
  техническому обслуживанию, Модификации включения питания.
</p>`;

  return (
    <ReposibilatyWrap>
      <Styles.Container>
        <Styles.Column width="100%" align_items="center" gap={50}>
          <Styles.Row
            size={{ xs: 12, md: 6 }}
            difference={{ xs: 0, md: 25 }}
            direction={"column"}
            gap={32}
          >
            <Animations.Title>
              <Typography.H2>Наши задачи</Typography.H2>
            </Animations.Title>
            <ReposibilatyText dangerouslySetInnerHTML={{ __html: desc }} />
            <ServiceList>
              <Typography.PARAGRAPH
                as={motion.h6}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <SuccessIcon /> Поставка
              </Typography.PARAGRAPH>
              <Typography.PARAGRAPH
                as={motion.h6}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <SuccessIcon /> Установка
              </Typography.PARAGRAPH>
              <Typography.PARAGRAPH
                as={motion.h6}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <SuccessIcon /> Сервисное обслуживание
              </Typography.PARAGRAPH>
            </ServiceList>
          </Styles.Row>
          <Styles.Row
            size={{ xs: 12, md: 6 }}
            difference={{ xs: 0, md: 25 }}
            direction={"row"}
            gap={32}
          >
            <TeemWorkImage
              src="/images/about-us-img-3.png"
              width={300}
              height={450}
              alt="work process" ///sasas
              as={motion.img}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            />
            <TeemWorkImage
              src="/images/about-us-img-4.png"
              width={300}
              height={450}
              alt="work process"
              as={motion.img}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            />
          </Styles.Row>
        </Styles.Column>
      </Styles.Container>
    </ReposibilatyWrap>
  );
}
