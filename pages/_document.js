import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <title>OneAnime</title>
        <meta charSet='UTF-8' />
        <meta name='description' content='Anime website' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
