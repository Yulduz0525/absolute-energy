import components from "@/components";
import Head from "next/head";

export default function Services() {
  const commonComp = components.common;
  const sections = components.section.services;
  return (
    <>
      <html lang="ru" />
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta charSet="UTF-8" />
        <title>
          Услуги Aenergy - Аренда и Обслуживание Генераторов в Узбекистане
        </title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta
          name="description"
          content="Aenergy предлагает полный спектр услуг по аренде, диагностике, техническому обслуживанию и ремонту генераторов. Надежные решения для вашего бизнеса с гарантией стабильности энергоснабжения."
        />
        <meta
          name="keywords"
          content="аренда генераторов, диагностика генераторов, обслуживание генераторов, ремонт генераторов, энергетические решения, Aenergy, Узбекистан"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Услуги Aenergy - Аренда и Обслуживание Генераторов в Узбекистане"
        />
        <meta
          property="og:description"
          content="Исследуйте наши услуги по аренде, диагностике, техническому обслуживанию и ремонту генераторов. Профессиональное обслуживание и поддержка вашего бизнеса в Узбекистане."
        />
        <meta
          property="og:image"
          content="https://aenergy.uz/path/to/services-image.jpg"
        />
        <meta property="og:url" content="https://aenergy.uz/services" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main>
        <commonComp.PageHeader
          title="Основные направления"
          description="Исследуйте современные тенденции и перспективы развития, чтобы получить полное понимание ключевых аспектов и направлений, влияющих на вашу сферу интересов."
        />
        <sections.ServicesList />
        <sections.Portfolio
          images={[
            "/images/portfolios/1.png",
            "/images/portfolios/2.png",
            "/images/portfolios/3.png",
            "/images/portfolios/4.png",
            "/images/portfolios/5.png",
          ]}
        />
      </main>
    </>
  );
}
