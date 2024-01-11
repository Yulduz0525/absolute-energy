import React from "react";
import {
  ReponseList,
  ReposibilatyWrap,
  SectionParagraphy,
  SectionTitle,
  ServiceList,
  TeemWorkImage,
} from "./reposibilaty.s";
import Styles from "@/styles";
import teem_work2 from "@/assets/img/teem_work2.png";
import teem_work3 from "@/assets/img/teem_work3.png";
import { SuccessIcon } from "@/assets/img/success";

type Props = {};

export default function Reposibilaty({}: Props) {
  return (
    <ReposibilatyWrap>
      <Styles.Container>
        <Styles.Column width="100%" align_items="center" gap={50}>
          <Styles.Row size={{xs: 12, md: 6}} difference={{ xs: 0, md: 25}} direction={"column"} gap={32}>
            <SectionTitle data-aos="">Наши задачи</SectionTitle>
            <ReponseList>
              <span>Поставка</span>
              <li>подготовка генератора,</li>
              <li>подготовка генератора,</li>
              <li>подготовка генератора,</li>
              <li>подготовка генератора,</li>
            </ReponseList>
            <SectionParagraphy>
              <span>Установка –</span> установка, монтаж и настройка. Подготовка
              персонала по работе с генератором.{" "}
            </SectionParagraphy>
            <SectionParagraphy>
              <span>Сервисное обслуживание -</span> предоставляем вам поддержку
              в различных областях, таких как техническое обслуживание, ремонт,
              поставка запасных частей, монтаж и пуско-наладка системы.
              Благодаря быстрому реагированию мы предлагаем решения для вашего
              бизнеса с минимальными простоями. Механические и электрические
              изменения в работе по приведению объекта в соответствие со
              стандартами, Монтаж, пуско-наладочные работы, ремонтные работы,
              Работы по техническому обслуживанию, Модификации включения питания
            </SectionParagraphy>
          </Styles.Row>
          <Styles.Row size={{xs: 12, md: 6}} difference={{xs: 0, md: 25}} direction={"row"} gap={32}>
            <TeemWorkImage
              data-aos="fade-up"
              data-aos-delay="600"
              src={teem_work2.src}
              width={300}
              height={450}
              alt="work process" ///sasas
            />
            <TeemWorkImage
              data-aos="fade-up-left"
              src={teem_work3.src}
              width={300}
              height={450}
              alt="work process"
            />
          </Styles.Row>
        </Styles.Column>
        <ServiceList>
          <li data-aos="fade-up" data-aos-delay="0">
            <SuccessIcon /> Поставка
          </li>
          <li data-aos="fade-up" data-aos-delay="300">
            <SuccessIcon /> Установка
          </li>
          <li data-aos="fade-up" data-aos-delay="600">
            <SuccessIcon /> Сервисное обслуживание
          </li>
        </ServiceList>
      </Styles.Container>
    </ReposibilatyWrap>
  );
}
