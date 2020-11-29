import Head from 'next/head'
import { ViewportProvider } from '../contexts/viewport';

import '../styles/common.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ViewportProvider>
      <Head>
        <title>Valerian Steel</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Archivo+Black&family=DM+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </ViewportProvider>
  );
}

export default MyApp
