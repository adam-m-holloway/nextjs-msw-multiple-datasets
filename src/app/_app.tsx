import { ComponentType } from 'react';
import { AppInitialProps } from 'next/app';

const MyApp = ({ Component, pageProps }: {
  Component: ComponentType<AppInitialProps>;
  pageProps: AppInitialProps;}) => {
  return <Component {...pageProps} />
}
export default MyApp
