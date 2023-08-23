import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="./manifest.json" />
        <link rel="icon" href="./favicon.ico" />
        <link rel="icon" type="image/png" href="./favicon.png" />
        <link
          rel="icon"
          sizes="128x128"
          type="image/png"
          href="./favicon-128x128.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./apple-touch-icon.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;400&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#E7E7EB" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
