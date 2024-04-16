import React from "react";
import Sections from "@/components/section";
import Head from "next/head";
import components from "@/components";

type Props = {};

export default function About({}: Props) {
  const about = Sections.about;
  const commonComp = components.common;
  return (
    <>
      <html lang="ru" />
      <Head>
        <meta charSet="UTF-8" />
        <title>О компании Aenergy - Энергия и Ресурсы</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta
          name="description"
          content="Узнайте больше о компании Aenergy, нашей миссии, стратегии и как мы помогаем улучшать энергетическую эффективность в Узбекистане."
        />
        <meta
          name="keywords"
          content="о компании, Aenergy, энергия, Узбекистан, энергетическая эффективность, управление ресурсами"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          property="og:title"
          content="О компании Aenergy - Энергия и Ресурсы"
        />
        <meta
          property="og:description"
          content="Узнайте больше о компании Aenergy, нашей миссии и стратегии управления энергетическими ресурсами в Узбекистане."
        />
        <meta
          property="og:image"
          content="https://aenergy.uz/path/to/about-image.jpg"
        />
        <meta property="og:url" content="https://aenergy.uz/about" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>
        <commonComp.PageHeader
          title="О НАС"
          description="Информация о нашей компании, нашей деятельности и услуг"
        />
        <about.AboutUs />
        <about.Reposibilaty />
        <about.FAQ />
      </main>
    </>
  );
}
