import Components from "@/components";
import Head from "next/head";

export default function Home() {
  const Sections = Components.section.home;
  return (
    <>
      <html lang="ru" />
      <Head>
        <meta charSet="UTF-8" />
        <title>
          Aenergy - Управление энергетическими и природными ресурсами
        </title>
        <meta
          name="description"
          content="Компания Aenergy предлагает решения для эффективного управления энергетическими и природными ресурсами в Узбекистане. Повышайте энергоэффективность вашего бизнеса."
        />
        <meta
          name="keywords"
          content="энергия, ресурсы, управление, Узбекистан, энергоэффективность, природные ресурсы"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/*  Фавиконы и другие ресурсы  */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Мета теги для социальных сетей: Open Graph и Twitter Cards */}
        <meta
          property="og:title"
          content="Aenergy - Управление энергетическими и природными ресурсами"
        />
        <meta
          property="og:description"
          content="Компания Aenergy предлагает решения для эффективного управления энергетическими и природными ресурсами в Узбекистане."
        />
        <meta
          property="og:image"
          content="https://aenergy.uz/path/to/image.jpg"
        />
        <meta property="og:url" content="https://aenergy.uz" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main>
        <Sections.Banner />
        <Sections.Statistics />
        <Sections.AboutUs />
        <Sections.MainServices />
        <Sections.Portfolios />
        {/* <Sections.ApplyForm /> */}
        {/* <Sections.Services /> */}
        {/* <Sections.ClientSays /> */}
        <Sections.Partners />
        {/* <Sections.FAQ /> */}
      </main>
    </>
  );
}
