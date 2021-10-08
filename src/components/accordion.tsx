import * as React from "react";

import styles from './accordion.module.scss';

export const Accordion: React.FunctionComponent = ({ children }) => {
  return (
    <div className={styles.accordion}>
      {children}
    </div>
  );
};
