import "../styles/globals.css";
import type { AppProps } from "next/app";

import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";

import theme from "../styles/theme";
import createEmotionCache from "../styles/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <Head>
        <title>wikipedia game</title>
        <meta name="viewport" content="initial-scale=1, width=device=width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};
export default App;
