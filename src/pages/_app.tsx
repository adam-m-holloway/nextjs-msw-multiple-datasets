import { AppProps } from 'next/app';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache', // disable cache
    },
    query: {
      fetchPolicy: 'no-cache', // disable cache
    },
  },
});

const API_MOCKED =
  process.env.NEXT_PUBLIC_API_MOCKING === 'enabled';

if (API_MOCKED) {
  import('../../mocks');
}

const appRoot = ({ Component, pageProps }: AppProps) => (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
);



const App = API_MOCKED
  ? import('../../mocks').then(({ initMSW }) => initMSW().then(() => appRoot))
  : appRoot;

export default await App;
