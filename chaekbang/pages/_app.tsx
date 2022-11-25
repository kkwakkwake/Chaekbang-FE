import wrapper from "../src/store/configureStore";
import type { AppProps } from "next/app";
import GlobalStyle from "../styles/globalStyle";

export function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

// export default wrapper.withRedux(App);
export default App;
