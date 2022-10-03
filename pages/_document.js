import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en' className='dark'>
      <Head>
        <title>animeOne</title>
        <meta charSet='UTF-8' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
