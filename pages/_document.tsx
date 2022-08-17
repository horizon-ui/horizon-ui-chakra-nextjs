import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang='en'>
      <Head>
        <title>Horizon UI Dashboard</title>

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />

        <link rel='apple-touch-icon' href='/logo192.png' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body id='root'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
