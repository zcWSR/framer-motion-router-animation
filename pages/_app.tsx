import '../styles/globals.css';
import '@fontsource/space-mono/400.css';
import '@fontsource/space-mono/700.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import { Router, Route } from '../components/pagex';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Router component={Component}>
        <Route path="/" enterDuration={700} exitDuration={700} />
        <Route path="/about" enterDuration={700} exitDuration={700} />
        <Route path="/contact" enterDuration={700} exitDuration={700} />
      </Router>
    </ChakraProvider>
  );
}

export default MyApp;
