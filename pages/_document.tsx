import Document, { Head, Html, Main, NextScript } from 'next/document'
export default class AppDocument extends Document {

  render() {
    return (
      <Html lang="en">
        <Head>
          <title>LOTTERY 1st</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
          <meta property="og:title" content="LOTTERY 1st" />
          <meta property="og:description" content="LOTTERY 1st description" />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}
