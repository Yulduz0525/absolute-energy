import React from "react";
import { AboutUsWrap, DailyUsers, ReposibilatyText } from "./about-us.s";
import Styles, { Typography } from "@/styles";
import Image from "next/image";
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
  <strong>Проектирование -</strong>
   проектирование малой и средней мощности, план расположения
  оборудований и кабелей, подготовка документации по дизельной
  электро-станции,  расчет мощности электроустановок, расчеты и
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
  установка, монтаж и настройка. Подготовка персонала по работе с
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
    <AboutUsWrap>
      <Styles.Container>
        <Styles.Column width="100%" align_items="center" gap={32}>
          <Styles.Row size={{ xs: 12, md: 6 }} difference={{ xs: 0, md: 16 }}>
            <Styles.Column width="100%" gap={24}>
              <Image
                data-aos="fade-right"
                src="/images/about-us-img-1.png"
                alt="boss works"
                width={600}
                height={380}
                style={{
                  width: "100%",
                  height: "380px",
                  borderRadius: "var(--block-border)",
                }}
              />
              <Styles.Column
                data-aos="fade-up-right"
                width="100%"
                align_items={"stretch"}
                gap={24}
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
                  data-aos="fade-left"
                  src="/images/about-us-img-2.png"
                  alt="boss works"
                  width={500}
                  height={220}
                  style={{
                    width: "calc(60% - 12px)",
                    height: "200px",
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
            <Typography.H4 data-aos="fade-up">О компании</Typography.H4>
            <ReposibilatyText dangerouslySetInnerHTML={{ __html: desc }} />
          </Styles.Row>
        </Styles.Column>
      </Styles.Container>
    </AboutUsWrap>
  );
}
