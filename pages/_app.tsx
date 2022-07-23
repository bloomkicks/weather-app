import store from "../store";
import { Provider } from "react-redux";
import ThemeProvider from "../components/layout/ThemeProvider";
// import '../styles/variables.scss'
// import '../styles/globals.scss'
// import '../styles/body.scss'
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
