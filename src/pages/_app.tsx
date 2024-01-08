import Components from "@/components";
import "@/styles/globals.css";
import "@/styles/variables.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Components.Layout>
      <Component {...pageProps} />
    </Components.Layout>
  );
}
