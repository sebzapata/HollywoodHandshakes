import Link from 'next/link'
import React from "react";

import styles from './header.module.scss';

export const Header: React.FunctionComponent = () => (
  <div className={styles.header}>
    <h1 className={styles.header__title}>
      <Link href="/"><a>Hollywood Handshakes</a></Link>
    </h1>
    <h2 className={styles.header__subtitle}>
      <span className={styles.header__subtitle__span}>The definitive collection <br className={styles.header__subtitle__break} />of Paul Hollywood&apos;s infamous handshakes</span>
    </h2>
  </div>
);
