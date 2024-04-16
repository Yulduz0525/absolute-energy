import React from "react";
import Components from "@/components";
import Head from "next/head";
import components from "@/components";

type Props = {};

export default function Contact({}: Props) {
  const Sections = Components.section.contact;
  const commonComp = components.common;

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>Контакты - Aenergy</title>
        <meta
          name="description"
          content="Свяжитесь с нами для получения дополнительной информации о наших услугах по аренде, диагностике, обслуживанию и ремонту генераторов."
        />
        <meta
          name="keywords"
          content="контакты, связаться, обратная связь, аренда генераторов, Aenergy, Узбекистан"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <commonComp.PageHeader
          title="Контакты"
          links={<commonComp.ContactSectionHeader />}
        />
        <Sections.ContactInfo />
        <Sections.ContactForm />
      </main>
    </>
  );
}
