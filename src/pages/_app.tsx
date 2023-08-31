import type { AppProps } from "next/app";
import store from "../store";
import { Provider } from "react-redux";

import Head from "next/head";

import ThemeProvider from "../components/layout/ThemeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>WeatherNow - easily find weather forecast for your city</title>
        <meta
          name="description"
          content="On WeatherNow you can easily find weather forecast and reports for your specific city"
        />
      </Head>
      <ThemeProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
