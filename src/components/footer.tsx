import React from "react";
import Link from 'next/link';

import styles from './footer.module.scss';

const links = [
  {
    text: `© ${new Date().getFullYear()} hollywoodhandshakes.com`,
    route: "/"
  },
  {
    text: "About",
    route: "/about"
  }
];

export const Footer: React.FunctionComponent = () => (
  <div className={styles.footer}>
    {links.map((x, i) => <Link href={x.route} key={i}><a className={styles.footer__link}>{x.text}</a></Link>)}
  </div>
);

