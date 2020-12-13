import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { IntlProvider } from "react-intl";
import * as locales from "../data/locale";
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
  const router = useRouter();
  const [intl, setIntl] = useState(null);
  const { locale, defaultLocale, pathname } = router;

  return (
    <ViewportProvider>
      <Head>
        <title>Valerian Steel</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Archivo+Black&family=DM+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <IntlProvider
        locale={locale}
        messages={locales[locale]}
        defaultLocale={defaultLocale}
        onError={(error) => {}}
      >
        <AlertProvider template={AlertTemplate} {...options}>
          <Component {...pageProps} />
        </AlertProvider>
      </IntlProvider>
    </ViewportProvider>
  );
}
export default MyApp
