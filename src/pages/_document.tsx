import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="manifest" href="./manifest.json" />
        <meta name="theme-color" content="#E7E7EB" />
        <link
          rel="icon"
          type="image/x-icon"
          sizes="96x96"
          href="./favicon.ico"
        />
        <link rel="icon" type="image/png" sizes="96x96" href="./favicon.png" />
        <link
          rel="icon"
          sizes="128x128"
          type="image/png"
          href="./favicon-128x128.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          type="image/png"
          href="./apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          type="image/png"
          href="./android-chrome-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="512x512"
          type="image/png"
          href="./android-chrome-512x512.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="64x64"
          href="./favicon-64x64.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
