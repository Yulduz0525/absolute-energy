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
        <title>ABSOLUTE ENERGY</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <commonComp.PageHeader
          title="Контакты"
          description="Информация о нашей компании, нашей деятельности и услуг"
        />
        <Sections.ContactInfo />
        <Sections.ContactForm />
      </main>
    </>
  );
}
