import components from "@/components";
import Head from "next/head";

export default function Services() {
  const commonComp = components.common;
  const sections = components.section.services;
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
