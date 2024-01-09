import Components from "@/components";
import "@/styles/globals.css";
import "@/styles/variables.css";
import Aos from "aos";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import 'aos/dist/aos.css';
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <Components.Layout>
      <Component {...pageProps} />
    </Components.Layout>
  );
}
