import ThemeProvider from "../components/layout/ThemeProvider";
// import '../styles/variables.scss'
// import '../styles/globals.scss'
// import '../styles/body.scss'
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
