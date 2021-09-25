import React from "react";

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
    {links.map((x, i) => <a href={x.route} className={styles.footer__link} key={i}>{x.text}</a>)}
  </div>
);

