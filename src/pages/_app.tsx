import type { AppProps } from 'next/app';

import '@styles/global.css';

import { ApolloProvider } from '@apollo/client';
import { client } from '@lib/apollo';
import { Announcement } from '@components/Announcement';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Announcement message='The website is currently under development.' />
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
