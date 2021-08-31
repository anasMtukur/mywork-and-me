import type { AppProps } from 'next/app';
import global from '@/styles/global';
import colors from '@/styles/colors';
import fonts from '@/styles/fonts';
import space from '@/styles/space';
import breakpoints from '@/styles/breakpoints';
import sizes from '@/styles/sizes';
import radii from '@/styles/radii';
import zindexes from '@/styles/zindexes';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import NextNprogress from 'nextjs-progressbar';


const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [theme, setTheme] = useState<any>(
    extendTheme({
      config: {
        cssVarPrefix: 'ggh',
        useSystemColorMode: false,
        initialColorMode: 'light',
      },
      ...global,
      ...colors,
      ...fonts,
      ...space,
      ...breakpoints,
      ...sizes,
      ...radii,
      ...zindexes,
    }),
  );

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      //gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {
        <ChakraProvider resetCSS theme={theme}>
          <NextNprogress
            color="#08593F"
            startPosition={0.3}
            stopDelayMs={200}
            options={{ easing: 'ease', speed: 500, showSpinner: false }}
            height={5}
          />
          <Component {...pageProps} />
        </ChakraProvider>
      }
    </>
  );
}

export default MyApp
