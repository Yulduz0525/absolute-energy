import Components from "@/components";
import Head from "next/head";

export default function Home() {
  const Sections = Components.section.home;
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Sections.Banner />
        <Sections.AboutUs />
        <Sections.MainServices />
        <Sections.Portfolios />
        <Sections.ApplyForm />
        {/* <Sections.Services /> */}
        <Sections.ClientSays />
        <Sections.Partners />
        <Sections.FAQ />
      </main>
    </>
  );
}
