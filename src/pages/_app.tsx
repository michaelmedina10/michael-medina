// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/kalam/400.css";
import "@fontsource/open-sans/700.css";
import theme from "../config/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
