import type { AppProps } from 'next/app';

import '@styles/global.css';

import { ApolloProvider } from '@apollo/client';
import { client } from '@lib/apollo';

import { Analitycs } from '@components/Analitycs';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      // @ts-ignore
      gtag.pageView(url);
    }

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    }
  });

  return (
    <ApolloProvider client={client}>
      {/* <Announcement message='The website is currently under development.' /> */}
      <Component {...pageProps} />
      <Analitycs />
    </ApolloProvider>
  )
}

export default MyApp
