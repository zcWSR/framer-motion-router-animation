// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Space Mono', sans-serif`,
    body: `'Space Mono', sans-serif`,
  },
});

export default theme;
