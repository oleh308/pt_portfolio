import Head from 'next/head'
import AlertTemplate from 'react-alert-template-mui';
import { ViewportProvider } from '../contexts/viewport';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'

import '../styles/common.scss';

const options = {
  timeout: 5000,
  offset: '30px',
  transition: transitions.FADE,
  position: positions.TOP_RIGHT,
}


function MyApp({ Component, pageProps }) {
  return (
    <ViewportProvider>
      <Head>
        <title>Valerian Steel</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Archivo+Black&family=DM+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <h1>Test</h1>
      <Component {...pageProps} />
    </ViewportProvider>
  );
}

export default MyApp
