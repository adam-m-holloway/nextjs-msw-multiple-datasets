import { AppProps } from 'next/app';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const API_MOCKED =
  process.env.NEXT_PUBLIC_API_MOCKING === 'enabled' || process.env.NODE_ENV !== 'production';

if (API_MOCKED) {
  import('../../mocks');
}


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
