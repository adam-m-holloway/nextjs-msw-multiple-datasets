import { AppProps } from 'next/app';
import { initMSW } from '../../mocks/index';

const API_MOCKED =
  process.env.NEXT_PUBLIC_API_MOCKING === 'enabled' || process.env.NODE_ENV !== 'production';

if (API_MOCKED) {
  import('../../mocks');
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
