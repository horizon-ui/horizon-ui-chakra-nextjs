import { Html, Head, Main, NextScript } from "next/document";
import SEO from "SEO";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="icon"
          href={(process.env.NEXT_PUBLIC_BASE_PATH || "") + "/favicon.ico"}
        />
        <SEO />
      </Head>
      <body id="root">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
