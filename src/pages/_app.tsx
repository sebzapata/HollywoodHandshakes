import React from 'react';
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Footer } from '../components/footer';
import { Header } from '../components/header';

import styles from './app.module.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.page__content}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}
export default MyApp
