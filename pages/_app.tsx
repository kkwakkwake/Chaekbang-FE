import wrapper from "../src/store/configureStore";
import type { AppProps } from "next/app";
import GlobalStyle from "../styles/globalStyle";
import Head from "next/head";

export function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>책방</title>
        <meta charSet="utf-8" name="description" content="책방" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

// export default wrapper.withRedux(App);
export default App;
