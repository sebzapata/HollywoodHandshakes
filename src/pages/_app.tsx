import React from 'react';
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import {  ToastNotification }  from '../components/toastNotification';

import styles from './app.module.scss';
import '../components/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <head>
        <script async defer data-website-id="eec4c5e0-f148-404b-8501-fc59a0d1d9bb" src="https://sebzapata-umami.herokuapp.com/umami.js"></script>
        <meta charSet="utf-8"/>
        <title>Paul Hollywood's Handshake Collection from The Great British Bake Off</title>
        <link rel="apple-touch-icon" sizes="57x57" href="../../public/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="../../public/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="../../public/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="../../public/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="../../public/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="../../public/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="../../public/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="../../public/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="../../public/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="36x36" href="../../public/android-icon-36x36.png"/>
        <link rel="icon" type="image/png" sizes="48x48" href="../../public/android-icon-48x48.png"/>
        <link rel="icon" type="image/png" sizes="72x72" href="../../public/android-icon-72x72.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="../../public/android-icon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="144x144" href="../../public/android-icon-144x144.png"/>
        <link rel="icon" type="image/png" sizes="192x192" href="../../public/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="../../public/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="../../public/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="../../public/favicon-16x16.png"/>
        <link rel="shortcut icon" href="../../public/favicon.ico"/>
        <link rel="manifest" href="../../public/manifest.json"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/ms-icon-70x70.png"/>
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
        <meta name="msapplication-TileImage" content="/ms-icon-150x150.png"/>
        <meta name="msapplication-TileImage" content="/ms-icon-310x310.png"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta
          name="description"
          content="Come see the definitive collection of Paul Hollywood's handshakes that have been given out across all seasons of The Great British Bake Off!"
        />
      </head>
    <div className={styles.page}>
      <Header />
      <div className={styles.page__content}>
        <Component {...pageProps} />
      </div>
      <ToastNotification />
      <Footer />
    </div>
    </>
  )
}
export default MyApp
